import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const members = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    avatar: "/placeholder.svg",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Finance Manager",
    avatar: "/placeholder.svg",
    status: "Active",
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "IT Manager",
    avatar: "/placeholder.svg",
    status: "Active",
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "Team Member",
    avatar: "/placeholder.svg",
    status: "Pending",
  },
]

export function TeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {members.map((member) => (
            <div key={member.email} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">{member.role}</span>
                <Badge
                  variant="outline"
                  className={
                    member.status === "Active"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-yellow-50 text-yellow-700 border-yellow-200"
                  }
                >
                  {member.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

