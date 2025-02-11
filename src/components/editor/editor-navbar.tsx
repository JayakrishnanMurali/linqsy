"use client";

import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, Eye, Globe, LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorNavbarProps {
  websiteId: string;
  viewport: {
    width: number;
    device: "desktop" | "mobile";
  };
  onViewportChange: (viewport: {
    width: number;
    device: "desktop" | "mobile";
  }) => void;
}

export function EditorNavbar({
  viewport,
  onViewportChange,
}: EditorNavbarProps) {
  return (
    <div className="flex h-14 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-black p-2">
            <LinkIcon className="h-4 w-4 text-secondary-foreground text-white" />
          </div>
          <span className="text-sm font-semibold text-secondary-foreground">
            Untitled Website
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onViewportChange({ width: 1920, device: "desktop" })}
          className={cn(
            viewport.device === "desktop" && "bg-muted text-primary",
          )}
        >
          <Laptop className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onViewportChange({ width: 390, device: "mobile" })}
          className={cn(
            viewport.device === "mobile" && "bg-muted text-primary",
          )}
        >
          <Smartphone className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <Eye className="h-4 w-4" />
          Preview
        </Button>
        <Button>
          <Globe className="h-4 w-4" />
          Publish
        </Button>
      </div>
    </div>
  );
}
