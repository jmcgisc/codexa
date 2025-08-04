'use client';

import React, { useState, useEffect } from 'react';
import { Check, Download as DownloadIcon } from 'lucide-react';

const DownloadButton = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'downloading' | 'complete'
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (status === 'idle') {
      setStatus('downloading');
    }
  };

  useEffect(() => {
    let interval;
    if (status === 'downloading') {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus('complete');
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    } else {
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [status]);

  return (
    <button
      onClick={handleClick}
      disabled={status !== 'idle'}
      className={`relative flex items-center justify-center w-full h-12 px-6 rounded-lg transition-all duration-300 ${
        status === 'idle' 
          ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
          : status === 'downloading' 
            ? 'bg-cyan-100 text-cyan-800' 
            : 'bg-emerald-100 text-emerald-800'
      }`}
    >
      {status === 'idle' && (
        <>
          <DownloadIcon className="w-5 h-5 mr-2" />
          <span>Descargar PDF</span>
        </>
      )}

      {status === 'downloading' && (
        <div className="w-full flex items-center">
          <div className="relative w-full h-2 bg-cyan-200 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-cyan-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="ml-3 text-sm">{progress}%</span>
        </div>
      )}

      {status === 'complete' && (
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <Check className="w-5 h-5 mr-2" />
            <span>¡Listo!</span>
          </div>
          <span className="text-emerald-700 font-medium">Open</span>
        </div>
      )}
    </button>
  );
};

export default DownloadButton;