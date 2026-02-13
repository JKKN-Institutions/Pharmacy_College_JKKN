@echo off
echo.
echo ================================================
echo   Text Size Update Script for Pharmacy College
echo ================================================
echo.
echo This will update all remaining page.tsx files to:
echo  - Remove xs: breakpoints
echo  - Apply progressive text scaling
echo  - Follow text-size.md patterns
echo.
echo Press Ctrl+C to cancel, or
pause

cd /d "%~dp0"

echo.
echo Running update script...
echo.

node UPDATE_ALL_REMAINING.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Error occurred while running the script!
    echo Make sure Node.js is installed.
    pause
    exit /b 1
)

echo.
echo ================================================
echo   Update Complete!
echo ================================================
echo.
echo Next steps:
echo 1. Review the changes in git diff
echo 2. Test pages at different breakpoints
echo 3. Commit the changes
echo.
pause
