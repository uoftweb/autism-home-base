import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export default function AnnouncementCard({ announcement, podName }) {
  return (
    <Card title={announcement.title}>
      <p className="feed-meta">
        {formatDate(announcement.date)} · <Badge tone="green">{podName}</Badge>
      </p>
      <p>{announcement.body}</p>
    </Card>
  );
}
