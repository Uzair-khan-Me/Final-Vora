# Final Vora

**Final Vora** is a standalone video downloader for Android, built with Kotlin.
This repository contains the official product website — a fast, privacy-focused
landing page for the app.

> **Your videos. Your device. Your control.**

## About the site

The website is built with [Next.js](https://nextjs.org) (App Router),
TypeScript, and Tailwind CSS. It is fully static and deployable directly to
Vercel with no server, database, or custom backend.

- Dark, premium, responsive design
- Strong technical + on-page SEO (metadata, Open Graph, Twitter cards,
  JSON-LD structured data, `sitemap.xml`, `robots.txt`)
- Accessible, semantic HTML with keyboard navigation and reduced-motion support
- The Android APK is hosted on **GitHub Releases** — the site simply links to it

## Android download

The primary Android download points to the official GitHub Releases APK:

```
https://github.com/Uzair-khan-Me/Final-Vora/releases/download/Android/Final.Vora.apk
```

Size: **160 MB**

Windows and Linux versions are **coming soon** — there are no placeholder links.

## Getting started

```bash
# install dependencies
npm install

# run the development server
npm run dev
# → http://localhost:3000

# production build
npm run build

# serve the production build
npm start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js and builds with the default settings.
4. Optionally set the environment variable `NEXT_PUBLIC_SITE_URL` to your
   production domain (e.g. `https://finalvora.com`).
5. Deploy, then add a custom domain if desired.

No VPS, Apache, Nginx, PHP, or custom backend is required. The APK is **not**
stored in this deployment — it is served from GitHub Releases.

## Environment variables

| Variable              | Description                                        | Default            |
| --------------------- | -------------------------------------------------- | ------------------ |
| `NEXT_PUBLIC_SITE_URL`| Public URL used for canonical links, OG and sitemap | `https://finalvora.com` |

Copy `.env.example` to `.env.local` to configure locally.

## Project structure

```
app/                  # Next.js App Router
  layout.tsx          # Root layout + SEO metadata
  page.tsx            # Home / landing page
  privacy/page.tsx    # Privacy information
  sitemap.ts          # /sitemap.xml
  robots.ts           # /robots.txt
  icon.svg            # Favicon
  opengraph-image.tsx # Dynamic Open Graph / Twitter card image
  globals.css         # Tailwind + global styles

components/           # Reusable, section-based components
  Navbar.tsx  Hero.tsx  Features.tsx  Platforms.tsx
  HowItWorks.tsx  PrivacySection.tsx  TechnologySection.tsx
  DownloadCTA.tsx  FAQ.tsx  Developer.tsx  Footer.tsx
  SupportedSources.tsx  Logo.tsx  BrandIcons.tsx  Reveal.tsx  ...

lib/                  # Site constants + structured data
public/               # Static assets (developer image)
```

## Developer

Developed by **Uzair Ali** — [Portfolio](https://uzairali-18.github.io/Portfolio/).

---

Please respect copyright, platform terms of service, and applicable laws when
downloading content.
