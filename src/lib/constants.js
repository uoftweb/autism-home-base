export const ROLES = {
  ADMIN: "admin", // full access
  STAFF: "staff", // limited access to assigned pods
  MEMBER: "member", // read-only access to assigned pods
};

export const ATTENDANCE_STATUSES = ["present", "absent", "late"];

export const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/calendar", label: "Calendar" },
  { href: "/attendance", label: "Attendance" },
  { href: "/announcements", label: "Announcements" },
  { href: "/staff-feed", label: "Staff feed" },
];

export const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
