import { SubscriptionsFilters } from "@/components/subscriptions/filters";
import { SubscriptionsHeader } from "@/components/subscriptions/header";
import { SubscriptionsTable } from "@/components/subscriptions/table";

export default function SubscriptionsPage() {
  return (
    <div className="space-y-6">
      <SubscriptionsHeader />
      <SubscriptionsFilters />
      <SubscriptionsTable />
    </div>
  );
}
