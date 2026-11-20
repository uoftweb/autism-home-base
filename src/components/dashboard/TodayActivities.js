import Card from "@/components/ui/Card";
import { formatTimeRange } from "@/lib/utils";

export default function TodayActivities({ activities }) {
  return (
    <Card title="Today">
      {activities.length === 0 ? (
        <p>No activities today.</p>
      ) : (
        <ul className="simple-list">
          {activities.map((a) => (
            <li key={a.id}>
              <strong>{a.title}</strong>
              <br />
              {formatTimeRange(a.start, a.end)} · {a.location}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
