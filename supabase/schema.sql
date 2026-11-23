-- AHB Weekly Planner database schema (PostgreSQL / Supabase)
-- Run in the Supabase dashboard: SQL Editor > New query > paste > Run.

-- Tables ---------------------------------------------------------------------

create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null default '',
  role text not null default 'member' check (role in ('admin', 'staff', 'member')),
  created_at timestamptz not null default now()
);

create table pods (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz not null default now()
);

create table user_pods (
  user_id uuid not null references profiles (id) on delete cascade,
  pod_id uuid not null references pods (id) on delete cascade,
  primary key (user_id, pod_id)
);

create table activities (
  id uuid primary key default gen_random_uuid(),
  pod_id uuid not null references pods (id) on delete cascade,
  title text not null,
  location text,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  created_by uuid references profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

create table attendance (
  id uuid primary key default gen_random_uuid(),
  activity_id uuid not null references activities (id) on delete cascade,
  profile_id uuid not null references profiles (id) on delete cascade,
  status text not null check (status in ('present', 'absent', 'late')),
  marked_by uuid references profiles (id) on delete set null,
  created_at timestamptz not null default now(),
  unique (activity_id, profile_id)
);

create table announcements (
  id uuid primary key default gen_random_uuid(),
  pod_id uuid not null references pods (id) on delete cascade,
  author_id uuid references profiles (id) on delete set null,
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create table shared_notes (
  id uuid primary key default gen_random_uuid(),
  pod_id uuid not null references pods (id) on delete cascade,
  author_id uuid references profiles (id) on delete set null,
  body text not null,
  created_at timestamptz not null default now()
);

create table audit_logs (
  id bigint generated always as identity primary key,
  user_id uuid references profiles (id) on delete set null,
  action text not null,
  table_name text not null,
  record_id text,
  created_at timestamptz not null default now()
);

-- Create a profile automatically when someone signs up ------------------------

create function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', ''));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- Helper functions used by the security policies -----------------------------

create function current_user_role() returns text
language sql stable security definer set search_path = public as $$
  select role from profiles where id = auth.uid();
$$;

create function is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce(current_user_role() = 'admin', false);
$$;

create function is_pod_member(target_pod uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from user_pods where user_id = auth.uid() and pod_id = target_pod
  );
$$;

-- Admins, or staff assigned to the pod, can change that pod's data.
create function can_manage_pod(target_pod uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select is_admin() or (current_user_role() = 'staff' and is_pod_member(target_pod));
$$;

-- Row-level security ---------------------------------------------------------
-- Admin: full access. Staff: manage their assigned pods. Member: read-only, assigned pods only.

alter table profiles enable row level security;
alter table pods enable row level security;
alter table user_pods enable row level security;
alter table activities enable row level security;
alter table attendance enable row level security;
alter table announcements enable row level security;
alter table shared_notes enable row level security;
alter table audit_logs enable row level security;

-- profiles: your own row, anyone who shares a pod with you, or everything for admins
create policy "profiles read" on profiles for select using (
  id = auth.uid()
  or is_admin()
  or exists (
    select 1 from user_pods mine
    join user_pods theirs on theirs.pod_id = mine.pod_id
    where mine.user_id = auth.uid() and theirs.user_id = profiles.id
  )
);
create policy "profiles admin write" on profiles for all
  using (is_admin()) with check (is_admin());

-- pods
create policy "pods read" on pods for select using (is_admin() or is_pod_member(id));
create policy "pods admin write" on pods for all
  using (is_admin()) with check (is_admin());

-- user_pods
create policy "user_pods read" on user_pods for select using (is_admin() or user_id = auth.uid());
create policy "user_pods admin write" on user_pods for all
  using (is_admin()) with check (is_admin());

-- activities
create policy "activities read" on activities for select
  using (is_admin() or is_pod_member(pod_id));
create policy "activities manage" on activities for all
  using (can_manage_pod(pod_id)) with check (can_manage_pod(pod_id));

-- attendance (belongs to a pod through its activity)
create policy "attendance read" on attendance for select using (
  exists (
    select 1 from activities a
    where a.id = attendance.activity_id and (is_admin() or is_pod_member(a.pod_id))
  )
);
create policy "attendance manage" on attendance for all
  using (exists (select 1 from activities a where a.id = attendance.activity_id and can_manage_pod(a.pod_id)))
  with check (exists (select 1 from activities a where a.id = attendance.activity_id and can_manage_pod(a.pod_id)));

-- announcements
create policy "announcements read" on announcements for select
  using (is_admin() or is_pod_member(pod_id));
create policy "announcements manage" on announcements for all
  using (can_manage_pod(pod_id)) with check (can_manage_pod(pod_id));

-- shared_notes: staff and admins only
create policy "shared_notes staff read" on shared_notes for select using (can_manage_pod(pod_id));
create policy "shared_notes staff write" on shared_notes for all
  using (can_manage_pod(pod_id)) with check (can_manage_pod(pod_id));

-- audit_logs: admins can read; rows are written by server code using the service role key
create policy "audit_logs admin read" on audit_logs for select using (is_admin());
