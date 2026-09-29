@echo off
title WST2 - Mini Student Portal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js is not installed on this computer.
  echo Download the LTS installer for Windows from https://nodejs.org
  echo.
  pause
  exit /b
)

if not exist node_modules (
  echo Installing packages for the first time. Please wait...
  call npm install
)

echo Starting the development server. Press Ctrl + C to stop.
call npm run dev
pause
