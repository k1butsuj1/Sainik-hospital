import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function HeartbeatSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 2);
    
    // Pulse effect
    const scale = 1 + Math.sin(time * 2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1, 100, 100]} ref={meshRef}>
        <MeshDistortMaterial
          color="#0A75C2"
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.5}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

function Grid() {
  return (
    <gridHelper 
      args={[20, 20, '#00A896', '#f0f0f0']} 
      position={[0, -2, 0]} 
      rotation={[0, 0, 0]} 
      opacity={0.1}
      transparent
    />
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-white">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <HeartbeatSphere />
        <Grid />
        
        <fog attach="fog" args={['#ffffff', 5, 15]} />
      </Canvas>
    </div>
  );
}
