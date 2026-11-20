import PageHeader from "@/components/layout/PageHeader";
import AttendanceTable from "@/components/attendance/AttendanceTable";
import { profiles } from "@/mock-data/profiles";
import { attendance } from "@/mock-data/attendance";
import { activities } from "@/mock-data/activities";

export const metadata = { title: "Attendance | AHB Weekly Planner" };

export default function AttendancePage() {
  const activity = activities[0]; // mock: first activity; Person C adds an activity picker
  const participants = profiles.filter((p) => p.role === "member" && p.podIds.includes(activity.podId));
  const records = attendance.filter((r) => r.activityId === activity.id);

  return (
    <>
      <PageHeader title="Attendance" />
      <h2>{activity.title}</h2>
      <AttendanceTable participants={participants} initialRecords={records} />
    </>
  );
}
