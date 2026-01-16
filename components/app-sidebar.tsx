"use client"

import * as React from "react"
import { useState } from "react"
import {
  FileText,
  LayoutDashboard,
  Settings,
  User,
  Users,
  ClipboardCheck,
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

const roleData: Record<string, { name: string; email: string; plan: string }> = {
  mahasiswa: { name: "Nama Mahasiswa", email: "mahasiswa@example.com", plan: "Magang" },
  dosen: { name: "Nama Dosen", email: "dosen@example.com", plan: "Pembimbing" },
  pembimbing: { name: "Nama Pembimbing", email: "pembimbing@example.com", plan: "Supervisor" },
  admin: { name: "Administrator", email: "admin@example.com", plan: "Admin" },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [role, setRole] = useState("mahasiswa")
  const [basePath, setBasePath] = useState("/mahasiswa")

  React.useEffect(() => {
    const savedRole = localStorage.getItem("userRole") || "mahasiswa"
    setRole(savedRole)
    setBasePath(`/${savedRole}`)
  }, [])

  const userData = roleData[role] || roleData.mahasiswa

  const getNavByRole = () => {
    if (role === "mahasiswa") {
      return [
        {
          title: "Beranda",
          url: `${basePath}/dashboard`,
          icon: LayoutDashboard,
          isActive: true,
        },
        {
          title: "Laporan",
          url: `${basePath}/dashboard/reports`,
          icon: FileText,
          items: [
            {
              title: "Semua Laporan",
              url: `${basePath}/dashboard/reports`,
            },
            {
              title: "Buat Baru",
              url: `${basePath}/dashboard/reports/new`,
            },
          ],
        },
        {
          title: "Profil",
          url: `${basePath}/dashboard/profile`,
          icon: User,
        },
        {
          title: "Pengaturan",
          url: `${basePath}/dashboard/settings`,
          icon: Settings,
        },
      ]
    }

    if (role === "dosen" || role === "pembimbing") {
      return [
        {
          title: "Beranda",
          url: `${basePath}/dashboard`,
          icon: LayoutDashboard,
          isActive: true,
        },
        {
          title: "Mahasiswa",
          url: `${basePath}/dashboard/students`,
          icon: Users,
        },
        {
          title: "Laporan",
          url: `${basePath}/dashboard/reports`,
          icon: ClipboardCheck,
        },
        {
          title: "Profil",
          url: `${basePath}/dashboard/profile`,
          icon: User,
        },
        {
          title: "Pengaturan",
          url: `${basePath}/dashboard/settings`,
          icon: Settings,
        },
      ]
    }

    return [
      {
        title: "Beranda",
        url: `${basePath}/dashboard`,
        icon: LayoutDashboard,
        isActive: true,
      },
      {
        title: "Pengguna",
        url: `${basePath}/dashboard/users`,
        icon: Users,
      },
      {
        title: "Laporan",
        url: `${basePath}/dashboard/reports`,
        icon: FileText,
      },
      {
        title: "Profil",
        url: `${basePath}/dashboard/profile`,
        icon: User,
      },
      {
        title: "Pengaturan",
        url: `${basePath}/dashboard/settings`,
        icon: Settings,
      },
    ]
  }

  const navMain = getNavByRole()

  const projects = role === "mahasiswa" ? [
    {
      name: "Laporan Mingguan",
      url: `${basePath}/dashboard/reports`,
      icon: FileText,
    },
  ] : []
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={[{ name: "MagReport", logo: FileText, plan: userData.plan }]} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: userData.name, email: userData.email, avatar: "/avatars/student.png" }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
