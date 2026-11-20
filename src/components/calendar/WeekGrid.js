import ActivityCard from "./ActivityCard";
import { WEEKDAYS } from "@/lib/constants";

// Shows Monday to Friday. Pass in the activities and pods from mock data.
export default function WeekGrid({ activities, pods }) {
  const podName = (id) => pods.find((p) => p.id === id)?.name ?? "Unknown pod";

  return (
    <div className="week-grid">
      {WEEKDAYS.map((dayName, dayIndex) => {
        const todays = activities
          .filter((a) => a.day === dayIndex)
          .sort((a, b) => a.start.localeCompare(b.start));
        return (
          <section key={dayName} aria-labelledby={`day-${dayIndex}`}>
            <h3 id={`day-${dayIndex}`} className="week-day-title">
              {dayName}
            </h3>
            {todays.length === 0 ? (
              <p>No activities.</p>
            ) : (
              todays.map((a) => <ActivityCard key={a.id} activity={a} podName={podName(a.podId)} />)
            )}
          </section>
        );
      })}
    </div>
  );
}
