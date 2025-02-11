"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", expenses: 18500 },
  { month: "Feb", expenses: 19200 },
  { month: "Mar", expenses: 20100 },
  { month: "Apr", expenses: 21500 },
  { month: "May", expenses: 22800 },
  { month: "Jun", expenses: 24000 },
  { month: "Jul", expenses: 24685 },
]

export function ExpenseChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            expenses: {
              label: "Expenses",
              color: "hsl(var(--primary))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="expenses" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

