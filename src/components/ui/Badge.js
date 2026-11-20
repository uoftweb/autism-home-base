// Small label, e.g. a pod name. tone: "default" (charcoal) or "green".
export default function Badge({ tone = "default", children }) {
  const toneClass = tone === "green" ? " badge-green" : "";
  return <span className={`badge${toneClass}`}>{children}</span>;
}
