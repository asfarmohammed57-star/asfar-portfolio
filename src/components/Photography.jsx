import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { photos } from "../data/content.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";

export default function Photography() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="section photo" id="photography">
      <div className="wrap">
        <SectionHeading eyebrow="04 — Photography">
          Through the <em>lens</em>
        </SectionHeading>

        <div className="photo__grid">
          {photos.map((p, i) => (
            <Reveal
              key={p.src}
              as="figure"
              className={`photo ${p.span ? `photo--${p.span}` : ""}`}
              delay={(i % 3) * 0.08}
              y={60}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActive(i)}
              aria-label={`Open ${p.title}`}
            >
              <img src={p.src} alt={p.title} loading="lazy" />
              <figcaption>{p.title} <Maximize2 size={16} /></figcaption>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog" aria-modal="true"
          >
            <button className="lightbox__x" aria-label="Close" onClick={() => setActive(null)}><X /></button>
            <motion.img
              src={photos[active].src} alt={photos[active].title}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
