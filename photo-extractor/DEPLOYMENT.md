# Deployment Guide

## Deploy to Vercel (Recommended - Free & Easy)

Vercel is made by the creators of Next.js and offers the easiest deployment experience.

### Option 1: Deploy via Vercel Website (Easiest)

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up/login with your GitHub account (recommended)

2. **Click "Add New Project"**
   - Import your GitHub repository: `abdullahbader/photo-extractor`
   - Vercel will automatically detect it's a Next.js project

3. **Configure Project Settings**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (or leave default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Click "Deploy"**
   - Wait 2-3 minutes for the build to complete
   - Your app will be live at: `https://photo-extractor-xxxxx.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain if you have one

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose production deployment

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

---

## Alternative Deployment Options

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Railway

1. Go to [railway.app](https://railway.app)
2. Sign up/login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Next.js and deploys automatically

### Render

1. Go to [render.com](https://render.com)
2. Sign up/login with GitHub
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
6. Click "Create Web Service"

---

## Important Notes

- **Free Tier Limits:**
  - Vercel: 100GB bandwidth/month, unlimited projects
  - Netlify: 100GB bandwidth/month, 300 build minutes/month
  - Railway: $5 free credit/month
  - Render: Free tier available with limitations

- **Automatic Deployments:**
  - All platforms automatically deploy when you push to GitHub
  - You can configure which branch triggers deployments (usually `main`)

- **Environment Variables:**
  - If you add any `.env` variables later, add them in your platform's dashboard

- **Your app is already on GitHub:**
  - Just connect it to any platform above and deploy!

---

## Recommended: Vercel

✅ Made by Next.js creators  
✅ Zero configuration needed  
✅ Free tier is generous  
✅ Fast global CDN  
✅ Automatic HTTPS  
✅ Custom domains supported  
