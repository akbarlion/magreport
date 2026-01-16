# MagReport

Sistem manajemen laporan magang berbasis web yang memungkinkan mahasiswa untuk membuat, mengelola, dan melacak laporan magang mereka.

## Fitur

- Sistem role-based dengan 4 role: Mahasiswa, Dosen Pembimbing, Pembimbing Lapangan, Admin
- Dashboard dengan overview progress magang
- Manajemen laporan (buat, edit, lihat semua laporan)
- Sistem autentikasi dengan role selector
- Profile dan pengaturan pengguna sesuai role
- Manajemen mahasiswa untuk dosen dan pembimbing
- Manajemen pengguna untuk admin
- Theme toggle (light/dark mode) dengan auto mode berdasarkan waktu
- Sidebar navigation yang responsive dan dinamis per role
- Interface dalam bahasa Indonesia

## Tech Stack

- Next.js 15 dengan App Router
- TypeScript
- Tailwind CSS
- Shadcn/ui components
- Radix UI primitives

## Getting Started

Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Aplikasi

- `/` - Redirect ke halaman login
- `/login` - Halaman autentikasi dengan role selector

### Mahasiswa
- `/mahasiswa/dashboard` - Dashboard mahasiswa
- `/mahasiswa/dashboard/reports` - Daftar laporan
- `/mahasiswa/dashboard/reports/new` - Buat laporan baru
- `/mahasiswa/dashboard/profile` - Profil mahasiswa
- `/mahasiswa/dashboard/settings` - Pengaturan

### Dosen Pembimbing
- `/dosen/dashboard` - Dashboard dosen
- `/dosen/dashboard/students` - Daftar mahasiswa bimbingan
- `/dosen/dashboard/reports` - Review laporan mahasiswa
- `/dosen/dashboard/profile` - Profil dosen
- `/dosen/dashboard/settings` - Pengaturan

### Pembimbing Lapangan
- `/pembimbing/dashboard` - Dashboard pembimbing
- `/pembimbing/dashboard/students` - Daftar mahasiswa supervisi
- `/pembimbing/dashboard/reports` - Review laporan mahasiswa
- `/pembimbing/dashboard/profile` - Profil pembimbing
- `/pembimbing/dashboard/settings` - Pengaturan

### Admin
- `/admin/dashboard` - Dashboard admin
- `/admin/dashboard/users` - Manajemen pengguna (mahasiswa, dosen, pembimbing)
- `/admin/dashboard/reports` - Semua laporan
- `/admin/dashboard/profile` - Profil admin
- `/admin/dashboard/settings` - Pengaturan sistem

## Development

Aplikasi menggunakan Next.js dengan TypeScript dan Tailwind CSS. Semua halaman dashboard menggunakan layout dengan sidebar yang persistent.

Untuk build production:

```bash
npm run build
```