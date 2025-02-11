"use client";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ComponentsSidebar } from "@/components/editor/components-sidebar";
import { PropertiesSidebar } from "@/components/editor/properties-sidebar";
import { PreviewCanvas } from "@/components/editor/preview-canvas";
import { use, useState } from "react";

interface ViewportSize {
  width: number;
  device: "desktop" | "mobile";
}

export default function EditorPage({
  params,
}: {
  params: Promise<{ websiteId: string }>;
}) {
  const { websiteId } = use(params);

  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [viewport, setViewport] = useState<ViewportSize>({
    width: 1920,
    device: "desktop",
  });

  return (
    <div className="flex h-screen flex-col">
      <EditorNavbar
        websiteId={websiteId}
        viewport={viewport}
        onViewportChange={setViewport}
      />

      <div className="flex flex-1 overflow-hidden">
        <ComponentsSidebar />

        <main className="flex-1 bg-muted/30 p-6">
          <PreviewCanvas
            websiteId={websiteId}
            viewport={viewport}
            selectedElement={selectedElement}
            onSelectElement={setSelectedElement}
          />
        </main>

        <PropertiesSidebar selectedElement={selectedElement} />
      </div>
    </div>
  );
}
