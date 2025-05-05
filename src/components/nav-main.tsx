"use client"

import { MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <Link to="/Dashboard/createOpportunity">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 h-12 w-full bg-primary text-white duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90"
              >
              <PlusCircleIcon />
              <span>Create Opportunity</span>
            </SidebarMenuButton>
              </Link>
          <SidebarMenuItem className="flex items-center gap-2">
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
                <Link to={`${item.url}`}>
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
                </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
