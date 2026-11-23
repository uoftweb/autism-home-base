# UI tickets: round 1

Four people, each ticket sized for roughly **4 to 5 hours**. Everything uses the fake data already provided in `src/mock-data/`, and the design comes from Figma.

The files in `src/components/` and `src/app/` are empty. Build them from the Figma design. Global styles, the PT Sans font, colours and spacing are already set up in `globals.css` and `src/styles/tokens.css`, so style your components with the tokens (for example `var(--color-primary)`, `var(--space-4)`) and leave those two files alone.

**Person A's shared components come first.** Button, Card, Input and Badge in `components/ui/` are needed by everyone, so Person A opens a PR for just those four in the first hour or two and the lead merges it quickly. Until then, others work on page structure and layout, then switch to the shared components once merged.

Folders are split by feature, so people should rarely edit the same file. If you need to change something in another person's folder, ask them first.

| # | Owner | Ticket | You will work in |
|---|---|---|---|
| 1 | Person A | **Shared components, app shell and login** | `components/ui/`, `components/layout/`, `components/auth/`, `app/(auth)/login/`, `app/(app)/layout.js`, `app/layout.js` |
| 2 | Person B | **Weekly calendar** | `components/calendar/`, `app/(app)/calendar/` |
| 3 | Person C | **Dashboard and attendance** | `components/dashboard/`, `components/attendance/`, `app/(app)/dashboard/`, `app/(app)/attendance/` |
| 4 | Person D | **Announcements and staff feed** | `components/announcements/`, `components/staff-feed/`, `app/(app)/announcements/`, `app/(app)/staff-feed/` |

## 1. Shared components, app shell and login (Person A)

- Build the shared `ui/` components (`Button`, `Card`, `Input`, `Badge`) to match the Figma kit: sizes, hover, focus and disabled states. Open this as a first small PR.
- Build `Navbar`: logo, links to the five pages, highlights the current page, collapses to a menu button on phones.
- Build `PageHeader` with title and optional action button.
- Build the login page to match Figma: logo, email, password, sign-in button, error message state.
- Done when: all five pages show the nav; login looks right at phone and laptop width; keyboard focus is visible everywhere.

## 2. Weekly calendar (Person B)

- `WeekGrid` shows Monday to Friday with activities in time order.
- `ActivityCard` shows title, time range, location and pod badge.
- `WeekSwitcher` with previous, next and "this week" buttons that change the displayed week (state only, no backend).
- Phone layout: days stack vertically instead of columns.
- Empty state for a day with no activities.
- Done when: switching weeks updates the grid from mock data and the layout works on a phone.

## 3. Dashboard and attendance (Person C)

- Dashboard: `SummaryCard` row (activities today, announcements, attendance rate) and a `TodayActivities` list.
- Attendance page: `AttendanceTable` with a row per participant and a Present / Absent / Late control per activity.
- Toggles update on screen only (local state); no saving yet.
- Show a running count ("8 of 12 present").
- Done when: both pages match Figma and the attendance controls are keyboard-operable.

## 4. Announcements and staff feed (Person D)

- `AnnouncementCard` with title, date, pod badge and body text; newest first.
- `AnnouncementForm` (title, message, pod selector) that adds an announcement to the list on screen.
- Staff feed: `NoteCard` list and `NoteForm`; this page is for staff and admins only (show it as visible; real permissions come with the backend).
- Empty states and basic form validation messages.
- Done when: posting a new item appears at the top of the list and forms are labelled and keyboard-friendly.

## Round 2 (after round 1 is reviewed)

- Responsive and accessibility pass across all pages (everyone reviews a page they did not build).
- Loading, error and empty states using one shared pattern.
- Role-based UI: hide or disable controls for the Member role.
- Replace mock-data imports with a data layer function per feature, ready for Supabase.

## Definition of done for a ticket

- Matches Figma at phone and laptop widths
- `npm run lint` and `npm run build` pass
- PR opened with screenshots and the template completed
- Reviewed and merged by the lead
