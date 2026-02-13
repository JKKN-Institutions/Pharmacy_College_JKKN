@echo off
REM Batch script to update text sizes in ALL remaining page.tsx files
REM This script uses PowerShell to perform find-and-replace operations

setlocal enabledelayedexpansion

echo ========================================
echo Bulk Text Size Update Script
echo ========================================
echo.
echo This script will update text sizes in all remaining page.tsx files
echo by removing xs: breakpoints and applying progressive scaling patterns.
echo.
pause

cd /d "%~dp0"

REM Define the app directory
set "APP_DIR=%CD%\app"

REM Counter for updated files
set /a COUNT=0

echo.
echo Processing files...
echo.

REM Use PowerShell to process all page.tsx files
powershell -Command "$files = Get-ChildItem -Path '%APP_DIR%' -Recurse -Filter 'page.tsx' | Where-Object { $_.FullName -notmatch '\\\\(b-pharmacy|m-pharmacy|b-pharmacy-lateral-entry|nss|library|class-room|hostel|wifi|transport|sports|seminar-hall|alumni|gallery|food-court|bank-post-office|health-facilities|ambulance-services)\\\\page\.tsx$' -and $_.FullName -notmatch '^.*\\\\app\\\\page\.tsx$' }; foreach ($file in $files) { $content = Get-Content $file.FullName -Raw -Encoding UTF8; $updated = $content; $changed = $false; if ($content -match 'xs:') { $updated = $updated -replace '\bxs:px-\d+\s+', ''; $updated = $updated -replace '\bxs:text-\w+\s+', ''; $updated = $updated -replace '\bxs:-mx-\d+\s+', ''; $updated = $updated -replace '\bxs:grid-cols-\d+\s+', ''; $updated = $updated -replace '\bxs:space-y-\d+\s+', ''; $updated = $updated -replace 'text-2xl\s+sm:text-4xl\s+lg:text-5xl', 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'; $updated = $updated -replace 'text-xl\s+sm:text-2xl\s+font-bold', 'text-xl sm:text-2xl md:text-3xl font-bold'; $updated = $updated -replace 'text-lg\s+sm:text-xl\s+font-bold', 'text-lg sm:text-xl md:text-2xl font-bold'; $updated = $updated -replace 'text-lg\s+sm:text-xl\s+font-semibold', 'text-lg sm:text-xl md:text-2xl font-semibold'; $updated = $updated -replace 'text-sm\s+sm:text-base(?!\s+(md:|lg:))', 'text-sm sm:text-base md:text-lg'; $updated = $updated -replace 'text-base\s+sm:text-lg(?!\s+(md:|lg:))', 'text-base sm:text-lg md:text-xl lg:text-2xl'; $updated = $updated -replace 'grid-cols-1\s+md:grid-cols-2\s+lg:grid-cols-3', 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'; if ($updated -ne $content) { Set-Content -Path $file.FullName -Value $updated -Encoding UTF8 -NoNewline; Write-Host ('Updated: ' + $file.FullName); $changed = $true; } } if ($changed) { $global:COUNT++ } }"

echo.
echo ========================================
echo Update Complete!
echo ========================================
echo.
echo Please review the changes and test the pages.
echo.
pause
