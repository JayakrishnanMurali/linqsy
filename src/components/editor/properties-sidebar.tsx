"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface PropertiesSidebarProps {
  selectedElement: string | null;
}

export function PropertiesSidebar({ selectedElement }: PropertiesSidebarProps) {
  if (!selectedElement) {
    return (
      <div className="flex w-80 flex-col border-l">
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Select an element to edit its properties
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-80 flex-col border-l">
      <div className="p-4">
        <h2 className="font-semibold">Properties</h2>
      </div>
      <Separator />
      <ScrollArea className="flex-1">
        <div className="p-4">{/* Properties form will go here */}</div>
      </ScrollArea>
    </div>
  );
}
