// Shared button. Usage: <Button variant="primary">Save</Button>
// Figma name: "Button / Primary" and "Button / Secondary"
export default function Button({ variant = "primary", type = "button", children, ...props }) {
  return (
    <button type={type} className={`button button-${variant}`} {...props}>
      {children}
    </button>
  );
}
