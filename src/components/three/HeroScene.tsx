import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { SceneFallback } from './SceneFallback';

// 3D Cyber Core & Orbital Structures (Optimized for Light Mode)
const CyberCore: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const satellitesRef = useRef<THREE.Group>(null);

  // Smooth lerp mouse coordinates
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      // Clamped normalized pointer: -0.4 to 0.4
      const x = ((e.clientX / window.innerWidth) - 0.5) * 0.6;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 0.6;
      targetRotation.current = { x: -y, y: x };
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x * 0.8 + Math.sin(time * 0.5) * 0.05,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y * 0.8 + time * 0.2,
        0.05
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.25;
      coreRef.current.rotation.z = time * 0.2;
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.y = -time * 0.35;
      innerMeshRef.current.rotation.x = -time * 0.15;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.4) * 0.2;
      ring1Ref.current.rotation.y = time * 0.4;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -Math.PI / 4 + Math.cos(time * 0.3) * 0.2;
      ring2Ref.current.rotation.z = -time * 0.35;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = Math.PI / 2 + Math.sin(time * 0.5) * 0.15;
      ring3Ref.current.rotation.x = time * 0.2;
    }

    if (satellitesRef.current) {
      satellitesRef.current.rotation.y = time * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Outer Crystalline / Chrome Icosahedron Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshPhysicalMaterial
          color="#E0E7FF"
          emissive="#2563EB"
          emissiveIntensity={0.15}
          roughness={0.18}
          metalness={0.92}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          flatShading={true}
        />
      </mesh>

      {/* Wireframe Hexagonal Outer Shield */}
      <mesh>
        <icosahedronGeometry args={[1.56, 1]} />
        <meshStandardMaterial
          color="#0284C7"
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Internal Luminous Plasma Sphere */}
      <mesh ref={innerMeshRef}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#1D4ED8"
          emissive="#1D4ED8"
          emissiveIntensity={1.0}
          roughness={0.25}
          metalness={0.6}
        />
      </mesh>

      {/* Primary Equatorial Quantum Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.3, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#0284C7"
          emissive="#0284C7"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Secondary Orbital Ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.7, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#1D4ED8"
          emissive="#1D4ED8"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Tertiary Outer Gyro Ring */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.05, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#0D9488"
          emissive="#0D9488"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting Satellite Tech Crystals */}
      <group ref={satellitesRef}>
        <mesh position={[2.5, 0.4, 0]}>
          <octahedronGeometry args={[0.18]} />
          <meshStandardMaterial
            color="#0284C7"
            emissive="#0284C7"
            emissiveIntensity={0.7}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[-2.3, -0.6, 1.2]}>
          <octahedronGeometry args={[0.14]} />
          <meshStandardMaterial
            color="#1D4ED8"
            emissive="#1D4ED8"
            emissiveIntensity={0.7}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0.8, 2.4, -0.8]}>
          <octahedronGeometry args={[0.12]} />
          <meshStandardMaterial
            color="#0D9488"
            emissive="#0D9488"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
};

// Ambient Floating Particle Constellation
const AmbientParticles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 180;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorPalette = [
      new THREE.Color('#1D4ED8'),
      new THREE.Color('#0284C7'),
      new THREE.Color('#0D9488'),
      new THREE.Color('#64748B')
    ];

    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors={true}
        transparent={true}
        opacity={0.85}
        sizeAttenuation={true}
      />
    </points>
  );
};

export const HeroScene: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      setHasWebGL(gl);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return <SceneFallback />;
  }

  return (
    <div 
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
          style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}
        >
          {/* Studio Lighting System */}
          <ambientLight intensity={1.1} />
          <directionalLight position={[10, 10, 5]} intensity={2.0} color="#0284C7" />
          <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#1D4ED8" />
          <pointLight position={[0, 0, 0]} intensity={1.8} color="#2563EB" distance={10} />
          <spotLight position={[5, 8, 4]} intensity={2.2} angle={0.6} penumbra={1} color="#FFFFFF" />

          <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
            <CyberCore />
          </Float>

          <AmbientParticles />
        </Canvas>
      </Suspense>

      {/* Floating Ambient Glow Base */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          width: '65%',
          height: '25%',
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.12) 0%, rgba(2, 132, 199, 0.08) 40%, transparent 75%)',
          filter: 'blur(36px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
    </div>
  );
};
export default HeroScene;
