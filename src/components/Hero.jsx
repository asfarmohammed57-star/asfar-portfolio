import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import cutout from "../assets/portrait-cutout.png";
import { profile, featuredProject } from "../data/content.js";
import MagneticButton from "./ui/MagneticButton.jsx";

export default function Hero({ ready }) {
  const root = useRef(null);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero__word", { yPercent: 25, scale: 1.12, opacity: 0, duration: 1.8 }, 0)
        .from(".hero__portrait", { y: 90, opacity: 0, duration: 1.6 }, 0.15)
        .from(".hero__beam", { scaleY: 0, duration: 1.6, stagger: 0.15, transformOrigin: "top" }, 0.2)
        .from(".hero__hello", { opacity: 0, x: -40, duration: 1.1 }, 0.7)
        .from(".hero__name i", { yPercent: 115, duration: 1.2, stagger: 0.12 }, 0.8)
        .from(".hero__role, .hero__cta > *", { opacity: 0, y: 24, duration: 1, stagger: 0.08 }, 1.1)
        .from(".hero__fact", { opacity: 0, x: 40, duration: 1, stagger: 0.12 }, 1.1)
        .from(".hero__scroll", { opacity: 0, duration: 1 }, 1.5)
        .add(() => {
          // scroll parallax is wired after the entrance so the two never fight
          gsap.to(".hero__word", { yPercent: -18, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
          gsap.to(".hero__portrait", { y: 70, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
        });

      // pointer parallax (x only, so it never conflicts with the scroll y)
      const wx = gsap.quickTo(".hero__word", "x", { duration: 1.2, ease: "power3.out" });
      const px = gsap.quickTo(".hero__portrait", "x", { duration: 1, ease: "power3.out" });
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const move = (e) => {
        if (!fine) return;
        const n = e.clientX / window.innerWidth - 0.5;
        wx(n * -40);
        px(n * 18);
      };
      window.addEventListener("pointermove", move);
      return () => window.removeEventListener("pointermove", move);
    }, root);
    return () => ctx.revert();
  }, [ready]);

  const [first, second] = profile.name.split(" ");

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__glow" />
      <div className="hero__beam hero__beam--r" />
      <div className="hero__beam hero__beam--l" />

      <div className="hero__word" aria-hidden="true">PORTFOLIO</div>
      <div className="hero__rim" />
      <div className="hero__portrait">
        <img src={cutout} alt={`Portrait of ${profile.fullName}`} width="850" height="1024" fetchPriority="high" />
      </div>
      <div className="hero__fade" />

      <div className="hero__copy">
        <span className="hero__hello">Hello, I’m</span>
        <h1 className="hero__name" aria-label={profile.name}>
          <span><i>{first}</i></span>
          <span><i>{second}</i></span>
        </h1>
        <p className="hero__role">{profile.roles.join(" · ")}</p>
        <div className="hero__cta">
          <MagneticButton href="#projects" className="btn--primary">View work <ArrowUpRight /></MagneticButton>
        </div>
      </div>

      <div className="hero__side">
        <div className="hero__fact"><small>Degree</small><strong>{profile.education.degree}</strong></div>
        <div className="hero__fact"><small>College</small><strong>{profile.education.school}</strong></div>
        <div className="hero__fact"><small>Featured</small><strong>{featuredProject.title}</strong></div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about">
        Scroll <i /> <ArrowDown size={14} />
      </a>
    </section>
  );
}
