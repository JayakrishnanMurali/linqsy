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
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WebsiteCreationStepper } from "@/components/website-creation-stepper";

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

interface Template {
  id: string;
  name: string;
  description: string;
  category: "personal" | "business" | "creative";
}

const templates: Template[] = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean and simple bio links layout",
    category: "personal",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Perfect for business profiles",
    category: "business",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Stand out with a unique design",
    category: "creative",
  },
  {
    id: "social",
    name: "Social Media",
    description: "Optimized for social media profiles",
    category: "personal",
  },
];

export default function CreateWebsitePage() {
  const [step, setStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("personal");

  const form = useForm<CreateWebsiteForm>({
    resolver: zodResolver(createWebsiteSchema),
    defaultValues: {
      name: "",
      url: "",
    },
  });

  const filteredTemplates = templates.filter(
    (template) => template.category === activeTab,
  );

  async function onSubmit(data: CreateWebsiteForm) {
    // Store form data and move to template selection
    localStorage.setItem("newWebsiteData", JSON.stringify(data));
    setStep(1);
  }

  function handleContinueToBuilder() {
    if (!selectedTemplate) return;

    const websiteData = JSON.parse(
      localStorage.getItem("newWebsiteData") ?? "{}",
    );
    const websiteId = crypto.randomUUID(); // TODO: Use a better ID later

    localStorage.setItem(
      `website-${websiteId}`,
      JSON.stringify({
        ...websiteData,
        templateId: selectedTemplate,
      }),
    );

    // Redirect to editor
    window.location.href = `/editor/${websiteId}`;
  }

  return (
    <div className="relative mx-auto max-w-5xl space-y-6 p-6">
      <WebsiteCreationStepper
        totalSteps={2}
        currentStep={step}
        className="absolute right-6 top-6"
      />

      {step === 0 ? (
        <>
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

              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={() => setStep(0)}>
                  Cancel
                </Button>
                <Button type="submit">Continue</Button>
              </div>
            </form>
          </Form>
        </>
      ) : (
        <>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Choose a template
            </h1>
            <p className="text-sm text-muted-foreground">
              Select a template to start with. You can customize it later.
            </p>
          </div>

          <Tabs
            defaultValue="personal"
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-4"
          >
            <TabsList>
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="creative">Creative</TabsTrigger>
            </TabsList>

            {["personal", "business", "creative"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {filteredTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={cn(
                        "cursor-pointer rounded-lg border-2 p-3 transition-all hover:border-primary",
                        selectedTemplate === template.id
                          ? "border-primary bg-primary/5"
                          : "border-border",
                      )}
                      onClick={() => setSelectedTemplate(template.id)}
                    >
                      <div className="mb-3 aspect-[3/4] rounded-md bg-muted">
                        <div className="flex h-full flex-col items-center justify-center space-y-1.5 p-2">
                          <div className="h-12 w-12 rounded-full bg-secondary" />
                          <div className="h-3 w-24 rounded bg-secondary" />
                          <div className="space-y-1.5">
                            <div className="h-6 w-28 rounded bg-secondary" />
                            <div className="h-6 w-28 rounded bg-secondary" />
                            <div className="h-6 w-28 rounded bg-secondary" />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-sm font-medium">{template.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {template.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={() => setStep(0)}>
              Back
            </Button>
            <Button
              onClick={handleContinueToBuilder}
              disabled={!selectedTemplate}
            >
              Continue to Editor
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
