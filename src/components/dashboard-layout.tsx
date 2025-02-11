"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Bell,
  CreditCard,
  LayoutDashboard,
  LinkIcon,
  PieChart,
  Settings,
  UserIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/dashboard/subscriptions",
    label: "Subscriptions",
    icon: CreditCard,
  },
  {
    path: "/dashboard/analytics",
    label: "Analytics",
    icon: PieChart,
  },
  {
    path: "/dashboard/team",
    label: "Team",
    icon: Users,
  },
  {
    path: "/dashboard/settings",
    label: "Settings",
    icon: Settings,
  },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b p-5">
            <Link href="/dashboard" className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-secondary-foreground" />
              <span className="text-base font-bold text-secondary-foreground">
                Linqsy
              </span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem
                  className={cn(
                    "p-2 transition-all duration-300 ease-in-out hover:bg-secondary/80",
                    {
                      "bg-secondary/40": pathname === route.path,
                    },
                  )}
                  key={route.path}
                >
                  <SidebarMenuButton asChild>
                    <Link href={route.path}>
                      <route.icon
                        className={cn("h-6 w-6", {
                          "text-secondary-foreground": pathname === route.path,
                        })}
                      />
                      <span
                        className={cn({
                          "text-secondary-foreground": pathname === route.path,
                        })}
                      >
                        {route.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1">
          <header className="border-b">
            <div className="flex h-16 items-center gap-4 px-4">
              <SidebarTrigger />
              <div className="ml-auto flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/avatars/01.png" alt="User" />
                        <AvatarFallback>
                          <UserIcon className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => {
                        // TODO: Implement logout
                        console.log("logout");
                      }}
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
