const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

if (html.includes('width-="')) {
  console.error('index.html should not contain \"width-=\"');
  process.exitCode = 1;
} else {
  console.log('index.html does not contain width-="');
}

