const fs = require('fs');
const path = require('path');

// Files already updated
const ALREADY_UPDATED = new Set([
  'page.tsx', // root
  'b-pharmacy', 'm-pharmacy', 'b-pharmacy-lateral-entry', 'nss',
  'library', 'class-room', 'hostel', 'wifi', 'transport', 'sports',
  'seminar-hall', 'alumni', 'gallery'
]);

function getAllPageFiles(dir, fileList = []) {
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

function shouldUpdate(filePath) {
  const parentDir = path.basename(path.dirname(filePath));

  // Skip root page.tsx
  if (path.dirname(filePath).endsWith('app') && path.basename(filePath) === 'page.tsx') {
    return false;
  }

  // Skip already updated
  if (ALREADY_UPDATED.has(parentDir)) {
    return false;
  }

  return true;
}

function updateTextSizes(content) {
  let updated = content;

  // Remove all xs: breakpoints
  updated = updated.replace(/\bxs:px-\d+\s+/g, '');
  updated = updated.replace(/\bxs:text-\w+\s+/g, '');
  updated = updated.replace(/\bxs:-mx-\d+\s+/g, '');
  updated = updated.replace(/\bxs:grid-cols-\d+\s+/g, '');
  updated = updated.replace(/\bxs:space-y-\d+\s+/g, '');

  // Fix page titles: text-2xl sm:text-4xl lg:text-5xl -> text-2xl sm:text-3xl md:text-4xl lg:text-5xl
  updated = updated.replace(/text-2xl\s+sm:text-4xl\s+lg:text-5xl/g, 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl');

  // Fix section headings: text-xl sm:text-2xl -> text-xl sm:text-2xl md:text-3xl
  updated = updated.replace(/text-xl\s+sm:text-2xl\s+font-bold/g, 'text-xl sm:text-2xl md:text-3xl font-bold');

  // Fix subsection headings: text-lg sm:text-xl -> text-lg sm:text-xl md:text-2xl
  updated = updated.replace(/text-lg\s+sm:text-xl\s+font-bold/g, 'text-lg sm:text-xl md:text-2xl font-bold');
  updated = updated.replace(/text-lg\s+sm:text-xl\s+font-semibold/g, 'text-lg sm:text-xl md:text-2xl font-semibold');

  // Fix body text: text-sm sm:text-base -> text-sm sm:text-base md:text-lg
  updated = updated.replace(/text-sm\s+sm:text-base(?!\s+(md:|lg:))/g, 'text-sm sm:text-base md:text-lg');

  // Fix card titles: text-base sm:text-lg -> text-base sm:text-lg md:text-xl lg:text-2xl
  updated = updated.replace(/text-base\s+sm:text-lg(?!\s+(md:|lg:))/g, 'text-base sm:text-lg md:text-xl lg:text-2xl');

  // Fix grid text patterns
  updated = updated.replace(/grid-cols-1\s+md:grid-cols-2\s+lg:grid-cols-3/g, 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3');

  return updated;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Skip if no xs: breakpoints
    if (!content.includes('xs:')) {
      return { updated: false, reason: 'No xs: breakpoints' };
    }

    const updated = updateTextSizes(content);

    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      return { updated: true, reason: 'Updated successfully' };
    }

    return { updated: false, reason: 'No changes needed' };
  } catch (error) {
    return { updated: false, reason: `Error: ${error.message}` };
  }
}

// Main execution
const appDir = path.join(__dirname, 'app');
const allFiles = getAllPageFiles(appDir);

console.log(`Found ${allFiles.length} page.tsx files`);
console.log('='.repeat(60));

let updated = 0;
let skipped = 0;

allFiles.forEach(filePath => {
  if (!shouldUpdate(filePath)) {
    skipped++;
    return;
  }

  const result = processFile(filePath);
  const relativePath = path.relative(__dirname, filePath);

  if (result.updated) {
    updated++;
    console.log(`✓ ${relativePath}: ${result.reason}`);
  } else {
    console.log(`- ${relativePath}: ${result.reason}`);
  }
});

console.log('='.repeat(60));
console.log(`Summary:`);
console.log(`  Updated: ${updated}`);
console.log(`  Skipped: ${skipped}`);
console.log(`  Total: ${allFiles.length}`);
