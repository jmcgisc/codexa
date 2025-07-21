// generate-keys.js
const forge = require('node-forge');
const fs = require('fs');

const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048 });

const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);

fs.writeFileSync('private.pem', privateKeyPem);
fs.writeFileSync('public.pem', publicKeyPem);

console.log('✅ Claves generadas.');
