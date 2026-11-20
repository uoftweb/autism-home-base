// Shared card container with an optional title.
export default function Card({ title, children, className = "" }) {
  return (
    <section className={`card ${className}`.trim()}>
      {title && <h2 className="card-title">{title}</h2>}
      {children}
    </section>
  );
}
