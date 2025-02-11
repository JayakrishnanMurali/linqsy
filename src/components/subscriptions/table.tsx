"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Pencil, Trash2, Users } from "lucide-react"

const subscriptions = [
  {
    id: 1,
    name: "Adobe Creative Cloud",
    category: "Design",
    status: "Active",
    users: 25,
    cost: 599.88,
    renewal: "Monthly",
    nextRenewal: "2024-08-15",
    logo: "/placeholder.svg",
    owner: "Design Team",
  },
  {
    id: 2,
    name: "Slack",
    category: "Communication",
    status: "Active",
    users: 128,
    cost: 150.0,
    renewal: "Monthly",
    nextRenewal: "2024-08-18",
    logo: "/placeholder.svg",
    owner: "IT Team",
  },
  {
    id: 3,
    name: "AWS",
    category: "Infrastructure",
    status: "Active",
    users: 15,
    cost: 2430.5,
    renewal: "Monthly",
    nextRenewal: "2024-08-20",
    logo: "/placeholder.svg",
    owner: "DevOps Team",
  },
  {
    id: 4,
    name: "Notion",
    category: "Productivity",
    status: "Active",
    users: 85,
    cost: 96.0,
    renewal: "Monthly",
    nextRenewal: "2024-08-25",
    logo: "/placeholder.svg",
    owner: "Product Team",
  },
  {
    id: 5,
    name: "Figma",
    category: "Design",
    status: "Active",
    users: 12,
    cost: 180.0,
    renewal: "Monthly",
    nextRenewal: "2024-08-30",
    logo: "/placeholder.svg",
    owner: "Design Team",
  },
]

export function SubscriptionsTable() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Users</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Next Renewal</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscriptions.map((subscription) => (
            <TableRow key={subscription.id}>
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
              <TableCell>
                <Button variant="ghost" size="sm" className="space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{subscription.users}</span>
                </Button>
              </TableCell>
              <TableCell>${subscription.cost}</TableCell>
              <TableCell>{subscription.nextRenewal}</TableCell>
              <TableCell>{subscription.owner}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

