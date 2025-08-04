import React, { useState, useEffect } from 'react';
import './DownloadButton.css';

const DownloadButton = ({ pdfUrl, fileName = 'documento.pdf' }) => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'downloading' | 'complete'

  const handleDownload = async () => {
    if (status === 'idle') {
      setStatus('downloading');
      
      try {
        // Simulación de descarga (2 segundos)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Descarga real del PDF
        const response = await fetch(pdfUrl);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
        
        setStatus('complete');
      } catch (error) {
        console.error('Error al descargar el PDF:', error);
        setStatus('idle');
      }
    }
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    window.open(pdfUrl, '_blank');
  };

  useEffect(() => {
    if (status === 'downloading') {
      const timer = setTimeout(() => {
        if (status === 'downloading') {
          setStatus('complete');
        }
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="download-container">
      <div 
        className={`download-button ${status}`}
        onClick={status === 'complete' ? undefined : handleDownload}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleDownload()}
        aria-label={status === 'idle' ? 'Download' : status === 'downloading' ? 'Downloading...' : 'Open'}
      >
        <div className="button-circle">
          <svg className="download-icon" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12-4-4m4 4 4-4"/>
          </svg>
          <div className="checkmark" />
        </div>
        {status === 'complete' ? (
          <span 
            className="button-text open-text" 
            onClick={handleOpen}
          >
            Open
          </span>
        ) : (
          <span className="button-text">
            {status === 'idle' ? 'Download' : 'Downloading...'}
          </span>
        )}
      </div>
    </div>
  );
};

export default DownloadButton;