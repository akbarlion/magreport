"use client"

import * as React from "react"
import {
  FileText,
  LayoutDashboard,
  Settings,
  User,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Data untuk aplikasi internship report
const data = {
  user: {
    name: "Nama Mahasiswa",
    email: "mahasiswa@example.com",
    avatar: "/avatars/student.png",
  },
  teams: [
    {
      name: "MagReport",
      logo: FileText,
      plan: "Magang",
    },
  ],
  navMain: [
    {
      title: "Beranda",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Laporan",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Semua Laporan",
          url: "/dashboard/reports",
        },
        {
          title: "Buat Baru",
          url: "/dashboard/reports/new",
        },
      ],
    },
    {
      title: "Profil",
      url: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Pengaturan",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
  projects: [
    {
      name: "Laporan Mingguan",
      url: "/dashboard/reports",
      icon: FileText,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
