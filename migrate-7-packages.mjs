import fs from 'fs/promises';
import path from 'path';

const packagesDir = path.join(process.cwd(), 'packages');

const mapping = {
  'core': ['gesture-kit-core', 'gesture-kit-accessibility'],
  'touch': ['gesture-kit-basic-touch', 'gesture-kit-drag-pan', 'gesture-kit-multi-finger', 'gesture-kit-sequences', 'gesture-kit-transform'],
  'canvas': ['gesture-kit-drawing', 'gesture-kit-stylus'],
  'sensors': ['gesture-kit-sensor', 'gesture-kit-air', 'gesture-kit-proximity'],
  'vision': ['gesture-kit-body'],
  'ai': ['gesture-kit-ai'],
  'sync': ['gesture-kit-collaborative', 'gesture-kit-hybrid']
};

// Create a reverse mapping for easy find-and-replace
const reverseMapping = {};
for (const [newPkg, oldPkgs] of Object.entries(mapping)) {
  for (const oldPkg of oldPkgs) {
    reverseMapping[oldPkg] = `@gesture-kit/${newPkg}`;
  }
}

async function walkAndReplace(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkAndReplace(fullPath);
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      let content = await fs.readFile(fullPath, 'utf8');
      let changed = false;
      for (const [oldPkg, newScopedPkg] of Object.entries(reverseMapping)) {
        const regex = new RegExp(`from ['"]${oldPkg}['"]`, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, `from '${newScopedPkg}'`);
          changed = true;
        }
      }
      if (changed) {
        await fs.writeFile(fullPath, content, 'utf8');
      }
    }
  }
}

async function main() {
  console.log("Starting Phase 1: Creating new package structures...");
  // Phase 1: Structure migration
  for (const [newPkg, oldPkgs] of Object.entries(mapping)) {
    const newPkgPath = path.join(packagesDir, newPkg);
    await fs.mkdir(path.join(newPkgPath, 'src'), { recursive: true });

    // package.json for new package
    const pkgJson = {
      name: `@gesture-kit/${newPkg}`,
      version: "1.0.0",
      main: "dist/index.js",
      types: "dist/index.d.ts",
      scripts: {
        build: "tsup src/index.ts --format cjs,esm --dts",
        prepare: "npm run build"
      },
      dependencies: newPkg !== 'core' ? { "@gesture-kit/core": "^1.0.0" } : {},
      peerDependencies: {
        "react": ">=18.0.0",
        "react-native": ">=0.71.0",
        "react-native-gesture-handler": ">=2.10.0"
      }
    };
    await fs.writeFile(path.join(newPkgPath, 'package.json'), JSON.stringify(pkgJson, null, 2));

    // tsconfig.json
    const tsconfig = {
      extends: "../../tsconfig.base.json",
      compilerOptions: { outDir: "./dist", rootDir: "./src" },
      include: ["src"],
      exclude: ["node_modules", "dist"]
    };
    await fs.writeFile(path.join(newPkgPath, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));

    let indexExports = [];

    // Migrate old packages
    for (const oldPkg of oldPkgs) {
      const oldPkgPath = path.join(packagesDir, oldPkg);
      const oldSrcPath = path.join(oldPkgPath, 'src');
      
      try {
        const stat = await fs.stat(oldSrcPath);
        if (stat.isDirectory()) {
          const targetSrcPath = path.join(newPkgPath, 'src', oldPkg);
          await fs.cp(oldSrcPath, targetSrcPath, { recursive: true });
          
          indexExports.push(`export * from './${oldPkg}';`);
        }
      } catch (e) {
        console.log(`Skipping ${oldPkg}, src not found.`);
      }
    }

    // Write new index.ts
    await fs.writeFile(path.join(newPkgPath, 'src', 'index.ts'), indexExports.join('\n'));
    console.log(`Created @gesture-kit/${newPkg}`);
  }

  console.log("\\nStarting Phase 2: Updating internal imports...");
  // Phase 2: Find and Replace in new packages
  for (const newPkg of Object.keys(mapping)) {
    try {
      await walkAndReplace(path.join(packagesDir, newPkg, 'src'));
    } catch(e) {}
  }

  console.log("\\nStarting Phase 3: Deleting old packages...");
  // Phase 3: Delete old packages
  for (const oldPkgs of Object.values(mapping)) {
    for (const oldPkg of oldPkgs) {
      try {
        await fs.rm(path.join(packagesDir, oldPkg), { recursive: true, force: true });
        console.log(`Deleted ${oldPkg}`);
      } catch(e) {}
    }
  }
  
  console.log("\\nMigration complete! You can now run npm install and npm run build.");
}

main().catch(console.error);
