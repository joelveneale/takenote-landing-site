# Take Note Pro — Branding Alignment Guide

## Fonts (matched across both sites)

### Primary: Outfit
- Used for: All headings, body text, UI labels
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extra bold)
- Google Fonts import included in App.css

### Monospace: JetBrains Mono
- Used for: Timecode displays, code/technical text, tags, badges
- Weights: 400, 500, 600, 700
- Google Fonts import included in App.css

### Fallback: SF Mono → Fira Code → Consolas → monospace
- The web app already uses this stack — JetBrains Mono takes precedence when loaded

## Logo

### Text Logo: "Take Note **Pro**"
- "Take Note" in white (#ffffff), Outfit Bold (700)
- "Pro" in green (#00ff88), Outfit SemiBold (600)

### Icon/Favicon: TN monogram
- Dark background (#0a0a0b) rounded rectangle
- Green (#00ff88) border, 1.5px
- "TN" in green, JetBrains Mono Bold
- SVG file: `/public/favicon.svg`

### Where to use:
- **Landing page header**: Text logo + TN icon
- **Web app header**: Text logo + TN icon
- **Browser tab**: favicon.svg
- **iOS home screen**: apple-touch-icon.png (generate from SVG at 180x180)
- **Social sharing**: og-image.png (1200x630, dark bg with logo + tagline)

## Colors

| Token              | Value                          | Use                    |
|--------------------|--------------------------------|------------------------|
| --green            | #00ff88                        | Primary accent         |
| --green-dim        | #00cc6a                        | Hover states           |
| --green-glow       | rgba(0, 255, 136, 0.25)       | Box shadows, glows     |
| --green-subtle     | rgba(0, 255, 136, 0.08)       | Subtle backgrounds     |
| --bg               | #0a0a0b                        | Page background        |
| --bg-raised        | #111113                        | Elevated surfaces      |
| --bg-card          | #1a1a1c                        | Cards                  |
| --border           | #2a2a2e                        | Borders                |
| --text             | #ffffff                        | Primary text           |
| --text-secondary   | #999999                        | Secondary text         |
| --text-dim         | #666666                        | Tertiary text          |

## Files to sync

When updating branding, update these in BOTH repos:

### takenote-landing (takenote.pro)
- `public/favicon.svg` — TN monogram favicon
- `src/App.css` — Font imports, CSS variables
- `index.html` — Meta tags, favicon links

### takenotepro-webapp (takenotepro.app)
- `public/favicon.svg` — Same TN monogram favicon
- `index.html` — Meta tags, favicon links, font imports
- App component styles — Should use same CSS variable values

## PNG Icons to generate

From the SVG favicon, generate these PNGs (use any SVG-to-PNG tool):
- `icon-16.png` (16x16)
- `icon-32.png` (32x32)
- `apple-touch-icon.png` (180x180)
- `icon-192.png` (192x192) — for PWA manifest
- `icon-512.png` (512x512) — for PWA manifest

## OG Image

Create a 1200x630 image with:
- Dark background (#0a0a0b)
- Subtle green glow
- "Take Note Pro" text logo
- Tagline: "Professional Timecode Logging for Film & TV"
- Place at `/public/og-image.png` on both sites
