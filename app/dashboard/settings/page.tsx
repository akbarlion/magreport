"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import {
  Settings,
  Bell,
  Shield,
  Palette,
  Globe,
  Save,
  Trash2
} from "lucide-react"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Fix ESLint warning dengan menggunakan pattern yang benar
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return null
  }

  const isDarkMode = theme === "dark"

  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pengaturan</h1>
          <p className="text-muted-foreground">Kelola preferensi aplikasi dan pengaturan akun Anda.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Tampilan
            </CardTitle>
            <CardDescription>Sesuaikan tampilan dan nuansa aplikasi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Mode Gelap</Label>
                <p className="text-sm text-muted-foreground">Beralih antara tema terang dan gelap</p>
              </div>
              <Switch 
                checked={isDarkMode}
                onCheckedChange={handleThemeToggle}
              />
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Label>Bahasa</Label>
              <Select defaultValue="id">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="id">Bahasa Indonesia</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Format Tanggal</Label>
              <Select defaultValue="dd/mm/yyyy">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifikasi
            </CardTitle>
            <CardDescription>Atur cara Anda menerima notifikasi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notifikasi Email</Label>
                <p className="text-sm text-muted-foreground">Terima notifikasi melalui email</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Pengingat Laporan</Label>
                <p className="text-sm text-muted-foreground">Dapatkan pengingat tentang laporan yang tertunda</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Peringatan Deadline</Label>
                <p className="text-sm text-muted-foreground">Beri tahu saya tentang deadline yang akan datang</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Waktu Pengingat</Label>
              <Select defaultValue="1day">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1hour">1 Jam Sebelumnya</SelectItem>
                  <SelectItem value="1day">1 Hari Sebelumnya</SelectItem>
                  <SelectItem value="3days">3 Hari Sebelumnya</SelectItem>
                  <SelectItem value="1week">1 Minggu Sebelumnya</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Akun & Keamanan
            </CardTitle>
            <CardDescription>Kelola keamanan dan privasi akun Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Kata Sandi Saat Ini</Label>
              <Input id="currentPassword" type="password" placeholder="Masukkan kata sandi saat ini" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">Kata Sandi Baru</Label>
              <Input id="newPassword" type="password" placeholder="Masukkan kata sandi baru" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Konfirmasi Kata Sandi</Label>
              <Input id="confirmPassword" type="password" placeholder="Konfirmasi kata sandi baru" />
            </div>

            <Button className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Perbarui Kata Sandi
            </Button>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Autentikasi Dua Faktor</Label>
                <p className="text-sm text-muted-foreground">Tambahkan lapisan keamanan ekstra</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Report Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Preferensi Laporan
            </CardTitle>
            <CardDescription>Atur pengaturan default untuk laporan Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Template Laporan Default</Label>
              <Select defaultValue="weekly">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Laporan Mingguan</SelectItem>
                  <SelectItem value="monthly">Ringkasan Bulanan</SelectItem>
                  <SelectItem value="project">Laporan Proyek</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Simpan Draft Otomatis</Label>
                <p className="text-sm text-muted-foreground">Simpan draft laporan secara otomatis</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Konfirmasi Pengiriman</Label>
                <p className="text-sm text-muted-foreground">Minta konfirmasi sebelum mengirim</p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <Button variant="destructive" className="w-full">
              <Trash2 className="h-4 w-4 mr-2" />
              Hapus Semua Draft
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Save Settings */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Perubahan disimpan secara otomatis. Anda juga dapat mengekspor pengaturan Anda.
            </p>
            <div className="flex gap-2">
              <Button variant="outline">Ekspor Pengaturan</Button>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Simpan Semua Perubahan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}