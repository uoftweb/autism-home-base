import Badge from "@/components/ui/Badge";
import { formatTimeRange } from "@/lib/utils";

export default function ActivityCard({ activity, podName }) {
  return (
    <article className="activity-card">
      <h4 className="activity-card-title">{activity.title}</h4>
      <p className="activity-card-meta">
        {formatTimeRange(activity.start, activity.end)} · {activity.location}
      </p>
      <Badge tone="green">{podName}</Badge>
    </article>
  );
}
