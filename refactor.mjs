import fs from 'fs/promises';
import path from 'path';

const packagesDir = path.join(process.cwd(), 'packages');

async function main() {
  const packages = await fs.readdir(packagesDir);
  
  for (const pkg of packages) {
    const pkgPath = path.join(packagesDir, pkg);
    try {
      const stat = await fs.stat(pkgPath);
      if (!stat.isDirectory()) continue;
    } catch (e) {
      continue;
    }

    console.log(`Processing package: ${pkg}`);

    // 1. tsconfig.json
    const tsconfigPath = path.join(pkgPath, 'tsconfig.json');
    const tsconfigContent = {
      extends: "../../tsconfig.base.json",
      compilerOptions: {
        outDir: "./dist",
        rootDir: "./src"
      },
      include: ["src"],
      exclude: ["node_modules", "dist"]
    };
    await fs.writeFile(tsconfigPath, JSON.stringify(tsconfigContent, null, 2));

    // 2. package.json
    const pkgJsonPath = path.join(pkgPath, 'package.json');
    try {
      const pkgJsonStr = await fs.readFile(pkgJsonPath, 'utf8');
      const pkgJson = JSON.parse(pkgJsonStr);
      
      delete pkgJson.devDependencies;
      
      if (pkgJson.scripts) {
        pkgJson.scripts.build = "tsup src/index.ts --format cjs,esm --dts";
        pkgJson.scripts.prepare = "npm run build";
        pkgJson.scripts.typecheck = "tsc --noEmit";
      }
      
      await fs.writeFile(pkgJsonPath, JSON.stringify(pkgJson, null, 2));
    } catch (e) {
      console.log(`Failed inside package.json for ${pkg}`);
    }

    // 3. src/ components refactoring
    const srcPath = path.join(pkgPath, 'src');
    try {
      const srcFiles = await fs.readdir(srcPath);
      const tsxFiles = srcFiles.filter(f => f.endsWith('.tsx'));
      
      if (tsxFiles.length > 0) {
        const componentsPath = path.join(srcPath, 'components');
        await fs.mkdir(componentsPath, { recursive: true }).catch(() => {});
        
        for (const file of tsxFiles) {
          const oldPath = path.join(srcPath, file);
          const newPath = path.join(componentsPath, file);
          await fs.rename(oldPath, newPath);
        }
        
        // Update index.ts
        const indexTsPath = path.join(srcPath, 'index.ts');
        try {
          let indexContent = await fs.readFile(indexTsPath, 'utf8');
          for (const file of tsxFiles) {
            const basename = path.basename(file, '.tsx');
            const regex = new RegExp(`from (['"])\\./${basename}(['"])`, 'g');
            indexContent = indexContent.replace(regex, `from $1./components/${basename}$2`);
          }
          await fs.writeFile(indexTsPath, indexContent);
        } catch (e) {}
      }
    } catch (e) {}
  }
}

main().catch(console.error);
