const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/imdot/.gemini/antigravity/scratch/thiep-cuoi-online';

const htmlPath = path.join(dir, 'index.html');
const cssPath = path.join(dir, 'style.css');
const jsPath = path.join(dir, 'script.js');
const templatesPath = path.join(dir, 'templates.js');
const outputPath = path.join(dir, 'thiep-cuoi.html');

let html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');
const templatesJs = fs.readFileSync(templatesPath, 'utf8');

// Thay thế link css thành thẻ style nội bộ
html = html.replace(
  '<link rel="stylesheet" href="style.css">',
  `<style>\n${css}\n</style>`
);

// Thay thế thẻ script templates.js
html = html.replace(
  '<script src="templates.js"></script>',
  `<script>\n${templatesJs}\n</script>`
);

// Thay thế thẻ script src thành inline script nội bộ
html = html.replace(
  '<script src="script.js"></script>',
  `<script>\n${js}\n</script>`
);

fs.writeFileSync(outputPath, html, 'utf8');
console.log('Build completed! File created at:', outputPath);
console.log('File size:', (fs.statSync(outputPath).size / 1024).toFixed(2), 'KB');
