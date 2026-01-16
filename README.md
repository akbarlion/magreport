# MagReport

Sistem manajemen laporan magang berbasis web yang memungkinkan mahasiswa untuk membuat, mengelola, dan melacak laporan magang mereka dengan mudah dan efisien.

## Fitur Utama

### Autentikasi & Role Management
- Sistem role-based dengan 4 role: Mahasiswa, Dosen Pembimbing, Pembimbing Lapangan, Admin
- Halaman login dengan role selector
- Halaman registrasi untuk user baru
- Context-based role management

### Dashboard & Monitoring
- Dashboard interaktif dengan overview progress magang
- Statistik dan metrics sesuai role pengguna
- Real-time tracking progress laporan

### Manajemen Laporan
- Buat, edit, dan hapus laporan magang
- Review dan approval laporan (untuk dosen & pembimbing)
- Lihat semua laporan dengan filter dan search
- Status tracking untuk setiap laporan

### Manajemen Pengguna
- Profile management untuk semua role
- Manajemen mahasiswa bimbingan (dosen & pembimbing)
- Manajemen user lengkap (admin)
- Settings dan preferensi personal

### UI/UX
- Theme toggle (light/dark mode) dengan auto mode berdasarkan waktu
- Sidebar navigation yang responsive dan dinamis per role
- Interface modern dengan Shadcn/ui components
- Fully responsive design
- Interface dalam bahasa Indonesia

## Tech Stack

- **Framework:** Next.js 15 dengan App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui components
- **UI Primitives:** Radix UI
- **State Management:** React Context API
- **Icons:** Lucide React

## Getting Started

### Prerequisites

Pastikan kamu udah install:
- Node.js (v18 atau lebih baru)
- npm atau yarn

### Installation

1. Clone repository ini:
```bash
git clone <repository-url>
cd magreport
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

Untuk build production:
```bash
npm run build
npm start
```

## Struktur Aplikasi

### Public Routes
- `/` - Redirect ke halaman signin
- `/signin` - Halaman login dengan role selector
- `/signup` - Halaman registrasi user baru

### Mahasiswa Routes
- `/mahasiswa/dashboard` - Dashboard mahasiswa dengan overview progress
- `/mahasiswa/dashboard/reports` - Daftar semua laporan mahasiswa
- `/mahasiswa/dashboard/reports/new` - Form buat laporan baru
- `/mahasiswa/dashboard/profile` - Profil dan informasi mahasiswa
- `/mahasiswa/dashboard/settings` - Pengaturan akun dan preferensi

### Dosen Pembimbing Routes
- `/dosen/dashboard` - Dashboard dosen dengan statistik bimbingan
- `/dosen/dashboard/students` - Daftar mahasiswa bimbingan
- `/dosen/dashboard/mahasiswa/profile` - Detail profil mahasiswa bimbingan
- `/dosen/dashboard/reports` - Review dan approval laporan mahasiswa
- `/dosen/dashboard/reports/new` - Form review laporan
- `/dosen/dashboard/profile` - Profil dosen
- `/dosen/dashboard/settings` - Pengaturan akun dosen

### Pembimbing Lapangan Routes
- `/pembimbing/dashboard` - Dashboard pembimbing dengan overview supervisi
- `/pembimbing/dashboard/students` - Daftar mahasiswa supervisi
- `/pembimbing/dashboard/mahasiswa/profile` - Detail profil mahasiswa supervisi
- `/pembimbing/dashboard/reports` - Review laporan mahasiswa
- `/pembimbing/dashboard/reports/new` - Form review laporan
- `/pembimbing/dashboard/profile` - Profil pembimbing lapangan
- `/pembimbing/dashboard/settings` - Pengaturan akun pembimbing

### Admin Routes
- `/admin/dashboard` - Dashboard admin dengan overview sistem
- `/admin/dashboard/users` - Manajemen semua pengguna (CRUD)
- `/admin/dashboard/mahasiswa/profile` - Detail profil mahasiswa
- `/admin/dashboard/reports` - Monitoring semua laporan
- `/admin/dashboard/reports/new` - Form manajemen laporan
- `/admin/dashboard/profile` - Profil admin
- `/admin/dashboard/settings` - Pengaturan sistem

## Struktur Folder

```
magreport/
├── app/                      # Next.js App Router
│   ├── admin/               # Admin routes & pages
│   ├── dosen/               # Dosen routes & pages
│   ├── mahasiswa/           # Mahasiswa routes & pages
│   ├── pembimbing/          # Pembimbing routes & pages
│   ├── signin/              # Login page
│   ├── signup/              # Register page
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page (redirect)
├── components/              # Reusable components
│   ├── ui/                  # Shadcn/ui components
│   ├── app-sidebar.tsx      # Sidebar navigation
│   ├── login-form.tsx       # Login form
│   ├── register-form.tsx    # Register form
│   └── nav-user.tsx         # User navigation
├── contexts/                # React contexts
│   └── role-context.tsx     # Role management context
├── lib/                     # Utility functions
├── public/                  # Static assets
└── styles/                  # Global styles
```

## Development Notes

- Aplikasi menggunakan Next.js 15 dengan App Router untuk routing yang lebih modern
- Semua halaman dashboard menggunakan layout dengan sidebar yang persistent
- Role-based access control diimplementasikan menggunakan React Context
- UI components menggunakan Shadcn/ui yang built on top of Radix UI
- Styling menggunakan Tailwind CSS dengan custom configuration

## Role & Permissions

| Role | Dashboard | Laporan | Mahasiswa | Users | Settings |
|------|-----------|---------|-----------|-------|----------|
| Mahasiswa | ✅ View Own | ✅ CRUD Own | ❌ | ❌ | ✅ Own |
| Dosen | ✅ View Stats | ✅ Review | ✅ View Assigned | ❌ | ✅ Own |
| Pembimbing | ✅ View Stats | ✅ Review | ✅ View Assigned | ❌ | ✅ Own |
| Admin | ✅ View All | ✅ View All | ✅ View All | ✅ CRUD All | ✅ System |

## Roadmap

- [ ] Implementasi backend API
- [ ] Integrasi database (PostgreSQL/MySQL)
- [ ] Authentication dengan JWT
- [ ] File upload untuk laporan
- [ ] Notification system
- [ ] Email notifications
- [ ] Export laporan ke PDF
- [ ] Analytics dashboard

## Author

Developed by Muhammad Akbar Choiri Lion

## License

This project is licensed under the MIT License.
