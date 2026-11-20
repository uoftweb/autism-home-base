// Labelled text input. Every input must have a visible label.
// Usage: <Input id="email" label="Email" type="email" error="Enter a valid email" />
export default function Input({ id, label, error, ...props }) {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        className="field-input"
        aria-invalid={error ? "true" : undefined}
        aria-describedby={errorId}
        {...props}
      />
      {error && (
        <span id={errorId} className="field-error">
          {error}
        </span>
      )}
    </div>
  );
}
