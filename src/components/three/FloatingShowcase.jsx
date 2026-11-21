import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { showcasePanels } from "../../data/content.js";
import { makePanelTexture } from "./panelTexture.js";

function Panel({ data, position, rotation, scale = 1, speed = 1, index }) {
  const mesh = useRef();
  const [tex, setTex] = useState(null);

  useEffect(() => {
    let alive = true, t;
    makePanelTexture(data).then((x) => { t = x; alive ? setTex(x) : x.dispose(); });
    return () => { alive = false; t?.dispose(); };
  }, [data]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.8 * speed + index * 1.7) * 0.14;
  });

  if (!tex) return null;
  return (
    <group position={[position[0], 0, position[2]]} rotation={rotation} scale={scale}>
      <mesh ref={mesh} position={[0, position[1], 0]}>
        <planeGeometry args={[2, 2.7]} />
        <meshBasicMaterial map={tex} transparent toneMapped={false} />
      </mesh>
      {/* soft violet glow behind each card */}
      <mesh position={[0, position[1], -0.05]} scale={1.18}>
        <planeGeometry args={[2, 2.7]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.16} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Rig({ children }) {
  const g = useRef();
  useFrame(({ pointer }, dt) => {
    const k = 1 - Math.pow(0.001, dt);
    g.current.rotation.y += (pointer.x * 0.32 - g.current.rotation.y) * k;
    g.current.rotation.x += (-pointer.y * 0.14 - g.current.rotation.x) * k;
  });
  return <group ref={g}>{children}</group>;
}

function Scene() {
  const { size } = useThree();
  const narrow = size.width < 700;
  const layout = narrow
    ? [
        { p: [0, 0, 0.6], r: [0, 0, 0], s: 1.15 },
        { p: [-1.35, 1.0, -1.8], r: [0, 0.35, 0.05], s: 0.8 },
        { p: [1.35, -1.0, -2.2], r: [0, -0.35, -0.05], s: 0.8 },
        { p: [1.2, 1.5, -3.4], r: [0, -0.2, 0.08], s: 0.7 },
      ]
    : [
        { p: [0, 0, 0.8], r: [0, 0, 0], s: 1.2 },
        { p: [-3.3, 0.5, -0.7], r: [0, 0.5, 0.06], s: 1 },
        { p: [3.3, 0.35, -0.9], r: [0, -0.5, -0.06], s: 1 },
        { p: [-6.1, -0.6, -2.8], r: [0, 0.55, 0.04], s: 0.9 },
      ];
  const orderedPanels = showcasePanels.slice(0, 4);

  return (
    <Rig>
      <Sparkles count={70} scale={[14, 7, 6]} size={2.4} speed={0.35} color="#c4b5fd" opacity={0.8} />
      {orderedPanels.map((d, i) => (
        <Float key={d.id} speed={1.1} rotationIntensity={0.08} floatIntensity={0.25}>
          <Panel data={d} index={i} position={layout[i].p} rotation={layout[i].r} scale={layout[i].s} speed={0.9 + i * 0.12} />
        </Float>
      ))}
    </Rig>
  );
}

export default function FloatingShowcase() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7.5], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ position: "absolute", inset: 0 }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
