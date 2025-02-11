import { AnalyticsHeader } from "@/components/analytics/header";
import { SpendingByCategory } from "@/components/analytics/spending-by-category";
import { SpendingTrend } from "@/components/analytics/spending-trend";
import { TopExpenses } from "@/components/analytics/top-expenses";
import { UserGrowth } from "@/components/analytics/user-growth";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <AnalyticsHeader />
      <div className="grid gap-6 md:grid-cols-2">
        <SpendingTrend />
        <SpendingByCategory />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <TopExpenses />
        <UserGrowth />
      </div>
    </div>
  );
}
