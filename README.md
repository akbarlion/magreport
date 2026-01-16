# MagReport

Sistem manajemen laporan magang berbasis web yang memungkinkan mahasiswa untuk membuat, mengelola, dan melacak laporan magang mereka.

## Fitur

- Dashboard dengan overview progress magang
- Manajemen laporan (buat, edit, lihat semua laporan)
- Sistem autentikasi dengan halaman login
- Profile dan pengaturan pengguna
- Theme toggle (light/dark mode)
- Sidebar navigation yang responsive
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
- `/login` - Halaman autentikasi
- `/dashboard` - Dashboard utama dengan sidebar
- `/dashboard/reports` - Daftar semua laporan
- `/dashboard/reports/new` - Form buat laporan baru
- `/dashboard/profile` - Halaman profil pengguna
- `/dashboard/settings` - Pengaturan aplikasi

## Development

Aplikasi menggunakan Next.js dengan TypeScript dan Tailwind CSS. Semua halaman dashboard menggunakan layout dengan sidebar yang persistent.

Untuk build production:

```bash
npm run build
```