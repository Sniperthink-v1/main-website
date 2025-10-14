const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const aiagentsFolder = path.join(repoRoot, "aiagents");

// File extensions to process
const extensions = [".tsx", ".ts", ".jsx", ".js"];

function shouldProcessFile(filePath) {
  return extensions.some((ext) => filePath.endsWith(ext));
}

function refactorImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Replace @/ imports with @aiagents/ for different folders
  const replacements = [
    { from: /@\/app\//g, to: "@aiagents/app/" },
    { from: /@\/lib\//g, to: "@aiagents/lib/" },
    { from: /@\/hooks\//g, to: "@aiagents/hooks/" },
    { from: /@\/data\//g, to: "@aiagents/data/" },
    { from: /@\/types\//g, to: "@aiagents/types/" },
    { from: /@\/styles\//g, to: "@aiagents/styles/" },
    { from: /@\/public\//g, to: "@aiagents/public/" },
    { from: /@\/components\//g, to: "@aiagents/app/components/" },
  ];

  replacements.forEach(({ from, to }) => {
    if (from.test(content)) {
      content = content.replace(from, to);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  }
  return false;
}

function processDirectory(dir) {
  let filesModified = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules" && entry.name !== ".next") {
        filesModified += processDirectory(fullPath);
      }
    } else if (shouldProcessFile(entry.name)) {
      if (refactorImportsInFile(fullPath)) {
        filesModified++;
        console.log(
          `  ✓ Refactored: ${path.relative(aiagentsFolder, fullPath)}`
        );
      }
    }
  });

  return filesModified;
}

console.log("=== Refactoring aiagents imports from @/ to @aiagents/ ===\n");

if (!fs.existsSync(aiagentsFolder)) {
  console.error("Error: aiagents folder not found at", aiagentsFolder);
  process.exit(1);
}

const totalFiles = processDirectory(aiagentsFolder);

console.log(`\n=== Refactoring complete ===`);
console.log(`Modified ${totalFiles} file(s)`);
