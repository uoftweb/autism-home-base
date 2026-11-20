import PageHeader from "@/components/layout/PageHeader";
import NoteCard from "@/components/staff-feed/NoteCard";
import { notes } from "@/mock-data/notes";

export const metadata = { title: "Staff feed | AHB Weekly Planner" };

export default function StaffFeedPage() {
  return (
    <>
      <PageHeader title="Staff feed" />
      <div className="feed">
        {notes.map((n) => (
          <NoteCard key={n.id} note={n} />
        ))}
      </div>
    </>
  );
}
