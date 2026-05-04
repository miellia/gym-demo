const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const directories = [
  path.join(rootDir, 'components', 'gym'),
  path.join(rootDir, 'components', 'ui'),
  path.join(rootDir, 'app')
];

const replacements = [
  [/border-foreground\/5/g, 'border-card-border'],
  [/border-foreground\/10/g, 'border-card-border'],
  [/bg-foreground\/5/g, 'bg-card-border'],
  [/border-black\/5/g, 'border-card-border'],
  [/border-white\/10/g, 'border-card-border']
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return;
  }
  
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.css')) {
      const filePath = path.join(dir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      
      replacements.forEach(([regex, replacement]) => {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated: ${filePath}`);
      }
    }
  });
});
