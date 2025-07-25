import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
  }
`;

const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  width: 100%;
  font-family: "Open Sans", sans-serif;
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
`;

const Card = styled.article`
  aspect-ratio: 3 / 4;
  border-radius: calc(var(--radius) * 1px);
  width: 350px;
  position: relative;
  grid-template-rows: 1fr auto;
  box-shadow: 0 1rem 2rem -1rem rgba(0, 0, 0, 0.5);
  padding: 1rem;
  display: grid;
  gap: 1rem;
  backdrop-filter: blur(calc(var(--cardblur, 5) * 1px));

  /* Efecto glow */
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

  &::before {
    inset: -10px;
    border-width: 10px;
  }
`;

const CardContent = styled.div`
  color: rgb(211,211,211); 
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 1rem;
`;

const Price = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: rgb(131, 51, 108 );

  span {
    font-size: 24px;
    font-weight: 600;
    color: rgb(35, 89, 7);
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
    }
  }

  &.diamond {
    border: 2px solid rgb(22, 181, 250);
    &:hover {
      background-color: rgb(22, 181, 250);
      box-shadow: 0 0 10px rgb(22, 181, 250);
    }
  }

  &.platinum {
    border: 2px solid rgb(251, 192, 17);
    &:hover {
      background-color: rgb(251, 192, 17);
      box-shadow: 0 0 10px rgb(251, 192, 17);
    }
  }
`;

const SocialLink = styled.a`
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-flex;
  gap: 5px;
  left: 10px;
  padding: 10px 20px;
  position: fixed;
  text-decoration: none;
  transition: background-color 0.6s, border-color 0.6s;
  z-index: 10000;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  span {
    color: rgb(211,211,211);
    font-family: "Rubik", sans-serif;
    transition: color 0.6s;
    height: 20px;
    line-height: 20px;
  }

  &#source-link {
    top: 120px;
    svg {
      color: rgb(94, 106, 210);
    }
  }

  &#yt-link {
    top: 65px;
    svg {
      color: rgb(219, 31, 106);
    }
  }

  &#Fund-link {
    top: 10px;
    svg {
      color: rgb(255, 251, 0);
    }
  }
`;

const MembershipCards: React.FC = () => {
  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty('--x', x.toFixed(2));
    document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
    document.documentElement.style.setProperty('--y', y.toFixed(2));
    document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
  };


      
      document.body.addEventListener('pointermove', syncPointer as EventListener);
      
      return () => {
        document.body.removeEventListener('pointermove', syncPointer as EventListener);
      };
    }, []);
    

  return (
    <>
      <GlobalStyle />
      <Container>
        <Main>
          <Card data-glow>
            <CardContent>
              <Title>Gold Membership 👑</Title>
              <Price><span>$4</span>/month</Price>
              <FeaturesList>
                <li>Some of the Extras are Free for Members Only</li>
                <li>Unlock exclusive posts and messages</li>
                <li>Grab every product without any pay</li>
                <li>Access early releases and special promotions</li>
              </FeaturesList>
              <Button className="gold">Join Now</Button>
            </CardContent>
            <GlowEffect data-glow />
          </Card>

          <Card data-glow>
            <CardContent>
              <Title>Diamond Membership 💎</Title>
              <Price><span>$6</span>/month</Price>
              <FeaturesList>
                <li>Some of the Extras are Free for Members Only</li>
                <li>Unlock exclusive posts and messages</li>
                <li>Grab every product without any pay</li>
                <li>Access early releases and special promotions</li>
              </FeaturesList>
              <Button className="diamond">Join Now</Button>
            </CardContent>
            <GlowEffect data-glow />
          </Card>

          <Card data-glow>
            <CardContent>
              <Title>Platinum Membership 🏆</Title>
              <Price><span>$10</span>/month</Price>
              <FeaturesList>
                <li>All Extras are Free for Members</li>
                <li>Unlock premium posts and messages</li>
                <li>Grab all products with no extra cost</li>
                <li>Access early releases, promotions, and special VIP events</li>
              </FeaturesList>
              <Button className="platinum">Join Now</Button>
            </CardContent>
            <GlowEffect data-glow />
          </Card>
        </Main>

      </Container>
    </>
  );
};

export default MembershipCards;