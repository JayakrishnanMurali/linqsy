import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const subscriptions = [
  {
    name: "Adobe Creative Cloud",
    category: "Design",
    status: "Active",
    users: 25,
    cost: 599.88,
    renewal: "Monthly",
    logo: "/placeholder.svg",
  },
  {
    name: "Slack",
    category: "Communication",
    status: "Active",
    users: 128,
    cost: 150.0,
    renewal: "Monthly",
    logo: "/placeholder.svg",
  },
  {
    name: "AWS",
    category: "Infrastructure",
    status: "Active",
    users: 15,
    cost: 2430.5,
    renewal: "Monthly",
    logo: "/placeholder.svg",
  },
  {
    name: "Notion",
    category: "Productivity",
    status: "Active",
    users: 85,
    cost: 96.0,
    renewal: "Monthly",
    logo: "/placeholder.svg",
  },
  {
    name: "Figma",
    category: "Design",
    status: "Active",
    users: 12,
    cost: 180.0,
    renewal: "Monthly",
    logo: "/placeholder.svg",
  },
]

export function SubscriptionsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead>Renewal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map((subscription) => (
              <TableRow key={subscription.name}>
                <TableCell>
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={subscription.logo} alt={subscription.name} />
                      <AvatarFallback>{subscription.name[0]}</AvatarFallback>
                    </Avatar>
                    {subscription.name}
                  </div>
                </TableCell>
                <TableCell>{subscription.category}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {subscription.status}
                  </Badge>
                </TableCell>
                <TableCell>{subscription.users}</TableCell>
                <TableCell>${subscription.cost}</TableCell>
                <TableCell>{subscription.renewal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

