"use client";

import { menuItems } from "@/lib/data";
import { useSidebar } from "@/components/ui/sidebar";
import LogoutButton from "@/components/logout-button";

import UserProfile from "@/components/UserProfile";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Book } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const AppSidebar = () => {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-16 flex pl-4 justify-center border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link
              href="/"
              className="text-xl font-bold text-neutral-400 hover:text-slate-600 dark:hover:text-white flex gap-2 items-center transition-all"
            >
              <Book />
              {open && (
                <span className={!open ? "opacity-0 " : "opacity-100"}>
                  Virstaf Church
                </span>
              )}
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="py-8">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-5">
              {menuItems.map((item) => (
                <div className="" key={item.title}>
                  <Button
                    variant="outline"
                    asChild
                    className={
                      "py-6 w-full flex items-center justify-start border-none text-muted-foreground"
                    }
                  >
                    <Link href={item.url}>
                      <span className="h-8 w-8 flex items-center justify-center dark:invert dark:filter dark:brightness-0 dark:contrast-100">
                        <Image
                          src={item.iconSrc}
                          alt={item.title}
                          width={24}
                          height={24}
                        />
                      </span>
                      {open && <span>{item.title}</span>}
                    </Link>
                  </Button>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <LogoutButton />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
