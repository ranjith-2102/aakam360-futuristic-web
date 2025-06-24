
import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Building Component - representing Aakam360 building
const Building = () => {
  const buildingRef = useRef<THREE.Group>(null);
  
  return (
    <group ref={buildingRef} position={[0, -2, 0]}>
      {/* Main building structure */}
      <Box args={[8, 6, 12]} position={[0, 3, 0]}>
        <meshStandardMaterial color="#f0f0f0" />
      </Box>
      
      {/* Building wings */}
      <Box args={[4, 4, 8]} position={[-6, 2, 0]}>
        <meshStandardMaterial color="#e8e8e8" />
      </Box>
      <Box args={[4, 4, 8]} position={[6, 2, 0]}>
        <meshStandardMaterial color="#e8e8e8" />
      </Box>
      
      {/* Ground floor */}
      <Box args={[12, 1, 14]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#d0d0d0" />
      </Box>
      
      {/* Windows */}
      {Array.from({ length: 20 }, (_, i) => (
        <Box key={i} args={[0.8, 1.2, 0.1]} position={[
          -3.5 + (i % 5) * 1.75,
          2 + Math.floor(i / 5) * 1.5,
          6.05
        ]}>
          <meshStandardMaterial color="#4a90e2" opacity={0.7} transparent />
        </Box>
      ))}
      
      {/* Front door */}
      <Box args={[1.5, 2.5, 0.2]} position={[0, 1.25, 6.1]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Roof details */}
      <Box args={[9, 0.5, 13]} position={[0, 6.25, 0]}>
        <meshStandardMaterial color="#c0c0c0" />
      </Box>
    </group>
  );
};

// Floating Logo Component
const FloatingLogo = () => {
  const logoRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.3 + 2;
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });
  
  return (
    <group ref={logoRef} position={[0, 2, 8]}>
      <Text
        fontSize={1.5}
        color="#4a90e2"
        font="/fonts/inter-bold.woff"
        anchorX="center"
        anchorY="middle"
      >
        Aakam360
      </Text>
    </group>
  );
};

// Camera Controller Component
const CameraController = ({ scrollProgress }: { scrollProgress: number }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    // Camera animation based on scroll
    const progress = Math.min(scrollProgress, 1);
    
    if (progress <= 0.3) {
      // Initial position - front view
      camera.position.x = 0;
      camera.position.y = 5;
      camera.position.z = 15 - progress * 20;
      camera.lookAt(0, 0, 0);
    } else if (progress <= 0.6) {
      // Moving closer to building
      const localProgress = (progress - 0.3) / 0.3;
      camera.position.x = 0;
      camera.position.y = 5 - localProgress * 3;
      camera.position.z = 9 - localProgress * 8;
      camera.lookAt(0, 1, 0);
    } else {
      // Inside building transition
      const localProgress = (progress - 0.6) / 0.4;
      camera.position.x = 0;
      camera.position.y = 2 - localProgress * 1;
      camera.position.z = 1 - localProgress * 5;
      camera.lookAt(0, 0, -5);
    }
  });
  
  return null;
};

// Content Panels for inside building
const ContentPanels = ({ scrollProgress }: { scrollProgress: number }) => {
  const panelsVisible = scrollProgress > 0.7;
  
  if (!panelsVisible) return null;
  
  return (
    <group position={[0, 0, -10]}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <Plane args={[4, 3]} position={[-6, 2, 0]}>
          <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
        </Plane>
        <Text
          position={[-6, 2.5, 0.1]}
          fontSize={0.3}
          color="#333"
          anchorX="center"
        >
          Our Services
        </Text>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <Plane args={[4, 3]} position={[6, 2, 0]}>
          <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
        </Plane>
        <Text
          position={[6, 2.5, 0.1]}
          fontSize={0.3}
          color="#333"
          anchorX="center"
        >
          Innovation Hub
        </Text>
      </Float>
      
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.25}>
        <Plane args={[4, 3]} position={[0, 2, -5]}>
          <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
        </Plane>
        <Text
          position={[0, 2.5, -4.9]}
          fontSize={0.3}
          color="#333"
          anchorX="center"
        >
          About Aakam360
        </Text>
      </Float>
    </group>
  );
};

// Main Scene Component
export const ThreeScene = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <Canvas
      camera={{ position: [0, 5, 15], fov: 75 }}
      style={{ background: 'linear-gradient(135deg, #87CEEB 0%, #E0F6FF 100%)' }}
    >
      <Environment preset="city" />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[0, 10, 0]} intensity={0.5} />
      
      {/* 3D Elements */}
      <Building />
      <FloatingLogo />
      <ContentPanels scrollProgress={scrollProgress} />
      
      {/* Camera Controller */}
      <CameraController scrollProgress={scrollProgress} />
      
      {/* Ground */}
      <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <meshStandardMaterial color="#90EE90" />
      </Plane>
    </Canvas>
  );
};
