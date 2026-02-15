# Solution: Push and Deploy Your Portfolio

## The Problem

Your push was rejected because the GitHub repository (`https://github.com/oficialbertin/portfolio.git`) already has commits (probably a README or initial commit) that you don't have locally. Git won't let you push until you merge those changes.

## Quick Solution

### Option 1: Use the PowerShell Script (Easiest)

I've created a script that does everything automatically:

```powershell
cd C:\xampp\htdocs\Mi_portifolio
.\push-and-deploy.ps1
```

This script will:
1. Pull remote changes
2. Merge them with your local code
3. Push to GitHub
4. Deploy to GitHub Pages

### Option 2: Manual Commands

If the script doesn't work, run these commands one by one:

```bash
cd C:\xampp\htdocs\Mi_portifolio

# Step 1: Pull and merge remote changes
git pull origin main --allow-unrelated-histories --no-edit

# Step 2: Push to GitHub
git push -u origin main

# Step 3: Deploy to GitHub Pages
npm run deploy
```

### Option 3: Force Push (Use Only If You're Sure)

⚠️ **Warning**: This will overwrite everything on GitHub with your local code. Only use if you don't need anything from the remote repository.

```bash
git push -u origin main --force
npm run deploy
```

## After Pushing

### Enable GitHub Pages

1. Go to: https://github.com/oficialbertin/portfolio/settings/pages
2. Under **Source**, select: **Deploy from a branch**
3. Select branch: **gh-pages**
4. Select folder: **/ (root)**
5. Click **Save**

### Your Portfolio URL

After deployment, your portfolio will be live at:
```
https://oficialbertin.github.io/portfolio/
```

Note: It uses HashRouter, so URLs will look like:
- `https://oficialbertin.github.io/portfolio/#/`
- `https://oficialbertin.github.io/portfolio/#/about`
- `https://oficialbertin.github.io/portfolio/#/projects`

## Verify Everything Works

After deployment, check:

1. ✅ Home page loads: `https://oficialbertin.github.io/portfolio/#/`
2. ✅ All navigation links work
3. ✅ Projects page shows all 4 projects with correct links
4. ✅ Project GitHub links point to your repos
5. ✅ Project live demo links work
6. ✅ Contact page shows your info
7. ✅ Footer has GitHub and LinkedIn links

## Troubleshooting

### "Could not resolve host: github.com"
- Check your internet connection
- Try again in a few minutes
- Verify GitHub is accessible in your browser

### "Merge conflicts"
If you see conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`):
1. Open the conflicted files
2. Keep your portfolio code (remove the conflict markers)
3. Run: `git add .` then `git commit -m "Resolve conflicts"`

### "gh-pages branch not found"
After running `npm run deploy`, if GitHub Pages doesn't show the branch:
1. Wait 2-3 minutes (GitHub needs time to process)
2. Refresh the Pages settings page
3. The `gh-pages` branch should appear

### Portfolio shows 404
- Make sure the base path in `vite.config.js` is `/portfolio/`
- Make sure GitHub Pages is set to deploy from `gh-pages` branch
- Wait 5-10 minutes for GitHub to update

## Current Project Links (Verified)

All your project links are correctly set:

- **FarmBridge AI**: 
  - GitHub: `https://github.com/oficialbertin/farmbridge`
  - Live: `https://web.farmbridgeai.rw/`

- **SmartFarmix**: 
  - GitHub: `https://github.com/oficialbertin/smartfarmix`
  - Live: `https://smartfarmix-2.onrender.com`

- **SkillsBridge**: 
  - GitHub: `https://github.com/oficialbertin/skillsbridge`
  - Live: `https://skillsbridge.com`

- **ViroShield**: 
  - GitHub: `https://github.com/oficialbertin/viroshield`
  - Live: `https://viroshield-demo.com`

## Need Help?

If you're still stuck:
1. Check `GIT_PUSH_GUIDE.md` for detailed instructions
2. Run `git status` to see current state
3. Run `git log --oneline -5` to see recent commits
