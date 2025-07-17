# Struktur Komponen Landing Page

## Organisasi Folder

```
src/
├── components/
│   ├── layout/           # Komponen layout utama
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Footer dengan links dan info
│   ├── sections/         # Komponen section landing page
│   │   ├── HeroSection.tsx      # Hero/banner utama
│   │   ├── AboutSection.tsx     # Tentang diri
│   │   ├── ServicesSection.tsx  # Layanan yang ditawarkan
│   │   ├── PortfolioSection.tsx # Portfolio projects
│   │   └── ContactSection.tsx   # Form kontak
│   ├── ui/               # Komponen UI reusable
│   │   ├── Button.tsx    # Button dengan berbagai variant
│   │   └── Card.tsx      # Card wrapper
│   └── index.ts          # Export semua komponen
└── app/
    ├── layout.tsx        # Root layout dengan metadata
    └── page.tsx          # Home page yang menggabungkan semua section
```

## Fitur Utama

### Layout Components
- **Header**: Navigation dengan logo, menu, dan CTA button
- **Footer**: Links, social media, dan informasi kontak

### Section Components
- **HeroSection**: Hero banner dengan CTA dan visual menarik
- **AboutSection**: Tentang diri dengan stats dan skills
- **ServicesSection**: Grid layanan dengan icon dan deskripsi
- **PortfolioSection**: Grid portfolio dengan filter dan teknologi
- **ContactSection**: Form kontak dengan informasi kontak

### UI Components
- **Button**: Reusable button dengan variant (primary, secondary, outline)
- **Card**: Wrapper card dengan hover effect dan padding options

## Cara Menggunakan

### Mengedit Konten
1. **Header**: Edit `src/components/layout/Header.tsx` untuk menu dan logo
2. **Hero**: Edit `src/components/sections/HeroSection.tsx` untuk tagline dan CTA
3. **About**: Edit `src/components/sections/AboutSection.tsx` untuk bio dan skills
4. **Services**: Edit array `services` di `src/components/sections/ServicesSection.tsx`
5. **Portfolio**: Edit array `projects` di `src/components/sections/PortfolioSection.tsx`
6. **Contact**: Edit `src/components/sections/ContactSection.tsx` untuk info kontak

### Menambah Section Baru
1. Buat file baru di `src/components/sections/`
2. Export di `src/components/index.ts`
3. Import dan gunakan di `src/app/page.tsx`

### Styling
- Menggunakan Tailwind CSS untuk styling
- Responsive design dengan breakpoints (sm, md, lg)
- Consistent color scheme (blue primary, gray secondary)
- Hover effects dan transitions
- Smooth scrolling untuk navigation

## Customization

### Warna
Edit warna di class Tailwind:
- Primary: `blue-600` (bisa diganti dengan warna lain)
- Secondary: `gray-600`
- Background: `white` dan `gray-50`

### Font
Font sudah diatur di `layout.tsx` menggunakan Geist dan Geist Mono dari Google Fonts.

### Responsive
Semua komponen sudah responsive dengan breakpoints:
- Mobile: default
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

## Tips Pengembangan

1. **Konsistensi**: Gunakan spacing dan color scheme yang konsisten
2. **Reusability**: Manfaatkan komponen UI seperti Button dan Card
3. **Performance**: Optimize gambar dan lazy loading
4. **SEO**: Update metadata di `layout.tsx`
5. **Accessibility**: Pastikan kontras warna dan keyboard navigation

## Next Steps

- [ ] Tambahkan animasi dengan Framer Motion
- [ ] Implementasi dark mode
- [ ] Tambahkan blog section
- [ ] Integrasi dengan CMS
- [ ] Form handling dengan API
- [ ] Analytics tracking
- [ ] Mobile menu implementation
- [ ] Image optimization
