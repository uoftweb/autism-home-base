export const USE_MOCK_DATA = process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true";

export const ROLES = {
  ADMIN: "admin",
  STAFF: "staff",
  MEMBER: "member",
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
