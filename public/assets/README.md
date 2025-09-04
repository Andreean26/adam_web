# Assets Directory Structure

## 📁 Folder Organization

### `/documents`
- **Purpose**: Menyimpan dokumen seperti CV, sertifikat
- **Format**: PDF, DOC, DOCX
- **Naming**: `cv-adam.pdf`, `certificate-web.pdf`, etc.
- **Access**: Public untuk download

### `/fonts`
- **Purpose**: Font kustom untuk website
- **Format**: WOFF2, WOFF, TTF
- **Naming**: `space-font.woff2`, `cyber-regular.ttf`, etc.
- **Usage**: Import di CSS atau globals.css

## 🎯 Usage Examples

```tsx
// Download CV
<a href="/assets/documents/cv-adam.pdf" download>
  Download CV
</a>

// Custom fonts di CSS
@font-face {
  font-family: 'SpaceFont';
  src: url('/assets/fonts/space-font.woff2') format('woff2');
}
```
