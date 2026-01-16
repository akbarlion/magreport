"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  Calendar,
} from "lucide-react"

const reports = [
  {
    id: 1,
    title: "Minggu 1 - Pengenalan Budaya Perusahaan",
    description: "Mempelajari nilai-nilai perusahaan, struktur tim, dan orientasi awal",
    status: "approved",
    date: "2024-01-15",
    supervisor: "John Doe",
    createdAt: "2024-01-16"
  },
  {
    id: 2,
    title: "Minggu 2 - Setup Environment Development",
    description: "Mengatur tools development, mempelajari struktur codebase",
    status: "pending",
    date: "2024-01-22",
    supervisor: "Jane Smith",
    createdAt: "2024-01-23"
  },
  {
    id: 3,
    title: "Minggu 3 - Tugas Proyek Pertama",
    description: "Mengerjakan modul autentikasi pengguna",
    status: "draft",
    date: "2024-01-29",
    supervisor: "Mike Johnson",
    createdAt: "2024-01-30"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "approved":
      return <Badge className="bg-green-100 text-green-800">Disetujui</Badge>
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-800">Menunggu</Badge>
    case "rejected":
      return <Badge className="bg-red-100 text-red-800">Ditolak</Badge>
    case "draft":
      return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>
    default:
      return <Badge>Tidak Diketahui</Badge>
  }
}

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Laporan Saya</h1>
            <p className="text-muted-foreground">Kelola laporan magang Anda</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Laporan Saya</h1>
          <p className="text-muted-foreground">Kelola laporan magang Anda</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Buat Laporan Baru
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Cari laporan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{report.title}</h3>
                    {getStatusBadge(report.status)}
                  </div>
                  <p className="text-muted-foreground mb-3">{report.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {report.date}
                    </div>
                    <div>Pembimbing: {report.supervisor}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}