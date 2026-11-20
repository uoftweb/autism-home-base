import PageHeader from "@/components/layout/PageHeader";
import SummaryCard from "@/components/dashboard/SummaryCard";
import TodayActivities from "@/components/dashboard/TodayActivities";
import { activities } from "@/mock-data/activities";
import { announcements } from "@/mock-data/announcements";

export const metadata = { title: "Dashboard | AHB Weekly Planner" };

export default function DashboardPage() {
  const todays = activities.filter((a) => a.day === 0); // mock: pretend today is Monday

  return (
    <>
      <PageHeader title="Dashboard" />
      <div className="summary-grid">
        <SummaryCard label="Activities today" value={todays.length} />
        <SummaryCard label="Announcements" value={announcements.length} />
        <SummaryCard label="Attendance rate" value="75%" />
      </div>
      <TodayActivities activities={todays} />
    </>
  );
}
