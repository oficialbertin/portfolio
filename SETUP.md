# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Update Your Information**

   Before running the project, update these files with your actual information:

   ### `src/data/personal.js`
   - Update `github` URL with your actual GitHub username
   - Add LinkedIn URL if you have one
   - Verify email and phone are correct

   ### `src/data/projects.js`
   - Update all GitHub repository URLs
   - Update all live demo URLs
   - Add real project descriptions if needed

3. **Add Your Profile Photo** (Optional)
   - Place your photo in `public/` folder as `profile.jpg`
   - Update any image references if you add a photo to the Home page

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Important Configuration

### GitHub Pages Base Path

The `vite.config.js` is configured with:
```js
base: '/Mi_portifolio/',
```

**If your repository name is different**, update this value to match your repository name.

### Router Configuration

The app uses `BrowserRouter` which works with GitHub Pages when configured correctly. If you encounter routing issues after deployment, you can switch to `HashRouter`:

1. In `src/App.jsx`, change:
   ```js
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   ```
   to:
   ```js
   import { HashRouter as Router, Routes, Route } from 'react-router-dom';
   ```

2. This will make URLs look like: `https://username.github.io/Mi_portifolio/#/about`

## Customization

### Colors
The main color scheme uses:
- Primary Blue: `#2563eb`
- Success Green: `#10b981`
- Text Dark: `#1f2937`
- Text Gray: `#6b7280`

To change colors, update the CSS files in:
- `src/components/*.css`
- `src/pages/*.css`

### Fonts
Currently using Inter font from Google Fonts. To change:
1. Update `index.html` with a different Google Font
2. Update `font-family` in CSS files

## Next Steps

1. Customize content in data files
2. Add your actual project links
3. Test locally with `npm run dev`
4. Deploy to GitHub Pages (see DEPLOYMENT.md)
