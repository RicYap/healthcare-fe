import type { ReactNode } from "react";

type Status = "normal" | "warning" | "critical";

interface StatusBadgeProps {
  status: Status;
  children?: ReactNode;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const statusClasses = {
    normal: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    critical: "bg-red-100 text-red-800",
  };

  const statusText = {
    normal: "Normal",
    warning: "Warning",
    critical: "Critical",
  };

  return (
    <div
      className={`flex justify-center items-center rounded-full text-xs font-medium px-2 py-2  ${statusClasses[status]}`}
    >
      {statusText[status]}
    </div>
  );
}
