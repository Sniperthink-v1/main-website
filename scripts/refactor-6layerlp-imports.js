const fs = require('fs');
const path = require('path');

const sourceFolder = path.join(__dirname, '..', '6LayerLP');

// File extensions to process
const extensions = ['.tsx', '.ts', '.jsx', '.js'];

// Patterns to replace
const replacements = [
  { from: /@\/app\//g, to: '@6LayerLP/app/' },
  { from: /@\/data\//g, to: '@6LayerLP/data/' },
  { from: /@\/lib\//g, to: '@6LayerLP/lib/' },
  { from: /@\/hooks\//g, to: '@6LayerLP/hooks/' },
  { from: /@\/types\//g, to: '@6LayerLP/types/' },
  { from: /@\/styles\//g, to: '@6LayerLP/styles/' },
  { from: /@\/components\//g, to: '@6LayerLP/components/' },
  { from: /@\/public\//g, to: '@6LayerLP/public/' },
];

function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!extensions.includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  replacements.forEach(({ from, to }) => {
    if (from.test(content)) {
      content = content.replace(from, to);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Updated: ${path.relative(sourceFolder, filePath)}`);
  }
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    // Skip node_modules, .next, .git
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') {
      continue;
    }

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile()) {
      processFile(fullPath);
    }
  }
}

console.log('=== Refactoring 6LayerLP imports to use @6LayerLP namespace ===\n');
processDirectory(sourceFolder);
console.log('\n=== Refactoring complete! ===');
