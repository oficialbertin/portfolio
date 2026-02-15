# Git Push & Deployment Guide

## Issue: Remote has commits you don't have locally

The GitHub repository already has some commits (probably a README or initial commit) that aren't in your local repository. You need to merge them first.

## Solution Steps

### Step 1: Pull and Merge Remote Changes

Run these commands in your terminal:

```bash
cd C:\xampp\htdocs\Mi_portifolio

# Fetch remote changes
git fetch origin

# Pull and merge (this will combine remote and local commits)
git pull origin main --allow-unrelated-histories

# If there are merge conflicts, resolve them, then:
git add .
git commit -m "Merge remote and local changes"
```

**Alternative (if you want to overwrite remote with your local):**

If you're sure your local code is what you want and you don't need the remote commits:

```bash
git pull origin main --allow-unrelated-histories --no-edit
# Or force push (use with caution):
# git push -u origin main --force
```

### Step 2: Push to GitHub

```bash
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your React app
- Push the built files to the `gh-pages` branch
- Make your portfolio live at: `https://oficialbertin.github.io/portfolio/`

### Step 4: Enable GitHub Pages (if not already done)

1. Go to: https://github.com/oficialbertin/portfolio/settings/pages
2. Under **Source**, select: **Deploy from a branch**
3. Select branch: **gh-pages**
4. Select folder: **/ (root)**
5. Click **Save**

## Troubleshooting

### If you get "Could not resolve host: github.com"
- Check your internet connection
- Try again in a few minutes
- Check if GitHub is accessible in your browser

### If merge conflicts occur
1. Open the conflicted files
2. Look for `<<<<<<<`, `=======`, and `>>>>>>>` markers
3. Keep your code (the portfolio code)
4. Remove the conflict markers
5. Run: `git add .` and `git commit -m "Resolve merge conflicts"`

### If push still fails
Try:
```bash
git pull origin main --rebase
git push -u origin main
```

## Quick One-Liner (if no conflicts expected)

```bash
cd C:\xampp\htdocs\Mi_portifolio && git pull origin main --allow-unrelated-histories && git push -u origin main && npm run deploy
```

## Verify Deployment

After deployment, check:
- https://oficialbertin.github.io/portfolio/
- All pages should load correctly
- Project links should work
- Images should display
