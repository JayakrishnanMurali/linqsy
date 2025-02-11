"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, BarChart, Users, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Websites",
    href: "/dashboard",
    icon: LinkIcon,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart,
  },
  {
    title: "Contacts",
    href: "/dashboard/contacts",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[200px] flex-col border-r bg-muted/10">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <LinkIcon className="h-5 w-5" />
          <span className="font-semibold">linqsy</span>
        </Link>
      </div>
      <div className="flex-1 space-y-1 p-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-2")}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
