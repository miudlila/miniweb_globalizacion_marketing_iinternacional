#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function fixEncoding(text) {
  let fixed = text;

  // Reemplazos comunes de corrupción
  // Índice corrompido
  fixed = fixed.replace(/Á​ndice/g, ‘Índice’);
  fixed = fixed.replace(/Á ndice/g, ‘Índice’);
  fixed = fixed.replace(/Ándice/g, ‘Índice’);

  // Flechas corruptas (prioritario)
  fixed = fixed.replace(/â† /g, ‘← ‘);
  fixed = fixed.replace(/â†’/g, ‘→’);
  fixed = fixed.replace(/â†/g, ‘←’);

  // Emojis corruptos
  fixed = fixed.replace(/ðŸ/g, ‘’);  // Remueve patrones emoji rotos
  fixed = fixed.replace(/ï¸/g, ‘’);  // Variación de selector emoji

  // Signos Spanish
  fixed = fixed.replace(/Â¿/g, ‘¿’);
  fixed = fixed.replace(/Â¡/g, ‘¡’);

  // Acentos
  fixed = fixed.replace(/Ã¡/g, ‘á’);
  fixed = fixed.replace(/Ã©/g, ‘é’);
  fixed = fixed.replace(/Ã­/g, ‘í’);
  fixed = fixed.replace(/Ã³/g, ‘ó’);
  fixed = fixed.replace(/Ã¹/g, ‘ù’);
  fixed = fixed.replace(/Ã±/g, ‘ñ’);
  fixed = fixed.replace(/DaÃ±o/g, ‘Daño’);

  // Comillas y guiones
  fixed = fixed.replace(/â€”/g, ‘—‘);
  fixed = fixed.replace(/â€œ/g, ‘”’);
  fixed = fixed.replace(/â€/g, ‘”’);

  return fixed;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixEncoding(content);

    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      return 'FIXED';
    }
    return 'OK';
  } catch (error) {
    return 'ERROR';
  }
}

const folderPath = process.argv[2] || './slides';
const absolutePath = path.resolve(folderPath);

if (!fs.existsSync(absolutePath)) {
  console.log('Folder not found');
  process.exit(1);
}

const files = fs.readdirSync(absolutePath).filter(f => f.endsWith('.html'));
console.log('Processing ' + files.length + ' HTML files...\n');

let fixedCount = 0, okCount = 0;

files.forEach(file => {
  const result = fixFile(path.join(absolutePath, file));
  if (result === 'FIXED') {
    fixedCount++;
    console.log('[FIXED] ' + file);
  } else if (result === 'OK') {
    okCount++;
  }
});

console.log('\nResults: ' + fixedCount + ' files fixed, ' + okCount + ' already OK');
