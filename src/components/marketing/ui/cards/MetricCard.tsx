import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  status: string;
  icon: LucideIcon;
  iconColor: string;
  badgeColor: string;
  progressColor: string;
  progressWidth: string;
  color: string;
}

export const MetricCard = ({
  title,
  value,
  description,
  status,
  icon: Icon,
  iconColor,
  badgeColor,
  progressColor,
  progressWidth,
  color,
}: MetricCardProps) => (
  <Card className={`border-${color}-200 hover:shadow-lg transition-shadow`}>
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between">
        <Icon className={`h-8 w-8 text-${iconColor}`} />
        <Badge
          variant="secondary"
          className={`bg-${badgeColor}-100 text-${badgeColor}-700`}
        >
          {status}
        </Badge>
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="mt-4 h-2 bg-gray-200 rounded-full">
        <div
          className={`h-2 bg-${progressColor}-500 rounded-full ${progressWidth}`}
        ></div>
      </div>
    </CardContent>
  </Card>
);
