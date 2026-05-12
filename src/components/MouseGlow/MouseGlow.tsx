import { useEffect, useRef } from 'react';
import styles from './MouseGlow.module.css';

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Para não prejudicar a performance do React com vários re-renders,
    // atualizamos o DOM diretamente usando ref em vez de useState
    const handleMouseMove = (event: MouseEvent) => {
      if (glowRef.current) {
        const { clientX, clientY } = event;
        // Move a div exatamente para a coordenada do mouse
        glowRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={glowRef} className={styles.glow} aria-hidden="true" />;
};

export default MouseGlow;
