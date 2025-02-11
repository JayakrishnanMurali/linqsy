"use client";

import React, { useState } from "react";
import { Responsive, WidthProvider, type Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@/hooks/use-window-size";

interface PreviewCanvasProps {
  websiteId: string;
  viewport: {
    width: number;
    device: "desktop" | "mobile";
  };
  selectedElement: string | null;
  onSelectElement: (elementId: string | null) => void;
}

// Each block corresponds to a layout item. We'll generate
// the `layout` array for each breakpoint from these blocks.
interface Block {
  id: string;
  color: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

const initialBlocks: Block[] = [
  { id: "block-1", color: "bg-red-400", x: 0, y: 0, w: 1, h: 2 },
  { id: "block-2", color: "bg-blue-400", x: 1, y: 0, w: 1, h: 2 },
  { id: "block-3", color: "bg-green-400", x: 2, y: 0, w: 1, h: 2 },
  { id: "block-4", color: "bg-yellow-400", x: 3, y: 0, w: 1, h: 2 },
];

// We wrap the Responsive component with WidthProvider so it
// will automatically detect and use the container’s width.
const ResponsiveGridLayout = WidthProvider(Responsive);

export function PreviewCanvas({
  websiteId,
  viewport,
  selectedElement,
  onSelectElement,
}: PreviewCanvasProps) {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const windowSize = useWindowSize();

  // react-grid-layout needs a 'layouts' object keyed by breakpoint
  // so that each breakpoint can have a corresponding array of layout items.
  // Here, we replicate the same layout for each breakpoint, but you can
  // customize each if necessary.
  const layouts = {
    lg: blocks.map((block) => ({
      i: block.id,
      x: block.x,
      y: block.y,
      w: block.w,
      h: block.h,
    })),
    md: blocks.map((block) => ({
      i: block.id,
      x: block.x,
      y: block.y,
      w: block.w,
      h: block.h,
    })),
    sm: blocks.map((block) => ({
      i: block.id,
      x: block.x,
      y: block.y,
      w: block.w,
      h: block.h,
    })),
    xs: blocks.map((block) => ({
      i: block.id,
      x: block.x,
      y: block.y,
      w: block.w,
      h: block.h,
    })),
    xxs: blocks.map((block) => ({
      i: block.id,
      x: block.x,
      y: block.y,
      w: block.w,
      h: block.h,
    })),
  };

  // These breakpoints and cols ensure the layout changes smoothly
  // across different screen sizes without overflowing horizontally.
  const breakpoints = {
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 480,
    xxs: 0,
  };

  // The number of columns for each breakpoint
  const cols = {
    lg: 4, // Typically desktop
    md: 3, // Tablet
    sm: 2, // Large phone / small tablet
    xs: 2, // Smaller phone
    xxs: 1,
  };

  function handleLayoutChange(
    currentLayout: Layout[],
    // allLayouts: { [key: string]: Layout[] } // If you need all breakpoints' layouts
  ) {
    // Map the updated layout back to our blocks
    setBlocks((prevBlocks) => {
      return prevBlocks.map((block) => {
        const updatedItem = currentLayout.find((i) => i.i === block.id);
        if (!updatedItem) return block;
        return {
          ...block,
          x: updatedItem.x,
          y: updatedItem.y,
          w: updatedItem.w,
          h: updatedItem.h,
        };
      });
    });
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div
        className={cn(
          "h-[calc(100vh-120px)] overflow-y-auto rounded-md border bg-background transition-all duration-200",
          viewport.device === "mobile" ? "w-[390px]" : "w-full max-w-6xl",
        )}
      >
        <div className="min-h-full p-4">
          <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={breakpoints}
            cols={cols}
            rowHeight={100}
            // Margin / Padding
            margin={[16, 16]}
            containerPadding={[16, 16]}
            // If you don't want items to push outside horizontally,
            // use one of the compactType settings or null:
            compactType="vertical"
            preventCollision={false}
            onLayoutChange={handleLayoutChange}
          >
            {blocks.map((block) => (
              <div
                key={block.id}
                className={cn(
                  "flex cursor-move items-center justify-center rounded font-bold text-white",
                  block.color,
                )}
                onClick={() => onSelectElement(block.id)}
              >
                {block.id}
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </div>
    </div>
  );
}
