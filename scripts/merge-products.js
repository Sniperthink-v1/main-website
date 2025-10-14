const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const targetApp = path.join(repoRoot, "main-website1");

// Configuration: map source folders to their target paths in main-website1
const productsToMerge = [
  {
    name: "6LayerLP",
    sourceFolder: path.join(repoRoot, "6LayerLP"),
    targetPath: "6LayerLP", // will be served at /6LayerLP
  },
  {
    name: "aiagents",
    sourceFolder: path.join(repoRoot, "aiagents"),
    targetPath: "aiagents", // will be served at /aiagents
  },
  // Add more products here as needed:
  // {
  //   name: 'product-name',
  //   sourceFolder: path.join(repoRoot, 'product-name'),
  //   targetPath: 'product-name' // will be served at /product-name
  // }
];

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`  Warning: Source folder ${src} does not exist, skipping...`);
    return false;
  }
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
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
  return true;
}

function cleanTarget(dest) {
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
}

console.log("=== Merging product apps into main-website1 ===\n");

productsToMerge.forEach((product) => {
  const srcApp = path.join(product.sourceFolder, "app");
  const destApp = path.join(targetApp, "app", product.targetPath);
  const srcPublic = path.join(product.sourceFolder, "public");
  const destPublic = path.join(targetApp, "public", product.targetPath);

  console.log(`Processing: ${product.name}`);

  // Clean existing merged content for this product's routes
  cleanTarget(destApp);
  cleanTarget(destPublic);

  // Copy app folder (pages for the product) to /app/productName
  if (copyRecursive(srcApp, destApp)) {
    console.log(`  ✓ Merged app files to /app/${product.targetPath}`);
  }

  // Copy public assets to /public/productName
  if (copyRecursive(srcPublic, destPublic)) {
    console.log(`  ✓ Merged public assets to /public/${product.targetPath}`);
  }

  // Copy root-level shared folders to /folderName/productName (namespaced)
  const rootSharedFolders = ["lib", "hooks", "data", "types", "styles"];
  rootSharedFolders.forEach((folder) => {
    const srcFolder = path.join(product.sourceFolder, folder);
    const destFolder = path.join(targetApp, folder, product.targetPath);
    if (fs.existsSync(srcFolder)) {
      cleanTarget(destFolder);
      if (copyRecursive(srcFolder, destFolder)) {
        console.log(`  ✓ Merged ${folder} to /${folder}/${product.targetPath}`);
      }
    }
  });

  console.log("");
});

console.log("=== Merge complete ===");
console.log("\nYou can now build main-website1 with all products included.");
console.log("Products will be available at:");
productsToMerge.forEach((product) => {
  console.log(`  - /${product.targetPath}`);
});
