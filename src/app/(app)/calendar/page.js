import PageHeader from "@/components/layout/PageHeader";
import WeekGrid from "@/components/calendar/WeekGrid";
import { activities } from "@/mock-data/activities";
import { pods } from "@/mock-data/pods";

export const metadata = { title: "Calendar | AHB Weekly Planner" };

export default function CalendarPage() {
  return (
    <>
      <PageHeader title="Weekly calendar" />
      <WeekGrid activities={activities} pods={pods} />
    </>
  );
}
