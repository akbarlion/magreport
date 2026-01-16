"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, Mail, Plus, Edit, Trash2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const users = {
  mahasiswa: [
    { id: 1, name: "Ahmad Fauzi", nim: "123456789", email: "ahmad@student.com", status: "active" },
    { id: 2, name: "Siti Nurhaliza", nim: "123456790", email: "siti@student.com", status: "active" },
    { id: 3, name: "Budi Santoso", nim: "123456791", email: "budi@student.com", status: "active" },
  ],
  dosen: [
    { id: 1, name: "Dr. Andi Wijaya", nip: "198501012010121001", email: "andi@university.com", status: "active" },
    { id: 2, name: "Prof. Sri Mulyani", nip: "198001012005122001", email: "sri@university.com", status: "active" },
  ],
  pembimbing: [
    { id: 1, name: "John Doe", nip: "PB-2024-001", email: "john@company.com", status: "active" },
    { id: 2, name: "Jane Smith", nip: "PB-2024-002", email: "jane@company.com", status: "active" },
  ],
}

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manajemen Pengguna</h1>
          <p className="text-muted-foreground">Kelola semua pengguna sistem</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Tambah Pengguna
        </Button>
      </div>

      <Tabs defaultValue="mahasiswa" className="space-y-4">
        <TabsList>
          <TabsTrigger value="mahasiswa">Mahasiswa ({users.mahasiswa.length})</TabsTrigger>
          <TabsTrigger value="dosen">Dosen ({users.dosen.length})</TabsTrigger>
          <TabsTrigger value="pembimbing">Pembimbing ({users.pembimbing.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="mahasiswa">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Daftar Mahasiswa</CardTitle>
                  <CardDescription>Kelola akun mahasiswa</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Cari mahasiswa..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.mahasiswa.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src="/avatars/student.png" />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">NIM: {user.nim}</p>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span>{user.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dosen">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Daftar Dosen</CardTitle>
                  <CardDescription>Kelola akun dosen pembimbing</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Cari dosen..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.dosen.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src="/avatars/student.png" />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">NIP: {user.nip}</p>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span>{user.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pembimbing">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Daftar Pembimbing</CardTitle>
                  <CardDescription>Kelola akun pembimbing lapangan</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Cari pembimbing..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.pembimbing.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src="/avatars/student.png" />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">NIP: {user.nip}</p>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span>{user.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Aktif</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
