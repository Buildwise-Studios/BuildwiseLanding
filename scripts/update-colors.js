#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Color mapping from teal to warm amber
const colorMap = {
  // Background colors
  'bg-teal-500': 'bg-warm-amber',
  'bg-teal-600': 'bg-warm-amber',
  'bg-teal-50': 'bg-warm-off-white',
  'bg-teal-100': 'bg-warm-amber-10',

  // Text colors
  'text-teal-500': 'text-warm-amber',
  'text-teal-600': 'text-warm-amber',

  // Border colors
  'border-teal-200': 'border-warm-amber-20',
  'border-teal-600': 'border-warm-amber',

  // Hover states
  'hover:bg-teal-50': 'hover:bg-warm-amber-10',
  'hover:bg-teal-100': 'hover:bg-warm-amber-20',
  'hover:bg-teal-500': 'hover:bg-warm-amber',
  'hover:text-teal-600': 'hover:text-warm-amber',
  'hover:border-teal-600': 'hover:border-warm-amber',

  // Shadows
  'shadow-teal-500/20': 'shadow-warm-amber/20',
  'shadow-teal-500': 'shadow-warm-amber',

  // Fill colors
  'fill-teal-500': 'fill-warm-amber',
};

// Find all files that need updating
function findFiles(dir, pattern) {
  const results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...findFiles(filePath, pattern));
    } else if (pattern.test(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (Object.keys(colorMap).some(keyword => content.includes(keyword))) {
        results.push(filePath);
        console.log(`Found teal colors in: ${filePath}`);
      }
    }
  }

  return results;
}

// Update colors in a file
function updateColorsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // Apply all color replacements
  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    const regex = new RegExp(`\\b${oldColor}\\b`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, newColor);
      updated = true;
      console.log(`  Replaced ${oldColor} → ${newColor}`);
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${filePath}`);
  }

  return updated;
}

// Main execution
console.log('🎨 Starting systematic color replacement from teal → warm amber...\n');

const directories = ['client/src/components', 'client/src/pages', 'client/src/lib'];
let totalFiles = 0;
let totalUpdated = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    const files = findFiles(dir, /\.(tsx|ts)$/);
    console.log(`\n📁 Processing ${files.length} files in ${dir}...`);

    for (const file of files) {
      totalFiles++;
      if (updateColorsInFile(file)) {
        totalUpdated++;
      }
    }
  } else {
    console.log(`⚠️  Directory not found: ${dir}`);
  }
}

console.log(`\n🎉 Color replacement complete!`);
console.log(`📊 Scanned ${totalFiles} files, updated ${totalUpdated} files.`);
