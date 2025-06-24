
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Simple rotating cube
const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, 1, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4a90e2" />
    </mesh>
  );
};

// Simple floating sphere
const FloatingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5 + 3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[3, 3, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#e2a44a" />
    </mesh>
  );
};

// Simple ground plane
const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#90EE90" />
    </mesh>
  );
};

// Camera controller
const CameraController = ({ scrollProgress }: { scrollProgress: number }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    const progress = Math.min(scrollProgress, 1);
    camera.position.z = 10 - progress * 5;
    camera.position.y = 3 - progress * 1;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
};

// Loading fallback
const SceneLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
    <div className="text-white text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p>Loading 3D Scene...</p>
    </div>
  </div>
);

// WebGL fallback
const WebGLFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
    <div className="text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Aakam360</h1>
      <p className="text-xl">Innovation Redefined</p>
      <p className="text-sm mt-4 opacity-80">3D Preview Unavailable</p>
    </div>
  </div>
);

// Main scene component
export const ThreeScene = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 3, 10], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #87CEEB 0%, #E0F6FF 100%)' }}
        fallback={<WebGLFallback />}
      >
        <Suspense fallback={<SceneLoader />}>
          {/* Basic lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* Simple 3D objects */}
          <RotatingCube />
          <FloatingSphere />
          <Ground />
          
          {/* Camera control */}
          <CameraController scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
};
