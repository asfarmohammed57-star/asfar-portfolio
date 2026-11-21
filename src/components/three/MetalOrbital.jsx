import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  Float,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

function GlassSphere() {
  const outer = useRef();
  const inner = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    outer.current.rotation.y = t * 0.12;
    outer.current.rotation.x = Math.sin(t * 0.2) * 0.12;

    inner.current.rotation.y = -t * 0.3;
    inner.current.rotation.z = t * 0.15;
  });

  return (
    <group>
      {/* Outer glass sphere */}
      <mesh ref={outer}>
        <sphereGeometry args={[1.8, 96, 96]} />
        <meshPhysicalMaterial
          color="#a78bfa"
          metalness={0.25}
          roughness={0.08}
          transmission={0.92}
          thickness={1.5}
          ior={1.35}
          transparent
          opacity={0.85}
          envMapIntensity={2}
        />
      </mesh>

      {/* Inner energy core */}
      <mesh ref={inner} scale={0.92}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#6d28d9"
          emissiveIntensity={1.8}
          metalness={0.7}
          roughness={0.2}
          wireframe
        />
      </mesh>

      {/* Inner glowing sphere */}
      <mesh scale={0.65}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.18}
        />
      </mesh>

      <pointLight
        color="#a855f7"
        intensity={18}
        distance={9}
      />

      <pointLight
        color="#38bdf8"
        intensity={10}
        distance={7}
        position={[2, 1, 2]}
      />
    </group>
  );
}

function FloatingObjects() {
  const objects = useMemo(
    () => [
      { position: [-3.5, 1.5, -1], size: 0.35, type: 0 },
      { position: [3.5, 1.2, -1.5], size: 0.45, type: 1 },
      { position: [-3, -1.8, 0], size: 0.3, type: 2 },
      { position: [3.2, -1.5, 0], size: 0.38, type: 0 },
      { position: [0, 3, -2], size: 0.25, type: 1 },
      { position: [0, -3, -1], size: 0.32, type: 2 },
      { position: [-4, 0, -2], size: 0.2, type: 1 },
      { position: [4, 0, -2], size: 0.25, type: 2 },
    ],
    []
  );

  return (
    <>
      {objects.map((obj, i) => (
        <Float
          key={i}
          speed={1.2 + i * 0.1}
          rotationIntensity={1.5}
          floatIntensity={1.5}
        >
          <mesh
            position={obj.position}
            scale={obj.size}
          >
            {obj.type === 0 && (
              <octahedronGeometry args={[1, 0]} />
            )}

            {obj.type === 1 && (
              <icosahedronGeometry args={[1, 0]} />
            )}

            {obj.type === 2 && (
              <torusGeometry args={[0.8, 0.18, 16, 48]} />
            )}

            <meshPhysicalMaterial
              color={i % 2 === 0 ? "#c4b5fd" : "#93c5fd"}
              metalness={0.85}
              roughness={0.12}
              clearcoat={1}
              clearcoatRoughness={0.05}
              envMapIntensity={2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function ParticleField() {
  return (
    <>
      <Sparkles
        count={180}
        scale={[14, 9, 8]}
        size={2.5}
        speed={0.35}
        color="#c4b5fd"
        opacity={0.8}
      />

      <Sparkles
        count={70}
        scale={[10, 7, 6]}
        size={4}
        speed={0.2}
        color="#60a5fa"
        opacity={0.5}
      />
    </>
  );
}

function Scene() {
  const group = useRef();

  useFrame(({ pointer, clock }, delta) => {
    const t = clock.elapsedTime;
    const k = 1 - Math.pow(0.002, delta);

    group.current.rotation.y +=
      (pointer.x * 0.25 + Math.sin(t * 0.2) * 0.08 -
        group.current.rotation.y) * k;

    group.current.rotation.x +=
      (-pointer.y * 0.15 -
        group.current.rotation.x) * k;
  });

  return (
    <>
      <color attach="background" args={["#03030a"]} />

      <fog attach="fog" args={["#03030a", 9, 22]} />

      <ambientLight intensity={0.35} />

      <Environment resolution={256} frames={1}>
        <Lightformer
          form="rect"
          intensity={7}
          color="#ffffff"
          position={[0, 6, 4]}
          scale={[10, 2, 1]}
        />

        <Lightformer
          form="rect"
          intensity={5}
          color="#a78bfa"
          position={[-6, 1, 3]}
          scale={[3, 6, 1]}
        />

        <Lightformer
          form="rect"
          intensity={5}
          color="#38bdf8"
          position={[6, 2, 3]}
          scale={[3, 6, 1]}
        />

        <Lightformer
          form="ring"
          intensity={3}
          color="#c4b5fd"
          position={[0, -4, -3]}
          scale={5}
        />
      </Environment>

      <group ref={group} position={[0, 0, 0]}>
        <GlassSphere />
        <FloatingObjects />
      </group>

      <ParticleField />

      <pointLight
        color="#7c3aed"
        intensity={12}
        position={[-4, 3, 4]}
      />

      <pointLight
        color="#2563eb"
        intensity={10}
        position={[4, -3, 4]}
      />
    </>
  );
}

export default function MetalOrbital() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 11], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}