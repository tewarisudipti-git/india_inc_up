@echo off
cd /d "%~dp0"

echo ========================================================
echo     Deploying Uttar Pradesh Showcase to Vercel
echo ========================================================
echo.

npx vercel --prod

echo.
pause
