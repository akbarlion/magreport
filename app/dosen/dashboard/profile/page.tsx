"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  GraduationCap,
  Edit,
  Users,
  BookOpen
} from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profil</h1>
          <p className="text-muted-foreground">Kelola informasi pribadi dan detail pembimbingan Anda.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Edit className="h-4 w-4" />
          Edit Profil
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src="/avatars/student.png" />
              <AvatarFallback>ND</AvatarFallback>
            </Avatar>
            <CardTitle>Nama Dosen</CardTitle>
            <CardDescription>Dosen Pembimbing</CardDescription>
            <Badge className="w-fit mx-auto">Aktif</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>dosen@example.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+62 812-3456-7891</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              <span>Universitas Contoh</span>
            </div>
          </CardContent>
        </Card>

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
                <Input id="lastName" defaultValue="Dosen" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nip">NIP</Label>
                <Input id="nip" defaultValue="198501012010121001" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fakultas">Fakultas</Label>
                <Input id="fakultas" defaultValue="Teknik" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="dosen@example.com" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telepon</Label>
                <Input id="phone" defaultValue="+62 812-3456-7891" disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Informasi Pembimbingan</CardTitle>
            <CardDescription>Detail tentang aktivitas pembimbingan Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Mahasiswa Bimbingan</p>
                    <p className="text-sm text-muted-foreground">12 Mahasiswa Aktif</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Mata Kuliah</p>
                    <p className="text-sm text-muted-foreground">Kerja Praktik</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium">Prodi</p>
                  <p className="text-sm text-muted-foreground">Teknik Informatika</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
