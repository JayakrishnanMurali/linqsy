import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Integration {
  name: string;
  status: "Connected" | "Disconnected";
}

export const IntegrationsSettings: React.FC = () => {
  const integrations: Integration[] = [
    { name: "Integration 1", status: "Connected" },
    { name: "Integration 2", status: "Disconnected" },
  ];

  return (
    <Card>
      <CardContent>
        <div className="space-y-4">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="font-medium">{integration.name}</span>
                </div>
                <Badge
                  color="success"
                  variant="secondary"
                  className={cn({
                    "bg-green-100 text-green-800":
                      integration.status === "Connected",
                    "bg-red-100 text-red-800":
                      integration.status === "Disconnected",
                  })}
                >
                  {integration.status}
                </Badge>
              </div>
              <div>
                <Button variant="outline">
                  {integration.status === "Connected"
                    ? "Disconnect"
                    : "Connect"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
