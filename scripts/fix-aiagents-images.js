const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const aiagentsFolder = path.join(repoRoot, "aiagents");

// File extensions to process
const extensions = [".tsx", ".ts", ".jsx", ".js", ".css"];

function shouldProcessFile(filePath) {
  return extensions.some((ext) => filePath.endsWith(ext));
}

function refactorImagePathsInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // Replace /images/ with /aiagents/images/ for image sources
  const replacements = [
    { from: /src=["']\/images\//g, to: 'src="/aiagents/images/' },
    { from: /href=["']\/images\//g, to: 'href="/aiagents/images/' },
    { from: /url\(['"]\/images\//g, to: "url('/aiagents/images/" },
    {
      from: /background-image:\s*url\(['"]\/images\//g,
      to: "background-image: url('/aiagents/images/",
    },
    { from: /bg-\[url\(['"]\/images\//g, to: "bg-[url('/aiagents/images/" },
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
      if (refactorImagePathsInFile(fullPath)) {
        filesModified++;
        console.log(
          `  ✓ Fixed images: ${path.relative(aiagentsFolder, fullPath)}`
        );
      }
    }
  });

  return filesModified;
}

console.log(
  "=== Fixing aiagents image paths from /images/ to /aiagents/images/ ===\n"
);

if (!fs.existsSync(aiagentsFolder)) {
  console.error("Error: aiagents folder not found at", aiagentsFolder);
  process.exit(1);
}

const totalFiles = processDirectory(aiagentsFolder);

console.log(`\n=== Image path fixing complete ===`);
console.log(`Modified ${totalFiles} file(s)`);
