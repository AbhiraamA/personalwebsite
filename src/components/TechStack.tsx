import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function TechStack({
  items,
  className,
}: {
  items: { label: string; icon?: React.ReactNode }[];
  className?: string;
}) {
  return (
    <Card className={cn("", className)}>
      <CardContent className="p-4 md:p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {items.map((t) => (
            <div key={t.label} className="flex items-center gap-2 rounded-lg border p-2">
              {t.icon}
              <span className="text-sm font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
