import { useEffect, useRef } from "react";
import gsap from "gsap";

const WORD = "PORTFOLIO".split("");

/** Cinematic intro: letters rise out of the dark, a light sweep crosses, curtain lifts. */
export default function Intro({ onDone }) {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".intro__word span");
      const counter = { v: 0 };
      const countEl = root.current.querySelector(".intro__count");

      gsap
        .timeline({ onComplete: onDone })
        .to(".intro__glow", { opacity: 1, scale: 1, duration: 1.6, ease: "power3.out" }, 0)
        .fromTo(
          letters,
          { opacity: 0, yPercent: 60, rotateX: -70, filter: "blur(14px)" },
          { opacity: 1, yPercent: 0, rotateX: 0, filter: "blur(0px)", stagger: 0.07, duration: 1.1, ease: "expo.out" },
          0.2
        )
        .fromTo(".intro__sweep", { xPercent: 0 }, { xPercent: 900, duration: 1.5, ease: "power2.inOut" }, 0.9)
        .to(".intro__bar", { scaleX: 1, duration: 2, ease: "power2.inOut" }, 0)
        .to(counter, {
          v: 100, duration: 2, ease: "power2.inOut",
          onUpdate: () => { countEl.textContent = String(Math.round(counter.v)).padStart(3, "0"); },
        }, 0)
        .to(letters, { yPercent: -120, opacity: 0, stagger: 0.04, duration: 0.7, ease: "power3.in" }, 2.3)
        .to(".intro__glow", { opacity: 0, duration: 0.6 }, 2.4)
        .to(root.current, { yPercent: -100, duration: 1, ease: "expo.inOut" }, 2.75);
    }, root);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div className="intro" ref={root} role="status" aria-label="Loading portfolio">
      <div className="intro__glow" style={{ opacity: 0, transform: "scale(0.6)" }} />
      <div className="intro__word" aria-hidden="true">
        {WORD.map((c, i) => <span key={i}>{c}</span>)}
        <div className="intro__sweep" />
      </div>
      <div className="intro__meta">
        <span>S. Mohamed Asfar</span>
        <span className="intro__count">000</span>
      </div>
      <div className="intro__bar" />
    </div>
  );
}
