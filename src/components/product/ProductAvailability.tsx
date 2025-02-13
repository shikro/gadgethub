import { CheckCircle, XCircle, Clock } from "lucide-react";

interface ProductAvailabilityProps {
  status: "in-stock" | "out-of-stock" | "low-stock";
  quantity?: number;
}

export function ProductAvailability({
  status,
  quantity,
}: ProductAvailabilityProps) {
  const statusConfig = {
    "in-stock": {
      Icon: CheckCircle,
      text: "In Stock",
      color: "text-green-600",
    },
    "out-of-stock": {
      Icon: XCircle,
      text: "Out of Stock",
      color: "text-red-600",
    },
    "low-stock": {
      Icon: Clock,
      text: `Only ${quantity} left`,
      color: "text-orange-600",
    },
  };

  const { Icon, text, color } = statusConfig[status];

  return (
    <div className={`flex items-center gap-1 ${color}`}>
      <Icon className="h-4 w-4" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
