import PageHeader from "@/components/layout/PageHeader";
import AnnouncementCard from "@/components/announcements/AnnouncementCard";
import { announcements } from "@/mock-data/announcements";
import { pods } from "@/mock-data/pods";

export const metadata = { title: "Announcements | AHB Weekly Planner" };

export default function AnnouncementsPage() {
  const podName = (id) => pods.find((p) => p.id === id)?.name ?? "Unknown pod";
  const newestFirst = [...announcements].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader title="Announcements" />
      <div className="feed">
        {newestFirst.map((a) => (
          <AnnouncementCard key={a.id} announcement={a} podName={podName(a.podId)} />
        ))}
      </div>
    </>
  );
}
