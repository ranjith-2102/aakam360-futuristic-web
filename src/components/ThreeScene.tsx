
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Box, Plane } from '@react-three/drei';
import * as THREE from 'three';

// Simple Building Component
const Building = () => {
  const buildingRef = useRef<THREE.Group>(null);
  
  return (
    <group ref={buildingRef} position={[0, -2, 0]}>
      {/* Main building structure */}
      <Box args={[8, 6, 12]} position={[0, 3, 0]}>
        <meshStandardMaterial color="#f0f0f0" />
      </Box>
      
      {/* Ground floor */}
      <Box args={[12, 1, 14]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#d0d0d0" />
      </Box>
      
      {/* Front door */}
      <Box args={[1.5, 2.5, 0.2]} position={[0, 1.25, 6.1]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
    </group>
  );
};

// Simple Floating Logo Component
const FloatingLogo = () => {
  const logoRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.3 + 2;
    }
  });
  
  return (
    <group ref={logoRef} position={[0, 2, 8]}>
      <Text
        fontSize={1.5}
        color="#4a90e2"
        anchorX="center"
        anchorY="middle"
      >
        Aakam360
      </Text>
    </group>
  );
};

// Simple Camera Controller
const CameraController = ({ scrollProgress }: { scrollProgress: number }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    const progress = Math.min(scrollProgress, 1);
    
    // Simple camera movement
    camera.position.z = 15 - progress * 10;
    camera.position.y = 5 - progress * 2;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
};

// Fallback component
const WebGLFallback = () => (
  <div className="webgl-fallback">
    <div>
      <h1 className="text-4xl font-bold mb-4 text-white">Aakam360</h1>
      <p className="text-xl text-white">Innovation Redefined</p>
      <p className="text-sm mt-4 text-white/80">Your browser doesn't support WebGL or there was an error loading the 3D scene.</p>
    </div>
  </div>
);

// Loading component
const SceneLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
    <div className="text-white text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p>Loading 3D Scene...</p>
    </div>
  </div>
);

// Main Scene Component
export const ThreeScene = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 5, 15], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #87CEEB 0%, #E0F6FF 100%)' }}
        onCreated={({ gl }) => {
          try {
            gl.setClearColor('#87CEEB');
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          } catch (error) {
            console.log('WebGL setup error:', error);
          }
        }}
        fallback={<WebGLFallback />}
      >
        <Suspense fallback={<SceneLoader />}>
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={0.8}
          />
          
          {/* 3D Elements */}
          <Building />
          <FloatingLogo />
          
          {/* Camera Controller */}
          <CameraController scrollProgress={scrollProgress} />
          
          {/* Ground */}
          <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
            <meshStandardMaterial color="#90EE90" />
          </Plane>
        </Suspense>
      </Canvas>
    </div>
  );
};
