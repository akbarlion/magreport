"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Save, Send, Upload } from "lucide-react"

export default function NewReportPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    reportDate: ""
  })

  const handleSubmit = (action: "save" | "submit") => {
    console.log("Form submitted:", { ...formData, action })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Buat Laporan Baru</h1>
          <p className="text-muted-foreground">Isi detail untuk laporan magang Anda</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detail Laporan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Judul Laporan *</Label>
              <Input
                id="title"
                placeholder="contoh: Minggu 1 - Pengenalan Perusahaan"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reportDate">Tanggal Laporan *</Label>
              <Input
                id="reportDate"
                type="date"
                value={formData.reportDate}
                onChange={(e) => setFormData({ ...formData, reportDate: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi Singkat</Label>
            <Input
              id="description"
              placeholder="Ringkasan singkat tentang apa yang Anda lakukan minggu ini"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Isi Laporan *</Label>
            <Textarea
              id="content"
              placeholder="Jelaskan aktivitas, pembelajaran, tantangan, dan pencapaian Anda..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={12}
            />
          </div>

          <div className="space-y-2">
            <Label>Lampiran</Label>
            <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Seret dan lepas file di sini, atau klik untuk browse
              </p>
              <Button variant="outline" size="sm">
                Pilih File
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-6 border-t">
            <Button
              variant="outline"
              onClick={() => handleSubmit("save")}
            >
              <Save className="h-4 w-4 mr-2" />
              Simpan sebagai Draft
            </Button>

            <Button onClick={() => handleSubmit("submit")}>
              <Send className="h-4 w-4 mr-2" />
              Kirim untuk Review
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}