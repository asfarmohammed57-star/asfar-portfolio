import { useRef } from "react";
import gsap from "gsap";

/** Button/anchor that gently follows the cursor. */
export default function MagneticButton({ as: Tag = "a", className = "", children, ...rest }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.28;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.4;
    gsap.to(ref.current, { x, y, duration: 0.4, ease: "power3.out" });
  };
  const leave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
  return (
    <Tag ref={ref} className={`btn ${className}`} onPointerMove={move} onPointerLeave={leave} {...rest}>
      {children}
    </Tag>
  );
}
