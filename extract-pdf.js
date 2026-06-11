import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfParse from 'pdf-parse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfFiles = [
  'Tema 1_LA ECONOMÍA GLOBAL.pdf',
  'Tema 2_EXPLORACIÓN Y ANÁLISIS DE MERCADOS GLOBALES.pdf'
];

async function extractPDFText(filePath) {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  } catch (error) {
    console.error(`Error extrayendo ${path.basename(filePath)}: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🔄 Iniciando extracción de PDFs...\n');

  for (const file of pdfFiles) {
    const filePath = path.join(__dirname, file);

    if (fs.existsSync(filePath)) {
      console.log(`📄 Procesando: ${file}`);
      const text = await extractPDFText(filePath);

      if (text) {
        const outputFile = path.join(__dirname, `${file.replace('.pdf', '')}_extracted.txt`);
        fs.writeFileSync(outputFile, text, 'utf-8');
        console.log(`✅ Texto extraído: ${outputFile}`);
        console.log(`   Primeros 500 caracteres:\n${text.substring(0, 500)}\n`);
      } else {
        console.log(`❌ No se pudo extraer texto de ${file}\n`);
      }
    } else {
      console.log(`⚠️  Archivo no encontrado: ${file}\n`);
    }
  }
}

main();
