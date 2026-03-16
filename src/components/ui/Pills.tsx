interface BadgeProps {
  status: "ticketed" | "pending" | "reserved";
  className?: string;
}

const statusStyles = {
  ticketed: "bg-green-100 text-green-600",
  pending: "bg-gray-100 text-gray-500",
  reserved: "bg-blue-100 text-blue-500",
};

const Badge = ({ status, className = "" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${statusStyles[status]} ${className}`}
    >
      {status}
    </span>
  );
};

export default Badge;
