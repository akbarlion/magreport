"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, Mail, Phone, Eye, GraduationCap } from "lucide-react"
import Link from "next/link"

const students = [
  { id: 1, name: "Ahmad Fauzi", nim: "123456789", email: "ahmad@student.com", phone: "+62 812-1111-1111", university: "Universitas Contoh", department: "Frontend", status: "active", reports: 12 },
  { id: 2, name: "Siti Nurhaliza", nim: "123456790", email: "siti@student.com", phone: "+62 812-2222-2222", university: "Universitas Contoh", department: "Backend", status: "active", reports: 10 },
  { id: 3, name: "Budi Santoso", nim: "123456791", email: "budi@student.com", phone: "+62 812-3333-3333", university: "Institut Teknologi", department: "Mobile", status: "active", reports: 8 },
  { id: 4, name: "Dewi Lestari", nim: "123456792", email: "dewi@student.com", phone: "+62 812-4444-4444", university: "Universitas Negeri", department: "UI/UX", status: "active", reports: 11 },
  { id: 5, name: "Eko Prasetyo", nim: "123456793", email: "eko@student.com", phone: "+62 812-5555-5555", university: "Politeknik Negeri", department: "DevOps", status: "active", reports: 9 },
]

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mahasiswa Magang</h1>
          <p className="text-muted-foreground">Daftar mahasiswa yang Anda supervisi di perusahaan</p>
        </div>
        <Badge variant="outline" className="text-lg px-4 py-2">{students.length} Mahasiswa</Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Daftar Mahasiswa</CardTitle>
              <CardDescription>Kelola dan pantau progress mahasiswa magang</CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Cari mahasiswa..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {students.map((student) => (
              <Card key={student.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/avatars/student.png" />
                        <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-semibold text-lg">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">NIM: {student.nim}</p>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{student.email}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{student.phone}</span>
                          </div>
                        </div>
                        <div className="flex gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                            <span>{student.university}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Departemen: </span>
                            <span className="font-medium">{student.department}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Total Laporan: </span>
                            <span className="font-medium">{student.reports}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/pembimbing/dashboard/reports?student=${student.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          Lihat Laporan
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
