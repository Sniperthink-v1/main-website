const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const srcApp = path.join(repoRoot, "aiagents", "app");
const destApp = path.join(repoRoot, "main-website1", "app", "aiagents");
const srcPublic = path.join(repoRoot, "aiagents", "public");
const destPublic = path.join(repoRoot, "main-website1", "public", "aiagents");

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log("Merging aiagents app into main-website1...");
copyRecursive(srcApp, destApp);
copyRecursive(srcPublic, destPublic);
console.log("Merge complete.");
