"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DndContext,
  type DragEndEvent,
  type DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableItem from "@/components/editor/sortable-block";

interface PreviewCanvasProps {
  websiteId: string;
  viewport: {
    width: number;
    device: "desktop" | "mobile";
  };
  selectedElement: string | null;
  onSelectElement: (elementId: string | null) => void;
}

// Define a type for your block data
interface Block {
  id: string;
  color: string; // e.g. "bg-red-400"
  width: string; // e.g. "w-32"
  height: string; // e.g. "h-16"
}

const initialBlocks: Block[] = [
  { id: "block-1", color: "bg-red-400", width: "w-32", height: "h-16" },
  { id: "block-2", color: "bg-blue-400", width: "w-40", height: "h-20" },
  { id: "block-3", color: "bg-green-400", width: "w-24", height: "h-24" },
  { id: "block-4", color: "bg-yellow-400", width: "w-48", height: "h-16" },
];

export function PreviewCanvas({
  websiteId,
  viewport,
  selectedElement,
  onSelectElement,
}: PreviewCanvasProps) {
  // Track the array of blocks
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);

  // Track the active block for drag overlay
  const [activeBlock, setActiveBlock] = useState<Block | null>(null);

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const foundBlock = blocks.find((block) => block.id === active.id);
    if (foundBlock) {
      setActiveBlock(foundBlock);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    // Clear the active block
    setActiveBlock(null);

    // If no valid drop target or no change in position, do nothing
    if (!over || active.id === over.id) return;

    setBlocks((items) => {
      const oldIndex = items.findIndex((block) => block.id === active.id);
      const newIndex = items.findIndex((block) => block.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex h-full items-center justify-center">
        <div
          className={cn(
            "h-[calc(100vh-120px)] overflow-y-auto rounded-md border bg-background transition-all duration-200",
            viewport.device === "mobile" ? "w-[390px]" : "w-full max-w-6xl",
          )}
        >
          <div className="min-h-full p-4">
            <SortableContext
              items={blocks.map((block) => block.id)}
              strategy={verticalListSortingStrategy}
            >
              {blocks.map((block) => (
                <SortableItem key={block.id} id={block.id}>
                  <div
                    className={cn(
                      "mb-4 flex cursor-move items-center justify-center rounded font-bold text-white",
                      block.color,
                      block.width,
                      block.height,
                    )}
                  >
                    {block.id}
                  </div>
                </SortableItem>
              ))}
            </SortableContext>
          </div>
        </div>
      </div>

      {/* 
        This is the element that appears while you are dragging something around.
        Note that we do NOT apply the shadow to the dragged item. 
      */}
      <DragOverlay>
        {activeBlock ? (
          <div
            className={cn(
              "flex items-center justify-center rounded font-bold text-white",
              // activeBlock.color,
              activeBlock.width,
              activeBlock.height,
            )}
          >
            {activeBlock.id}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
