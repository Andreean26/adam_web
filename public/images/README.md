# Images Directory Structure

## 📁 Folder Organization

### `/projects`
- **Purpose**: Menyimpan gambar proyek portfolio
- **Format**: JPG, PNG, WebP
- **Naming**: `project-1.jpg`, `project-2.png`, etc.
- **Size**: Recommended 800x600px or 16:9 ratio

### `/icons`
- **Purpose**: Menyimpan ikon dan logo
- **Format**: SVG, PNG (dengan background transparan)
- **Naming**: `logo.svg`, `skill-react.svg`, etc.
- **Size**: 64x64px, 128x128px untuk ikon

### `/hero`
- **Purpose**: Gambar untuk section hero/banner
- **Format**: JPG, PNG, WebP
- **Naming**: `hero-bg.jpg`, `avatar.png`, etc.
- **Size**: High resolution (1920x1080px)

### `/background`
- **Purpose**: Gambar background dan tekstur
- **Format**: JPG, PNG, WebP
- **Naming**: `space-bg.jpg`, `grid-pattern.png`, etc.
- **Size**: Optimized for web (compressed)

## 🎯 Usage Examples

```tsx
// Menggunakan gambar proyek
<Image src="/images/projects/project-1.jpg" alt="Project 1" />

// Menggunakan ikon
<Image src="/images/icons/react.svg" alt="React" />

// Menggunakan gambar hero
<Image src="/images/hero/avatar.png" alt="Profile" />
```
