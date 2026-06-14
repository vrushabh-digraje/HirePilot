import { BadgeCheck, BrainCircuit, CalendarCheck, TrendingUp, Users } from "lucide-react";

const metrics = [
  { icon: Users, label: "Active candidates", value: "42", detail: "+9 this week" },
  { icon: CalendarCheck, label: "Scheduled interviews", value: "18", detail: "6 today" },
  { icon: BrainCircuit, label: "AI question sets", value: "126", detail: "Across 12 roles" },
  { icon: BadgeCheck, label: "Offer readiness", value: "74%", detail: "+11% vs last month" },
];

export default function MetricsGrid() {
  return (
    <div className="metric-grid">
      {metrics.map((metric) => (
        <Metric key={metric.label} {...metric} />
      ))}
    </div>
  );
}

function Metric({ icon: Icon, label, value, detail }) {
  return (
    <div className="metric-card">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="metric-icon"><Icon /></div>
        <TrendingUp />
      </div>
      <div className="h3 fw-bold mb-0">{value}</div>
      <div className="text-secondary">{label}</div>
      <small className="text-success">{detail}</small>
    </div>
  );
}
