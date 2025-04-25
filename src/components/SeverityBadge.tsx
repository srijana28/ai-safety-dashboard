import { Severity } from "../types/incident";

interface SeverityBadgeProps {
  severity: Severity;
}

export const SeverityBadge = ({ severity }: SeverityBadgeProps) => {
  const severityClasses = {
    Low: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    High: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${severityClasses[severity]}`}
    >
      {severity}
    </span>
  );
};