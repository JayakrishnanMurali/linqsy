import { AddSubscription } from "@/components/subscriptions/add-subscription";

export function SubscriptionsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Subscriptions</h1>
        <p className="text-muted-foreground">
          Manage and track all your team subscriptions in one place.
        </p>
      </div>
      <AddSubscription />
    </div>
  );
}
