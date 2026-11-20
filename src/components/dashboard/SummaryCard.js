import Card from "@/components/ui/Card";

export default function SummaryCard({ label, value }) {
  return (
    <Card title={label}>
      <p className="summary-card-value">{value}</p>
    </Card>
  );
}
