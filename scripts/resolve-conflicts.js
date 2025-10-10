const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetFolder = path.join(__dirname, '..', 'main-website1');

// Find all files with merge conflicts
try {
  const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { 
    cwd: targetFolder,
    encoding: 'utf8' 
  }).trim().split('\n').filter(Boolean);

  if (conflictedFiles.length === 0) {
    // Try to find files with merge markers
    console.log('No git conflicts found. Searching for merge conflict markers...');
    findAndResolveMarkers();
  } else {
    console.log(`Found ${conflictedFiles.length} conflicted files:`);
    conflictedFiles.forEach(file => console.log(`  - ${file}`));
    
    // Resolve by keeping HEAD (current) version
    conflictedFiles.forEach(file => {
      try {
        execSync(`git checkout --ours "${file}"`, { cwd: path.join(__dirname, '..') });
        execSync(`git add "${file}"`, { cwd: path.join(__dirname, '..') });
        console.log(`✓ Resolved: ${file} (kept current version)`);
      } catch (err) {
        console.error(`✗ Failed to resolve: ${file}`);
      }
    });
  }
} catch (err) {
  console.log('Git command failed, searching for merge markers manually...');
  findAndResolveMarkers();
}

function findAndResolveMarkers() {
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  
  function processFile(filePath) {
    const ext = path.extname(filePath);
    if (!extensions.includes(ext)) return;

    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Found conflict markers in: ${path.relative(targetFolder, filePath)}`);
      
      // Simple resolution: keep everything before ======= (HEAD version)
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======[\s\S]*?>>>>>>> .*?\n/g, '$1\n');
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Resolved conflict markers in: ${path.relative(targetFolder, filePath)}`);
    }
  }

  function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
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

  processDirectory(targetFolder);
}

console.log('=== Resolving merge conflicts ===\n');
