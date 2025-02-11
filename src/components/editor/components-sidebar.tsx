"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type IconType } from "react-icons";
import {
  RiListOrdered,
  RiText,
  RiImageLine,
  RiVideoLine,
  RiSlideshowLine,
  RiMapPinLine,
  RiInstagramLine,
  RiYoutubeLine,
  RiSpotifyLine,
  RiTwitterXLine,
  RiTiktokLine,
  RiLinkedinBoxLine,
  RiHeading,
  RiGalleryLine,
  RiRadioButtonFill,
  RiLinkM,
} from "react-icons/ri";

interface BaseComponent {
  id: string;
  name: string;
  icon: IconType;
}

interface ComponentGroup {
  category: string;
  id: string;
  items: BaseComponent[];
}

const BASIC_COMPONENTS: ComponentGroup[] = [
  {
    category: "Common Elements",
    id: "common-elements",
    items: [
      { id: "heading", name: "Heading", icon: RiHeading },
      { id: "text", name: "Text Block", icon: RiText },
      { id: "button", name: "Button", icon: RiRadioButtonFill },
      { id: "list", name: "List", icon: RiListOrdered },
    ],
  },
  {
    category: "Media",
    id: "media",
    items: [
      { id: "image", name: "Single Image", icon: RiImageLine },
      { id: "gallery", name: "Gallery", icon: RiGalleryLine },
      { id: "video", name: "Video", icon: RiVideoLine },
      { id: "carousel", name: "Carousel", icon: RiSlideshowLine },
    ],
  },
  {
    category: "Interactive",
    id: "interactive",
    items: [
      { id: "links", name: "Links", icon: RiLinkM },
      { id: "map", name: "Map", icon: RiMapPinLine },
    ],
  },
];

const SOCIAL_COMPONENTS: BaseComponent[] = [
  { id: "instagram", name: "Instagram", icon: RiInstagramLine },
  { id: "youtube", name: "YouTube", icon: RiYoutubeLine },
  { id: "spotify", name: "Spotify", icon: RiSpotifyLine },
  { id: "twitter", name: "Twitter", icon: RiTwitterXLine },
  { id: "tiktok", name: "TikTok", icon: RiTiktokLine },
  { id: "linkedin", name: "LinkedIn", icon: RiLinkedinBoxLine },
];

function ComponentGrid({ items }: { items: BaseComponent[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((component) => (
        <Button
          key={component.id}
          variant="outline"
          className="flex h-24 w-full flex-col items-center justify-center gap-2 p-2"
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("component", component.id);
          }}
        >
          <component.icon className="h-6 w-6" />
          <span className="text-xs">{component.name}</span>
        </Button>
      ))}
    </div>
  );
}

function ComponentSection({ group }: { group: ComponentGroup }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">
        {group.category}
      </h3>
      <ComponentGrid items={group.items} />
    </div>
  );
}

export function ComponentsSidebar() {
  return (
    <div className="flex w-72 flex-col border-r py-2">
      <Tabs defaultValue="components" className="flex-1">
        <div className="px-4 pt-2">
          <TabsList className="w-full">
            <TabsTrigger value="components" className="flex-1">
              Components
            </TabsTrigger>
            <TabsTrigger value="social" className="flex-1">
              Social
            </TabsTrigger>
          </TabsList>
        </div>
        <ScrollArea className="flex-1">
          <TabsContent value="components" className="m-0">
            <div className="space-y-6 p-4">
              {BASIC_COMPONENTS.map((group) => (
                <ComponentSection key={group.id} group={group} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="social" className="m-0">
            <div className="p-4">
              <ComponentGrid items={SOCIAL_COMPONENTS} />
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}
