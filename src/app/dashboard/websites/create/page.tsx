"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createWebsiteSchema = z.object({
  name: z.string().min(1, "Website name is required"),
  url: z
    .string()
    .min(1, "URL is required")
    .regex(
      /^[a-zA-Z0-9-]+$/,
      "URL can only contain letters, numbers, and dashes",
    ),
});

type CreateWebsiteForm = z.infer<typeof createWebsiteSchema>;

export default function CreateWebsitePage() {
  const form = useForm<CreateWebsiteForm>({
    resolver: zodResolver(createWebsiteSchema),
    defaultValues: {
      name: "",
      url: "",
    },
  });

  async function onSubmit(data: CreateWebsiteForm) {
    // TODO: Implement website creation
    console.log(data);
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Create your website
        </h1>
        <p className="text-sm text-muted-foreground">
          Choose a name and custom URL for your bio link page
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website Name</FormLabel>
                <FormControl>
                  <Input placeholder="Website Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Custom URL</FormLabel>
                <FormControl>
                  <div className="flex items-center">
                    <span className="inline-flex h-10 items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
                      linqsy/
                    </span>
                    <Input
                      className="rounded-l-none"
                      placeholder="site-name"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Create Website
          </Button>
        </form>
      </Form>
    </div>
  );
}
