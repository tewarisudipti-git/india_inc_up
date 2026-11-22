@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo       Pushing Uttar Pradesh Project to GitHub
echo ========================================================
echo.

:: Navigate to script directory
cd /d "%~dp0"

echo Current directory: %cd%
echo.

:: Check if git is installed
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not found in PATH.
    echo Please install Git from https://git-scm.com/
    goto :end
)

:: Set remote URL
set REMOTE_URL=https://github.com/tewarisudipti-git/india_inc_up.git
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo [INFO] Setting remote origin to %REMOTE_URL%...
    git remote add origin %REMOTE_URL%
) else (
    echo [INFO] Updating remote origin to %REMOTE_URL%...
    git remote set-url origin %REMOTE_URL%
)

:: Stage all files
echo [INFO] Staging all files...
git add .

:: Commit if there are staged changes
git diff --cached --quiet
if %errorlevel% neq 0 (
    echo [INFO] Committing changes...
    git commit -m "Initial commit for Uttar Pradesh project"
) else (
    echo [INFO] All changes are already committed.
)

echo.
echo ========================================================
echo Pushing to GitHub (main branch)...
echo Note: If a browser window opens, sign in to your GitHub.
echo ========================================================
echo.

git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   Successfully pushed to GitHub!
    echo   Repository: %REMOTE_URL%
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   Push failed with error code %errorlevel%
    echo ========================================================
)

:end
echo.
pause
