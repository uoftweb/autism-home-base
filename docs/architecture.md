# Architecture (summary)

Three tiers, as agreed in the team design session.

| Tier | Technology | Responsibility |
|---|---|---|
| Presentation | Next.js (React, JavaScript) | What users see: login, dashboards, calendar, attendance, announcements, staff feed |
| Business logic | Supabase | Permissions, pod membership checks, saving schedules, attendance, announcements, email notifications |
| Data | PostgreSQL (Supabase) | Profiles, pods, user-pod assignments, activities, attendance, announcements, shared notes, audit logs |

The business logic tier is a **modular monolith**: announcements, planner and attendance each have their own module, sharing authentication, authorisation and audit history.

## Roles

| Role | Access |
|---|---|
| Admin | Full access |
| Staff | Limited access to assigned pods |
| Member | Read-only access to assigned pods |

## Entities and relationships

- Profiles to User_Pods: a user can be in several pods
- Pods to User_Pods: a pod has several users
- Pods to Activities, Announcements, Attendance, Shared_Notes: one pod, many of each
- Profiles to Attendance: a pod member has many attendance records
- Profiles to Audit_Logs: a user can perform many recorded actions

## How the UI stage fits in

For now the UI reads from `src/mock-data/` (controlled by `NEXT_PUBLIC_USE_MOCK_DATA`). The mock files have the same shape as the entities above, so connecting Supabase later means replacing the data import, not rewriting components.

The tables, relationships and row-level security rules for these roles are in `supabase/schema.sql`.
