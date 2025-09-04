# Source Assets Directory

## 📁 Folder Organization

### `/data`
- **Purpose**: Menyimpan data statis untuk komponen
- **Format**: JSON, TypeScript
- **Naming**: `projects.ts`, `skills.json`, etc.
- **Usage**: Import sebagai modules

## 🎯 Usage Examples

```typescript
// projects.ts
export const projects = [
  {
    id: 1,
    title: "Project Name",
    image: "/images/projects/project-1.jpg",
    // ...
  }
];

// skills.json
{
  "frontend": ["React", "Next.js", "TypeScript"],
  "backend": ["Node.js", "Express", "PHP"]
}
```
