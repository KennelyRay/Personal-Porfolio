# 🔧 GitHub Pages Setup Guide

Your portfolio is showing the README instead of the website because GitHub Pages needs to be properly configured. Follow these steps:

## Step 1: Configure GitHub Pages Source

1. **Go to your repository on GitHub:**
   - Visit: `https://github.com/KennelyRay/Personal-Porfolio`

2. **Navigate to Settings:**
   - Click on the "Settings" tab (at the top of your repository)

3. **Go to Pages section:**
   - In the left sidebar, click on "Pages"

4. **Configure the Source:**
   - Under "Source", select **"GitHub Actions"** (NOT "Deploy from a branch")
   - This is crucial! The README is showing because it's likely set to "Deploy from a branch"

## Step 2: Verify GitHub Actions Workflow

1. **Check Actions tab:**
   - Go to the "Actions" tab in your repository
   - Look for the "Deploy to GitHub Pages" workflow
   - It should show a green checkmark if successful

2. **If the workflow failed:**
   - Click on the failed workflow to see the error
   - Most common issue is permissions

3. **If no workflow exists:**
   - The `.github/workflows/deploy.yml` file might not be properly committed
   - Check if the file exists in your repository

## Step 3: Check Repository Permissions

1. **In Repository Settings:**
   - Go to Settings → Actions → General
   - Under "Workflow permissions", select **"Read and write permissions"**
   - Check **"Allow GitHub Actions to create and approve pull requests"**

2. **In Pages Settings:**
   - Make sure "GitHub Actions" is selected as the source
   - Save the settings

## Step 4: Trigger a New Deployment

After configuring the settings above:

1. **Make a small change to trigger the workflow:**
   ```bash
   # Add a space or comment to any file and commit
   git add .
   git commit -m "Trigger GitHub Pages deployment"
   git push origin main
   ```

2. **Wait for the workflow to complete:**
   - Go to Actions tab and watch the deployment
   - It should take 2-3 minutes

3. **Check your site:**
   - Your portfolio should be available at: `https://kennelyray.github.io/Personal-Porfolio/`

## Common Issues & Solutions

### Issue 1: Still seeing README
**Solution:** Double-check that "GitHub Actions" is selected as the source, not "Deploy from a branch"

### Issue 2: 404 Error
**Solution:** Make sure the `basePath` in `next.config.js` matches your repository name exactly

### Issue 3: Workflow fails with permissions error
**Solution:** Enable "Read and write permissions" in repository settings

### Issue 4: Images not loading
**Solution:** Ensure images are in `public/images/` and referenced correctly with the base path

## Expected Result

After following these steps, your portfolio should be live at:
**https://kennelyray.github.io/Personal-Porfolio/**

The site should show your actual portfolio with:
- ✅ Modern dark theme design
- ✅ All sections working (Hero, About, Skills, Projects, etc.)
- ✅ Smooth animations
- ✅ Proper navigation
- ✅ Contact form
- ✅ All images loading correctly

If you're still having issues after following these steps, the problem is likely in the GitHub Pages source configuration. Make sure it's set to "GitHub Actions" and not "Deploy from a branch". 