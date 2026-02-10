# Jase Brand / Jason Perez - Awareness Website

A focused, high-performance awareness website built with Next.js 14 to provide public information regarding alleged investment fraud.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **SEO:** JSON-LD Schema, OpenGraph, Sitemap, Robots.txt

## 🛠️ Project Structure

```
src/
├── app/                 # App Router pages
│   ├── page.tsx         # Home (Awareness)
│   ├── reports/         # Evidence List
│   └── report-scam/     # Submission Form
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page-specific content blocks
│   └── ui/              # Reusable primitives (Button, Card)
├── lib/
│   ├── data.ts          # Mock report data
│   └── utils.ts         # CN helper
```

## 🏃‍♂️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🔒 Security & Privacy

- No sensitive data is stored in this demo (frontend-only).
- Forms are designed with privacy notices.
- Content is framed as "Alleged" and "Reported" for legal safety.

## 📊 Deployment

Deploy easily to Vercel or Netlify.
The project uses `next/image` optimization and static generation by default.
