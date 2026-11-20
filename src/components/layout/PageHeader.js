// Page title row with an optional action (e.g. a button) on the right.
export default function PageHeader({ title, action }) {
  return (
    <header className="page-header">
      <h1 className="page-header-title">{title}</h1>
      {action}
    </header>
  );
}
