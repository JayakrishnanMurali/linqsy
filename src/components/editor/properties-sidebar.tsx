"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { MousePointer } from "lucide-react";

interface PropertiesSidebarProps {
  selectedElement: string | null;
}

export function PropertiesSidebar({ selectedElement }: PropertiesSidebarProps) {
  return (
    <div className="flex w-80 flex-col border-l">
      <div className="flex items-center gap-2 p-4">
        <MousePointer className="size-4" />
        <h4 className="text-sm font-semibold">Button</h4>
      </div>
      <Separator />
      <ScrollArea className="flex-1">
        <div className="">
          <Accordion type="single" collapsible className="w-full">
            {/* Basic Properties */}
            <AccordionItem value="basic">
              <AccordionTrigger className="p-4">Basic</AccordionTrigger>
              <AccordionContent className="p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="text">Button Text</Label>
                    <Input
                      id="text"
                      placeholder="Enter button text"
                      // Add onChange handler
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      placeholder="https://example.com"
                      // Add onChange handler
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="new-tab">Open in new tab</Label>
                    <Switch
                      id="new-tab"
                      // Add onChange handler
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Style Properties */}
            <AccordionItem value="style">
              <AccordionTrigger className="p-4">Style</AccordionTrigger>
              <AccordionContent className="p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="variant">Button Variant</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select variant" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="outline">Outline</SelectItem>
                        <SelectItem value="ghost">Ghost</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size">Button Size</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sm">Small</SelectItem>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="lg">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
}
