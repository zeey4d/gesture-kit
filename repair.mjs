import fs from 'fs/promises';
import path from 'path';

const packagesDir = path.join(process.cwd(), 'packages');

const dirsToFix = ['types', 'hooks', 'utils', 'core', 'composition', 'conflicts', 'context', 'factory', 'lifecycle', 'plugins', 'base'];
const regexStr = `from ['"]\\.\\/(${dirsToFix.join('|')})(.*)['"]`;
const regex = new RegExp(regexStr, 'g');

async function fixImports(dir, inComponentsOrHooks = false) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await fixImports(fullPath, inComponentsOrHooks || entry.name === 'components' || entry.name === 'hooks');
    } else if ((entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) && inComponentsOrHooks) {
      let content = await fs.readFile(fullPath, 'utf8');
      if (regex.test(content)) {
        content = content.replace(regex, `from '../$1$2'`);
        await fs.writeFile(fullPath, content, 'utf8');
        console.log(`Fixed imports in ${fullPath}`);
      }
    }
  }
}

async function fixPrepare() {
  const entries = await fs.readdir(packagesDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const pkgPath = path.join(packagesDir, entry.name, 'package.json');
      try {
        let content = await fs.readFile(pkgPath, 'utf8');
        let pkg = JSON.parse(content);
        if (pkg.scripts && pkg.scripts.prepare) {
          delete pkg.scripts.prepare;
          await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2), 'utf8');
          console.log(`Removed prepare script from ${pkg.name}`);
        }
      } catch (e) {}
    }
  }
}

async function main() {
  await fixImports(packagesDir);
  await fixPrepare();
  console.log("Repair finished.");
}

main();
