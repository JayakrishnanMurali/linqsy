import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const expenses = [
  {
    name: "AWS",
    amount: 2430.5,
    change: "+15%",
    logo: "/placeholder.svg",
  },
  {
    name: "Adobe Creative Cloud",
    amount: 599.88,
    change: "+5%",
    logo: "/placeholder.svg",
  },
  {
    name: "Slack",
    amount: 150.0,
    change: "0%",
    logo: "/placeholder.svg",
  },
  {
    name: "Figma",
    amount: 180.0,
    change: "+10%",
    logo: "/placeholder.svg",
  },
  {
    name: "Notion",
    amount: 96.0,
    change: "0%",
    logo: "/placeholder.svg",
  },
]

export function TopExpenses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {expenses.map((expense) => (
            <div key={expense.name} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={expense.logo} alt={expense.name} />
                <AvatarFallback>{expense.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{expense.name}</p>
                <p className="text-sm text-muted-foreground">Change: {expense.change}</p>
              </div>
              <div className="ml-auto font-medium">${expense.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

