import { TeamHeader } from "@/components/team/header";
import { TeamMembers } from "@/components/team/members";
import { TeamRoles } from "@/components/team/roles";

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <TeamHeader />
      <div className="grid gap-6 md:grid-cols-2">
        <TeamMembers />
        <TeamRoles />
      </div>
    </div>
  );
}
