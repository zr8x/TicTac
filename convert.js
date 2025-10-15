const fs = require('fs');
const path = require('path');

let file = fs.readFileSync(path.join(__dirname, 'public', 'scripts', 'constructor.js'), 'utf8');

const obfuscated = btoa(file);

console.log(obfuscated);