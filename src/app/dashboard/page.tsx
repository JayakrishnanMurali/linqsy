import { OverviewMetrics } from "@/components/overview-metrics";
import { SubscriptionsList } from "@/components/subscriptions-list";
import { ExpenseChart } from "@/components/expense-chart";
import { UpcomingRenewals } from "@/components/upcoming-renewals";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back to your subscription dashboard.
        </p>
      </div>
      <OverviewMetrics />
      <div className="grid gap-6 md:grid-cols-2">
        <ExpenseChart />
        <UpcomingRenewals />
      </div>
      <SubscriptionsList />
    </div>
  );
}
