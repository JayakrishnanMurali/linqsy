"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MultipleSelector from "@/components/ui/multi-select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";

export type Category = {
  value: string;
  label: string;
};

export const categories: Category[] = [
  { value: "design", label: "Design" },
  { value: "development", label: "Development" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "finance", label: "Finance" },
  { value: "hr", label: "HR" },
  { value: "legal", label: "Legal" },
  { value: "operations", label: "Operations" },
  { value: "product", label: "Product" },
  { value: "support", label: "Support" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "communication", label: "Communication" },
  { value: "productivity", label: "Productivity" },
  { value: "security", label: "Security" },
  { value: "other", label: "Other" },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  categories: z.array(z.string()).min(1, {
    message: "Please select at least one category.",
  }),
  cost: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: "Please enter a valid amount.",
  }),
  renewal: z.string({
    required_error: "Please select a renewal period.",
  }),
  renewalDate: z.date({
    required_error: "Please select a renewal date.",
  }),
});

export const renewalPeriods = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
  { value: "one_time", label: "One-time" },
  { value: "permanent", label: "Permanent" },
] as const;

// infer formScheme type
type FormSchema = z.infer<typeof formSchema>;

export function AddSubscription() {
  const [sheetOpen, setSheetOpen] = React.useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      categories: [],
      cost: "",
      renewal: "monthly",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
    setSheetOpen(false);
    form.reset();
  }

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Subscription
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[540px]">
        <SheetHeader>
          <SheetTitle>Add New Subscription</SheetTitle>
          <SheetDescription>
            Add a new subscription to track. Fill in all the details below.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter subscription name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categories</FormLabel>
                    <FormControl>
                      <MultipleSelector
                        options={categories}
                        value={field.value?.map(
                          (value) =>
                            categories.find((c) => c.value === value) ?? {
                              value,
                              label: value,
                            },
                        )}
                        onChange={(options) =>
                          field.onChange(options.map((o) => o.value))
                        }
                        placeholder="Select categories"
                        creatable
                        hideClearAllButton
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="cost"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cost</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="0.00"
                          variant="outline"
                          startContent="$"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="renewal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Renewal Period</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select renewal period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                            <SelectItem value="one_time">One Time</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="renewalDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Renewal Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-4 pt-4">
                <Button variant="outline" onClick={() => setSheetOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Add Subscription</Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
