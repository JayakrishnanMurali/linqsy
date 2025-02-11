import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const renewals = [
  {
    name: "Adobe Creative Cloud",
    amount: 599.88,
    date: "Aug 15, 2023",
    logo: "/placeholder.svg",
  },
  {
    name: "Slack",
    amount: 150.0,
    date: "Aug 18, 2023",
    logo: "/placeholder.svg",
  },
  {
    name: "AWS",
    amount: 2430.5,
    date: "Aug 20, 2023",
    logo: "/placeholder.svg",
  },
  {
    name: "Notion",
    amount: 96.0,
    date: "Aug 25, 2023",
    logo: "/placeholder.svg",
  },
]

export function UpcomingRenewals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Renewals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {renewals.map((renewal) => (
            <div key={renewal.name} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={renewal.logo} alt={renewal.name} />
                <AvatarFallback>{renewal.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{renewal.name}</p>
                <p className="text-sm text-muted-foreground">{renewal.date}</p>
              </div>
              <div className="ml-auto font-medium">${renewal.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

