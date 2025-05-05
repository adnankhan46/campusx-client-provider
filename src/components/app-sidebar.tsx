"use client"

import * as React from "react"
import {
  BarChartIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  User2,
  UsersIcon,
} from "lucide-react"

// import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "CampusX",
    email: "cx@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/Dashboard/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "All Opportunities",
      url: "/Dashboard/allOpportunities",
      icon: ListIcon,
    },
    {
      title: "Selected Applicants",
      url: "/Dashboard/selectedApplicants",
      icon: BarChartIcon,
    },
    {
      title: "Payment Status",
      url: "/Dashboard/payments",
      icon: FolderIcon,
    },
    {
      title: "Notifications",
      url: "/Dashboard/notifications",
      icon: UsersIcon,
    },
  ],
  navSecondary: [
    {
      title: "Your Account",
      url: "/profile",
      icon: User2,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <span className="text-2xl font-semibold font-outfit">CampusX</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
