import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [audioFile, setAudioFile] = useState(null);
  const [signature, setSignature] = useState('');
  const [verification, setVerification] = useState(null);

  const handleSign = async () => {
    const formData = new FormData();
    formData.append('audio', audioFile);
    const res = await axios.post('http://localhost:3001/sign', formData);
    setSignature(res.data.signature);
  };

  const handleVerify = async () => {
    const formData = new FormData();
    formData.append('audio', audioFile);
    const blob = new Blob([signature], { type: 'text/plain' });
    formData.append('signature', new File([blob], 'signature.txt'));

    const res = await axios.post('http://localhost:3001/verify', formData);
    setVerification(res.data.valid);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎧 Firma Digital de Audio</h1>
      <input type="file" accept="audio/*" onChange={e => setAudioFile(e.target.files[0])} />
      <div style={{ marginTop: 20 }}>
        <button onClick={handleSign}>Firmar</button>
        <button onClick={handleVerify} disabled={!signature}>Verificar</button>
      </div>
      {signature && (
        <div>
          <h4>🔐 Firma generada:</h4>
          <textarea value={signature} readOnly rows={5} cols={60} />
        </div>
      )}
      {verification !== null && (
        <h3>{verification ? '✅ Firma válida' : '❌ Firma inválida'}</h3>
      )}
    </div>
  );
}

export default App;
