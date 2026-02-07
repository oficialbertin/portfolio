# 🚀 Quick Start Guide

## Your Portfolio is Ready!

Your professional React portfolio website has been created with all your CV information.

## What's Included

✅ **5 Pages**: Home, About, Skills, Projects, Contact  
✅ **All Your CV Content**: Education, Experience, Skills, Projects  
✅ **Professional Design**: Clean, modern, mobile-responsive  
✅ **Ready for GitHub Pages**: Configured for free hosting  

## Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Update Your Links

**Important:** Update these files with your actual links:

- `src/data/personal.js` - Add your GitHub username
- `src/data/projects.js` - Add your project GitHub and live demo URLs

### 3. Test Locally
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 4. Deploy to GitHub Pages

See `DEPLOYMENT.md` for detailed instructions, or:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## Project Structure

```
Mi_portifolio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── data/           # Your CV data (easy to update!)
│   └── assets/         # Images and icons
├── public/             # Static files
└── package.json        # Dependencies
```

## Customization

- **Content**: Edit files in `src/data/` folder
- **Styling**: Edit CSS files in `src/components/` and `src/pages/`
- **Colors**: Search for `#2563eb` (primary blue) to change theme

## Need Help?

- See `SETUP.md` for detailed setup instructions
- See `DEPLOYMENT.md` for deployment guide
- Check `README.md` for general information

## Your Portfolio URL

After deployment, your portfolio will be at:
```
https://YOUR_USERNAME.github.io/Mi_portifolio/
```

**Remember to update `vite.config.js` base path if your repository name is different!**

---

🎉 **You're all set!** Start by running `npm install` and then `npm run dev`.
