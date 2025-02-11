import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function TeamHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Team Management</h1>
        <p className="text-muted-foreground">Manage your team members and their access levels.</p>
      </div>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Invite Member
      </Button>
    </div>
  )
}

