"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  Edit
} from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profil</h1>
          <p className="text-muted-foreground">Kelola informasi pribadi dan detail magang Anda.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Edit className="h-4 w-4" />
          Edit Profil
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src="/avatars/student.png" />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <CardTitle>Nama Mahasiswa</CardTitle>
            <CardDescription>Mahasiswa Magang</CardDescription>
            <Badge className="w-fit mx-auto">Aktif</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>mahasiswa@example.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Jakarta, Indonesia</span>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Informasi Pribadi</CardTitle>
            <CardDescription>Detail pribadi dasar Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nama Depan</Label>
                <Input id="firstName" defaultValue="Nama" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nama Belakang</Label>
                <Input id="lastName" defaultValue="Mahasiswa" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="mahasiswa@example.com" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telepon</Label>
                <Input id="phone" defaultValue="+62 812-3456-7890" disabled />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Alamat</Label>
                <Textarea id="address" defaultValue="Jl. Contoh No. 123, Jakarta, Indonesia" disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Internship Information */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Informasi Magang</CardTitle>
            <CardDescription>Detail tentang program magang Anda saat ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Perusahaan</p>
                    <p className="text-sm text-muted-foreground">PT. Contoh Perusahaan</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Pembimbing</p>
                    <p className="text-sm text-muted-foreground">John Doe</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Tanggal Mulai</p>
                    <p className="text-sm text-muted-foreground">1 Januari 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Tanggal Selesai</p>
                    <p className="text-sm text-muted-foreground">30 Juni 2024</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium">Departemen</p>
                  <p className="text-sm text-muted-foreground">Pengembangan Perangkat Lunak</p>
                </div>
                <div>
                  <p className="font-medium">Posisi</p>
                  <p className="text-sm text-muted-foreground">Magang Frontend Developer</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}