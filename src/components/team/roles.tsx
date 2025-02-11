import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const roles = [
  {
    name: "Admin",
    description: "Full access to all features",
    permissions: ["Manage team members", "Manage subscriptions", "View analytics", "Manage billing"],
  },
  {
    name: "Finance Manager",
    description: "Access to financial features",
    permissions: ["View team members", "Manage subscriptions", "View analytics", "Manage billing"],
  },
  {
    name: "IT Manager",
    description: "Access to IT-related features",
    permissions: ["View team members", "Manage subscriptions", "View analytics", "View billing"],
  },
  {
    name: "Team Member",
    description: "Basic access",
    permissions: ["View team members", "View subscriptions", "View analytics"],
  },
]

export function TeamRoles() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Roles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {roles.map((role) => (
            <div key={role.name} className="space-y-2">
              <h3 className="font-medium leading-none">{role.name}</h3>
              <p className="text-sm text-muted-foreground">{role.description}</p>
              <div className="mt-2 space-y-1">
                {role.permissions.map((permission) => (
                  <div key={permission} className="text-sm">
                    • {permission}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

