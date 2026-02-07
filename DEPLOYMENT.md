# Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages for free.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your portfolio code ready

## Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `Mi_portifolio` (or your preferred name)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### 2. Initialize Git and Push Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/Mi_portifolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Install GitHub Pages Plugin (Optional but Recommended)

```bash
npm install --save-dev gh-pages
```

### 4. Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Push the built files to GitHub
- Make your site live

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **gh-pages** branch and **/ (root)** folder
5. Click **Save**

### 7. Your Portfolio is Live!

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/Mi_portifolio/
```

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project: `npm run build`
2. Go to repository Settings → Pages
3. Select **Source**: Deploy from a branch
4. Select **Branch**: `main` and folder: `/docs`
5. Create a `docs` folder and copy `dist` contents to it
6. Commit and push

## Updating Your Portfolio

Whenever you make changes:

```bash
# Make your changes
# Then deploy again
npm run deploy
```

## Important Notes

- The `base` in `vite.config.js` is set to `/Mi_portifolio/` - update this if your repository name is different
- Update GitHub links in `src/data/personal.js` with your actual GitHub username
- Update project links in `src/data/projects.js` with your actual project URLs

## Troubleshooting

### 404 Errors
- Make sure the `base` path in `vite.config.js` matches your repository name
- Ensure you're using the correct branch (gh-pages)

### Styles Not Loading
- Clear browser cache
- Check that all assets are in the `dist` folder after build

### Routing Issues
- GitHub Pages doesn't support client-side routing by default
- Consider using HashRouter instead of BrowserRouter for GitHub Pages

## Need Help?

Check the [GitHub Pages documentation](https://docs.github.com/en/pages) for more details.
