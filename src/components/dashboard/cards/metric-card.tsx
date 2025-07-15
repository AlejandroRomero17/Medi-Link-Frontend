import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MetricCard({
  title,
  value,
  unit,
  icon: Icon,
  status,
  change,
}: {
  title: string;
  value: string;
  unit: string;
  icon: React.ComponentType<{ className?: string }>;
  status: "good" | "normal" | "warning";
  change: string;
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-muted">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <Badge variant={status === "warning" ? "destructive" : "default"}>
            {status}
          </Badge>
        </div>
        {/* Resto del contenido */}
      </CardContent>
    </Card>
  );
}
