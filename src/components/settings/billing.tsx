import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BillingSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Settings</CardTitle>
        <CardDescription>Manage your subscription and billing information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Current Plan</h3>
            <p className="text-sm text-muted-foreground">Pro Plan</p>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            Active
          </Badge>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Payment Method</h3>
          <div className="flex items-center space-x-4">
            <div className="rounded-md border p-2">
              <img src="/placeholder.svg" alt="Visa card" className="h-8" />
            </div>
            <div>
              <p className="text-sm font-medium">Visa ending in 4242</p>
              <p className="text-sm text-muted-foreground">Expires 12/24</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Billing Email</h3>
          <p className="text-sm text-muted-foreground">billing@acme.com</p>
        </div>
        <div className="flex space-x-4">
          <Button>Update Payment Method</Button>
          <Button variant="outline">View Billing History</Button>
        </div>
      </CardContent>
    </Card>
  )
}

