'use client';

import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import FormularioContactoPopup from '../../../components/email/FormularioContactoPopup';

interface MembershipCardsProps {
  className?: string;
}

const GlobalStyle = createGlobalStyle`  
  :root {
    --backdrop: hsla(0, 0%, 0%, 0.12);
    --radius: 14;
    --border: 3;
    --backup-border: var(--backdrop);
    --size: 200;
  }

  body {
    background: #E5F8FF;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }
`;

const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: calc(100vw - 2rem);
  position: relative;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const Card = styled.article`
  aspect-ratio: 3 / 4;
  border-radius: calc(var(--radius) * 1px);
  width: 350px;
  max-width: 100%;
  position: relative;
  grid-template-rows: 1fr auto;
  box-shadow: 0 1rem 2rem -1rem rgba(0, 0, 0, 0.5);
  padding: 1rem;
  display: grid;
  gap: 1rem;
  backdrop-filter: blur(calc(var(--cardblur, 5) * 1px));

  /* Glow effect */
  --border-size: calc(var(--border, 2) * 1px);
  --spotlight-size: calc(var(--size, 150) * 1px);
  --hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0)));
  background-image: radial-gradient(
    var(--spotlight-size) var(--spotlight-size) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
    hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)),
    transparent
  );
  background-color: var(--backdrop, transparent);
  background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
  background-position: 50% 50%;
  background-attachment: fixed;
  border: var(--border-size) solid var(--backup-border);
  touch-action: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
    pointer-events: none;
  }

  &::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)),
      transparent 100%
    );
    filter: brightness(2);
  }

  &::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)),
      transparent 100%
    );
  }

  &:first-of-type {
    --base: 80;
    --spread: 500;
    --outer: 1;
  }

  &:last-of-type {
    --outer: 1;
    --base: 220;
    --spread: 200;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  inset: 0;
  will-change: filter;
  opacity: var(--outer, 1);
  border-radius: calc(var(--radius) * 1px);
  border-width: calc(var(--border-size) * 20);
  filter: blur(calc(var(--border-size) * 10));
  background: none;
  pointer-events: none;
  border: none;
`;

const CardContent = styled.div`
  color: rgb(211, 211, 211);
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 1rem;
  color: #2c9cd7;
`;

const Price = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: rgb(205, 49, 163);

  span {
    font-size: 24px;
    font-weight: 600;
    color: rgb(111, 199, 66);
  }
`;

const FeaturesList = styled.ul`
  list-style: circle;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const Button = styled.button`
  height: 45px;
  width: 80%;
  border-radius: 50px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  margin-top: auto;
  margin-bottom: 20px;
  align-self: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &.gold {
    border: 2px solid rgb(255, 111, 171);
    &:hover {
      background-color: rgb(255, 111, 171);
      box-shadow: 0 0 10px rgb(255, 111, 171);
      color: white;
    }
  }

  &.diamond {
    border: 2px solid rgb(22, 181, 250);
    &:hover {
      background-color: rgb(22, 181, 250);
      box-shadow: 0 0 10px rgb(22, 181, 250);
      color: white;
    }
  }

  &.platinum {
    border: 2px solid rgb(251, 192, 17);
    &:hover {
      background-color: rgb(251, 192, 17);
      box-shadow: 0 0 10px rgb(251, 192, 17);
      color: white;
    }
  }
`;

const MembershipCards: React.FC<MembershipCardsProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--x', x.toFixed(2));
      document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
      document.documentElement.style.setProperty('--y', y.toFixed(2));
      document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
    };
    window.addEventListener('pointermove', syncPointer);
    return () => window.removeEventListener('pointermove', syncPointer);
  }, []);

  const handleOpenPopup = (service: string) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  return (
    <>
      <GlobalStyle />
      <Container className={className}>
        <Main>
          <Card data-glow>
            <CardContent>
              <Title>Desarrollo Web 💻</Title>
              <Price><span>Desde $4,500.00 mxn</span> / proyecto</Price>
              <FeaturesList>
                <li>Sitios rápidos, modernos y responsivos</li>
                <li>Diseño UI/UX optimizado para conversión</li>
                <li>Integraciones con APIs y CMS</li>
                <li>Soporte y mantenimiento personalizado</li>
              </FeaturesList>
              <Button className="gold" onClick={() => handleOpenPopup('Desarrollo Web')}>
                Solicitar cotización
              </Button>
            </CardContent>
            <GlowEffect data-glow />
          </Card>

          <Card data-glow>
            <CardContent>
              <Title>Firmas Criptográficas 🔐</Title>
              <Price><span>Desde $180.00 mxn</span> / integración</Price>
              <FeaturesList>
                <li>Validación de identidad y documentos</li>
                <li>Integración con certificados digitales</li>
                <li>Soporte para Ethereum, Web3, wallets</li>
                <li>Alta seguridad y cumplimiento normativo</li>
              </FeaturesList>
              <Button className="diamond" onClick={() => handleOpenPopup('Firmas Criptográficas')}>
                Contáctanos
              </Button>
            </CardContent>
            <GlowEffect data-glow />
          </Card>

          <Card data-glow>
            <CardContent>
              <Title>SEO Avanzado 🔍</Title>
              <Price><span>Desde $650.00 mxn</span> / mes</Price>
              <FeaturesList>
                <li>Optimización técnica (CWV)</li>
                <li>Auditoría de contenido y keywords</li>
                <li>Backlinks y autoridad de dominio</li>
                <li>Monitoreo de rankings y tráfico orgánico</li>
                <li>Análisis de competencia para campañas</li>
              </FeaturesList>
              <Button className="diamond" onClick={() => handleOpenPopup('SEO Avanzado')}>
                Mejorar visibilidad
              </Button>
            </CardContent>
            <GlowEffect data-glow />
          </Card>
        </Main>
      </Container>

      {isOpen && (
        <FormularioContactoPopup 
          onClose={() => setIsOpen(false)} 
        />
      )}
    </>
  );
};

export default MembershipCards;
