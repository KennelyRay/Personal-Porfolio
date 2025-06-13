# GitHub Pages Deployment Guide

This portfolio is configured for deployment on GitHub Pages using Next.js static export.

## Setup Instructions

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Enable GitHub Pages in your repository settings:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push your code to the main branch:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **The deployment will automatically trigger:**
   - The GitHub Actions workflow will build and deploy your site
   - You can monitor the progress in the "Actions" tab of your repository
   - Once complete, your site will be available at: `https://[username].github.io/Personal-Porfolio`

### Option 2: Manual Deployment

If you prefer manual deployment:

1. **Build the static export:**
   ```bash
   npm run export
   ```

2. **Deploy using gh-pages branch:**
   ```bash
   # First time setup
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r out/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages

   # For subsequent deployments
   git checkout main
   npm run export
   git checkout gh-pages
   git rm -rf .
   cp -r out/* .
   git add .
   git commit -m "Update deployment"
   git push origin gh-pages
   ```

3. **Configure GitHub Pages:**
   - Go to repository Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder

## Configuration Details

The project is configured for GitHub Pages with:

- **Static Export**: `output: 'export'` in `next.config.js`
- **Base Path**: Set to `/Personal-Porfolio` for GitHub Pages subdirectory
- **Image Optimization**: Disabled for static export compatibility
- **Trailing Slash**: Enabled for better GitHub Pages compatibility

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure the repository name matches the `basePath` in `next.config.js`
2. **Images not loading**: Ensure images are in the `public` directory and paths start with `/Personal-Porfolio`
3. **Build fails**: Check that all `window` references are wrapped with `typeof window !== 'undefined'`

### Build Locally:

```bash
npm run dev        # Development server
npm run build      # Production build
npm run export     # Static export for GitHub Pages
```

## File Structure After Build:

```
out/
├── index.html          # Main page
├── 404.html           # 404 error page
├── .nojekyll          # Prevents Jekyll processing
├── _next/             # Next.js assets
└── images/            # Static images
```

Your portfolio will be accessible at: `https://[your-username].github.io/Personal-Porfolio` 