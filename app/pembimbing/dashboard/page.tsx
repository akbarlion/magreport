"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
  Eye
} from "lucide-react"

// Mock data - nanti ganti dengan real data dari database
const stats = [
  {
    title: "Total Laporan",
    value: "12",
    icon: FileText,
    color: "text-blue-600"
  },
  {
    title: "Menunggu Review",
    value: "3",
    icon: Clock,
    color: "text-yellow-600"
  },
  {
    title: "Disetujui",
    value: "8",
    icon: CheckCircle,
    color: "text-green-600"
  },
  {
    title: "Ditolak",
    value: "1",
    icon: XCircle,
    color: "text-red-600"
  }
]

const recentReports = [
  {
    id: 1,
    title: "Minggu 1 - Pengenalan Perusahaan",
    status: "approved",
    date: "2024-01-15",
    supervisor: "John Doe"
  },
  {
    id: 2,
    title: "Minggu 2 - Mempelajari Proses Development",
    status: "pending",
    date: "2024-01-22",
    supervisor: "Jane Smith"
  },
  {
    id: 3,
    title: "Minggu 3 - Tugas Proyek Pertama",
    status: "draft",
    date: "2024-01-29",
    supervisor: "Mike Johnson"
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

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Beranda</h1>
          <p className="text-muted-foreground">Selamat datang kembali! Ini adalah progress magang Anda.</p>
        </div>
        <Button className="flex items-center gap-2" asChild>
          <Link href="/dashboard/reports/new">
            <Plus className="h-4 w-4" />
            Laporan Baru
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Laporan Terbaru</CardTitle>
          <CardDescription>
            Laporan magang terbaru Anda dan statusnya
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{report.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Pembimbing: {report.supervisor} • {report.date}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(report.status)}
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <Link href="/dashboard/reports">Lihat Semua Laporan</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/reports/new">
                <Plus className="h-4 w-4 mr-2" />
                Buat Laporan Baru
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/dashboard/reports">
                <FileText className="h-4 w-4 mr-2" />
                Lihat Semua Laporan
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Deadline Mendatang</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Laporan Minggu 4</span>
                <Badge variant="outline">Jatuh tempo 3 hari lagi</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Ringkasan Bulanan</span>
                <Badge variant="outline">Jatuh tempo 1 minggu lagi</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}