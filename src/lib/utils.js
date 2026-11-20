// Small helpers shared across the app.

export function formatTimeRange(start, end) {
  return `${start} to ${end}`;
}

export function formatDate(isoDate) {
  return new Date(isoDate + "T00:00:00").toLocaleDateString("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}
