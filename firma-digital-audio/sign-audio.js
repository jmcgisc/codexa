// sign-audio.js
const fs = require('fs');
const forge = require('node-forge');

const privateKeyPem = fs.readFileSync('private.pem', 'utf8');
const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);

// Cargar archivo de audio
const audioBuffer = fs.readFileSync('audio.mp3'); // usa tu archivo real

// Crear resumen hash
const md = forge.md.sha256.create();
md.update(audioBuffer.toString('binary'));

// Firmar el hash
const signature = privateKey.sign(md);

// Guardar firma
fs.writeFileSync('audio.signature', signature, 'binary');

console.log('✅ Archivo firmado digitalmente.');