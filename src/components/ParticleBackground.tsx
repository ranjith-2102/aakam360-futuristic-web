
import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number;
}

const ParticleBackground = ({ className = "", particleCount = 50 }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const container = canvasRef.current;
    
    // Clear existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle particle-float gpu-accelerated';
      
      // Random positioning
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random animation delay
      particle.style.animationDelay = Math.random() * 8 + 's';
      
      // Random size variation
      const size = 2 + Math.random() * 4;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Random opacity
      particle.style.opacity = (0.3 + Math.random() * 0.5).toString();
      
      container.appendChild(particle);
    }
  }, [particleCount]);

  return (
    <div 
      ref={canvasRef}
      className={`particle-bg ${className}`}
    />
  );
};

export default ParticleBackground;

