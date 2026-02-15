# PowerShell script to push and deploy portfolio
# Run this script from the project directory

Write-Host "=== Portfolio Push & Deploy Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "Error: Please run this script from the project root directory" -ForegroundColor Red
    exit 1
}

# Step 1: Pull remote changes
Write-Host "Step 1: Pulling remote changes..." -ForegroundColor Yellow
git fetch origin
if ($LASTEXITCODE -ne 0) {
    Write-Host "Warning: Could not fetch from remote. Check your internet connection." -ForegroundColor Yellow
    Write-Host "Continuing anyway..." -ForegroundColor Yellow
}

# Step 2: Merge remote changes
Write-Host "Step 2: Merging remote changes..." -ForegroundColor Yellow
git pull origin main --allow-unrelated-histories --no-edit
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Merge failed. You may need to resolve conflicts manually." -ForegroundColor Red
    Write-Host "Run: git status to see what needs to be resolved" -ForegroundColor Yellow
    exit 1
}

# Step 3: Push to GitHub
Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Push failed. Check your network connection and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host ""

# Step 4: Build and deploy
Write-Host "Step 4: Building and deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Deployment failed. Check the error messages above." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== SUCCESS! ===" -ForegroundColor Green
Write-Host "Your portfolio should be live at: https://oficialbertin.github.io/portfolio/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Note: It may take a few minutes for GitHub Pages to update." -ForegroundColor Yellow
Write-Host "If it doesn't work, check: https://github.com/oficialbertin/portfolio/settings/pages" -ForegroundColor Yellow
