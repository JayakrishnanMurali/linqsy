import { BillingSettings } from "@/components/settings/billing";
import { GeneralSettings } from "@/components/settings/general";
import { SettingsHeader } from "@/components/settings/header";
import { IntegrationsSettings } from "@/components/settings/integrations";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <SettingsHeader />
      <div className="grid gap-6">
        <GeneralSettings />
        <IntegrationsSettings />
        <BillingSettings />
      </div>
    </div>
  );
}
