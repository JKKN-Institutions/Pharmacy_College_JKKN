#!/usr/bin/env node
/**
 * Comprehensive Text Size Update Script
 * Updates all remaining page.tsx files in the app directory
 * Removes xs: breakpoints and applies progressive scaling patterns
 */

const fs = require('fs');
const path = require('path');

// Files already updated (exclude from processing)
const ALREADY_UPDATED = new Set([
  'page.tsx', // root page
  'b-pharmacy',
  'm-pharmacy',
  'b-pharmacy-lateral-entry',
  'nss',
  'library',
  'class-room',
  'hostel',
  'wifi',
  'transport',
  'sports',
  'seminar-hall',
  'alumni',
  'gallery',
  'food-court',
  'bank-post-office',
  'health-facilities',
  'ambulance-services'
]);

/**
 * Recursively get all page.tsx files
 */
function getAllPageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    return fileList;
  }

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Check if file should be updated
 */
function shouldUpdate(filePath, appDir) {
  const parentDir = path.basename(path.dirname(filePath));

  // Skip root page.tsx
  if (path.dirname(filePath) === appDir && path.basename(filePath) === 'page.tsx') {
    return false;
  }

  // Skip already updated files
  if (ALREADY_UPDATED.has(parentDir)) {
    return false;
  }

  return true;
}

/**
 * Apply text size updates to content
 */
function updateTextSizes(content) {
  let updated = content;

  // Remove all xs: breakpoints
  updated = updated.replace(/\bxs:px-\d+\s+/g, '');
  updated = updated.replace(/\bxs:text-\w+\s+/g, '');
  updated = updated.replace(/\bxs:-mx-\d+\s+/g, '');
  updated = updated.replace(/\bxs:grid-cols-\d+\s+/g, '');
  updated = updated.replace(/\bxs:space-y-\d+\s+/g, '');
  updated = updated.replace(/\bxs:w-\w+\s+/g, '');
  updated = updated.replace(/\bxs:h-\w+\s+/g, '');
  updated = updated.replace(/\bxs:gap-\d+\s+/g, '');

  // Fix page titles: text-2xl sm:text-4xl lg:text-5xl -> text-2xl sm:text-3xl md:text-4xl lg:text-5xl
  updated = updated.replace(/text-2xl\s+sm:text-4xl\s+lg:text-5xl/g, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl');
  updated = updated.replace(/text-2xl\s+sm:text-4xl\s+md:text-5xl/g, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl');

  // Fix section headings: text-xl sm:text-2xl -> text-xl sm:text-2xl md:text-3xl
  updated = updated.replace(/text-xl\s+sm:text-2xl\s+font-bold/g, 'text-xl sm:text-2xl md:text-3xl font-bold');
  updated = updated.replace(/text-xl\s+sm:text-2xl\s+font-semibold/g, 'text-xl sm:text-2xl md:text-3xl font-semibold');

  // Fix subsection headings: text-lg sm:text-xl -> text-lg sm:text-xl md:text-2xl
  updated = updated.replace(/text-lg\s+sm:text-xl\s+font-bold/g, 'text-lg sm:text-xl md:text-2xl font-bold');
  updated = updated.replace(/text-lg\s+sm:text-xl\s+font-semibold/g, 'text-lg sm:text-xl md:text-2xl font-semibold');

  // Fix body text: text-sm sm:text-base -> text-sm sm:text-base md:text-lg
  updated = updated.replace(/text-sm\s+sm:text-base(?!\s+(md:|lg:))/g, 'text-sm sm:text-base md:text-lg');

  // Fix card titles: text-base sm:text-lg -> text-base sm:text-lg md:text-xl lg:text-2xl
  updated = updated.replace(/text-base\s+sm:text-lg(?!\s+(md:|lg:))/g, 'text-base sm:text-lg md:text-xl lg:text-2xl');

  // Fix grid patterns
  updated = updated.replace(/grid-cols-1\s+md:grid-cols-2\s+lg:grid-cols-3/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3');

  return updated;
}

/**
 * Process a single file
 */
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Skip if no xs: breakpoints
    if (!content.includes('xs:')) {
      return { updated: false, reason: 'No xs: breakpoints found' };
    }

    const updated = updateTextSizes(content);

    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      return { updated: true, reason: 'Updated successfully' };
    }

    return { updated: false, reason: 'No changes needed after processing' };
  } catch (error) {
    return { updated: false, reason: `Error: ${error.message}` };
  }
}

/**
 * Main execution
 */
function main() {
  const appDir = path.join(__dirname, 'app');

  if (!fs.existsSync(appDir)) {
    console.error(`Error: app directory not found at ${appDir}`);
    process.exit(1);
  }

  const allFiles = getAllPageFiles(appDir);

  console.log('========================================');
  console.log('Text Size Update Script');
  console.log('========================================');
  console.log(`Found ${allFiles.length} page.tsx files`);
  console.log('');

  let updated = 0;
  let skipped = 0;
  let noChanges = 0;

  allFiles.forEach(filePath => {
    if (!shouldUpdate(filePath, appDir)) {
      skipped++;
      return;
    }

    const result = processFile(filePath);
    const relativePath = path.relative(__dirname, filePath);

    if (result.updated) {
      updated++;
      console.log(`✓ ${relativePath}: ${result.reason}`);
    } else if (result.reason.includes('Error')) {
      console.error(`✗ ${relativePath}: ${result.reason}`);
    } else {
      noChanges++;
      console.log(`- ${relativePath}: ${result.reason}`);
    }
  });

  console.log('');
  console.log('========================================');
  console.log('Summary:');
  console.log(`  Updated: ${updated}`);
  console.log(`  Skipped (already done): ${skipped}`);
  console.log(`  No changes needed: ${noChanges}`);
  console.log(`  Total files: ${allFiles.length}`);
  console.log('========================================');

  if (updated > 0) {
    console.log('');
    console.log('Update complete! Please review the changes.');
  }
}

// Run the script
main();
