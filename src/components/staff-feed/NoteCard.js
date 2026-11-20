import Card from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";

export default function NoteCard({ note }) {
  return (
    <Card>
      <p className="feed-meta">
        {note.author} · {formatDate(note.date)}
      </p>
      <p>{note.body}</p>
    </Card>
  );
}
