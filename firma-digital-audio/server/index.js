const express = require('express');
const multer = require('multer');
const fs = require('fs');
const forge = require('node-forge');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const upload = multer({ dest: 'uploads/' });

// Cargar claves (ya generadas previamente)
const privateKey = forge.pki.privateKeyFromPem(fs.readFileSync('private.pem', 'utf8'));
const publicKey = forge.pki.publicKeyFromPem(fs.readFileSync('public.pem', 'utf8'));

// Endpoint para firmar
app.post('/sign', upload.single('audio'), (req, res) => {
  const fileBuffer = fs.readFileSync(req.file.path);
  const md = forge.md.sha256.create();
  md.update(fileBuffer.toString('binary'));
  const signature = privateKey.sign(md);
  fs.unlinkSync(req.file.path); // limpiar

  res.json({ signature: forge.util.encode64(signature) });
});

// Endpoint para verificar
app.post('/verify', upload.fields([{ name: 'audio' }, { name: 'signature' }]), (req, res) => {
  const fileBuffer = fs.readFileSync(req.files['audio'][0].path);
  const signature = forge.util.decode64(fs.readFileSync(req.files['signature'][0].path, 'utf8'));

  const md = forge.md.sha256.create();
  md.update(fileBuffer.toString('binary'));
  const valid = publicKey.verify(md.digest().bytes(), signature);

  fs.unlinkSync(req.files['audio'][0].path);
  fs.unlinkSync(req.files['signature'][0].path);

  res.json({ valid });
});

app.listen(3001, () => console.log('🟢 Backend corriendo en http://localhost:3001'));
