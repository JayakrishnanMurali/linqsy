"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", actual: 18500, predicted: 19000 },
  { month: "Feb", actual: 19200, predicted: 19500 },
  { month: "Mar", actual: 20100, predicted: 20000 },
  { month: "Apr", actual: 21500, predicted: 21000 },
  { month: "May", actual: 22800, predicted: 22000 },
  { month: "Jun", actual: 24000, predicted: 23500 },
  { month: "Jul", actual: 24685, predicted: 24500 },
  { month: "Aug", actual: null, predicted: 25500 },
  { month: "Sep", actual: null, predicted: 26000 },
  { month: "Oct", actual: null, predicted: 26800 },
  { month: "Nov", actual: null, predicted: 27500 },
  { month: "Dec", actual: null, predicted: 28200 },
]

export function SpendingTrend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Trend & Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            actual: {
              label: "Actual Spend",
              color: "hsl(var(--primary))",
            },
            predicted: {
              label: "Predicted Spend",
              color: "hsl(var(--muted-foreground))",
            },
          }}
          className="h-[350px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="actual" strokeWidth={2} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="predicted" strokeDasharray="5 5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

