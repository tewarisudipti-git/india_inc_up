# PowerShell script to push Uttar Pradesh project to GitHub
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  Pushing Uttar Pradesh Project to GitHub" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

$targetDir = $PSScriptRoot
Set-Location $targetDir
Write-Host "Working Directory: $targetDir" -ForegroundColor Yellow

# Ensure remote is set
$remoteUrl = "https://github.com/tewarisudipti-git/india_inc_up.git"
$existingRemote = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($existingRemote)) {
    Write-Host "Setting remote origin to $remoteUrl..." -ForegroundColor Yellow
    git remote add origin $remoteUrl
} elseif ($existingRemote -ne $remoteUrl) {
    Write-Host "Updating remote origin to $remoteUrl..." -ForegroundColor Yellow
    git remote set-url origin $remoteUrl
}

# Stage any new or modified files
Write-Host "Staging files..." -ForegroundColor Yellow
git add .

# Commit if there are changes
$status = git status --porcelain
if ($status) {
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m "Initial commit for Uttar Pradesh project"
} else {
    Write-Host "All files are already committed." -ForegroundColor Green
}

# Push to GitHub
Write-Host ""
Write-Host "Pushing to GitHub (main branch)..." -ForegroundColor Cyan
Write-Host "Note: If Git Credential Manager opens, sign in through your browser." -ForegroundColor Gray
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=========================================" -ForegroundColor Green
    Write-Host "  Successfully pushed to GitHub!         " -ForegroundColor Green
    Write-Host "  Repository: $remoteUrl" -ForegroundColor Green
    Write-Host "=========================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "=========================================" -ForegroundColor Red
    Write-Host "  Push failed with exit code $LASTEXITCODE" -ForegroundColor Red
    Write-Host "=========================================" -ForegroundColor Red
}

Write-Host ""
Read-Host "Press Enter to exit"
