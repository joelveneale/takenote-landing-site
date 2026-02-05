# Take Note Pro - Landing Page

Professional landing page for Take Note Pro - timecode logging app for film & TV production.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `takenote-landing` repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### 3. Add Custom Domain (takenote.pro)

1. In Vercel project settings → Domains
2. Add domain: `takenote.pro`
3. Add `www.takenote.pro` (will redirect to non-www)
4. Follow Vercel's DNS instructions to update your domain registrar

**DNS Settings (at your domain registrar):**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🎨 Customization

- **App Store Link**: Update `href` in hero and CTA sections
- **Web App Link**: Point to `https://takenotepro.app` once deployed
- **Colors**: Modify CSS variables in `App.css`
- **Content**: Edit text in `App.jsx`

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern, professional styling
- ✅ Feature comparison grid
- ✅ Pricing tiers (Free, Pro, Team)
- ✅ Clear CTAs for app downloads
- ✅ SEO optimized

## 🔗 Links

- Landing page: `takenote.pro`
- Web app: `takenotepro.app`
- GitHub: Your repo URL
- Vercel: Auto-deployed on push

## 📝 Next Steps

1. Add real app screenshots to hero section
2. Set up actual App Store links
3. Add Google Analytics / Plausible
4. Set up email capture for waitlist (optional)
5. Add testimonials from beta users
