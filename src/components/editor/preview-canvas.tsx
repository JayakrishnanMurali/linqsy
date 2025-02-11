"use client";

import { cn } from "@/lib/utils";

interface PreviewCanvasProps {
  websiteId: string;
  viewport: {
    width: number;
    device: "desktop" | "mobile";
  };
  selectedElement: string | null;
  onSelectElement: (elementId: string | null) => void;
}

export function PreviewCanvas({
  websiteId,
  viewport,
  selectedElement,
  onSelectElement,
}: PreviewCanvasProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className={cn(
          "h-[calc(100vh-120px)] overflow-y-auto rounded-md border bg-background transition-all duration-200",
          viewport.device === "mobile" ? "w-[390px]" : "w-full max-w-6xl",
        )}
      >
        <div className="min-h-full p-4">
          {/* Preview content will go here */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-24 w-24 rounded-full bg-muted" />
            <div className="h-8 w-48 rounded bg-muted" />
            <div className="space-y-2">
              <div className="h-10 w-64 rounded bg-muted" />
              <div className="h-10 w-64 rounded bg-muted" />
              <div className="h-10 w-64 rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
