const fs = require('fs');
const forge = require('node-forge');

const publicKeyPem = fs.readFileSync('public.pem', 'utf8');
const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);

// Cargar archivo y firma
const audioBuffer = fs.readFileSync('audio.mp3'); // archivo original
const signature = fs.readFileSync('audio.signature', 'binary');

// Recalcular hash
const md = forge.md.sha256.create();
md.update(audioBuffer.toString('binary'));

// Verificar
const valid = publicKey.verify(md.digest().bytes(), signature);

console.log(valid ? '✅ Firma válida. Archivo auténtico.' : '❌ Firma inválida o archivo modificado.');
