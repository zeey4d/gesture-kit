const fs = require('fs');
const path = require('path');

const dir = 'c:/project/react-native-gesture-kit/packages';

function processDir(currentPath) {
  if (!fs.existsSync(currentPath)) return;
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    const filePath = path.join(currentPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist') {
        processDir(filePath);
      }
    } else if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Replace various depth relative imports to types with module imports
      const patterns = [
        /from '\.\.\/\.\.\/\.\.\/types'/g,
        /from '\.\.\/\.\.\/types'/g,
        /from '\.\.\/types'/g
      ];

      for (const pattern of patterns) {
        if (pattern.test(content)) {
          content = content.replace(pattern, "from 'gesture-kit-core'");
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed imports in ' + path.relative(dir, filePath));
      }
    }
  }
}

const packages = fs.readdirSync(dir);
for (const pkg of packages) {
  if (pkg !== 'gesture-kit-core') {
    processDir(path.join(dir, pkg, 'src'));
  }
}

console.log('Finished fixing imports. You can now run typecheck.');
