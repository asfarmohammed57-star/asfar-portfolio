import {
  useCallback,
  useEffect,
  useState,
  Suspense,
  lazy,
} from "react";

import { motion, useScroll, useSpring } from "framer-motion";

import Intro from "./components/Intro.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const MetalOrbital = lazy(() =>
  import("./components/three/MetalOrbital.jsx")
);

function FinalScene() {
  return (
    <section
      className="orbital"
      id="ending"
      aria-label="Final 3D scene"
      style={{
        position: "relative",
        minHeight: "850px",
        height: "100vh",
        overflow: "hidden",
        background: "#03030a",
      }}
    >
      <Suspense
        fallback={
          <div className="orbital__loading">
            Loading 3D scene...
          </div>
        }
      >
        <MetalOrbital />
      </Suspense>

      <div
        className="orbital__over"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "40px 24px 8vh",
          textAlign: "center",
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(3,3,10,0.35) 65%, #03030a 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            width: "100%",
            maxWidth: "950px",
          }}
        >
          <span
            className="eyebrow"
            style={{
              display: "block",
              color: "#a78bfa",
              fontSize: "11px",
              letterSpacing: "4px",
              fontWeight: 700,
              marginBottom: "22px",
            }}
          >
            S. MOHAMED ASFAR · CREATIVE PORTFOLIO
          </span>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(38px, 6.5vw, 88px)",
              lineHeight: 0.98,
              letterSpacing: "-3px",
              fontWeight: 900,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            LET'S BUILD
            <br />
            <em
              style={{
                color: "#9b87ff",
                fontStyle: "normal",
              }}
            >
              WHAT'S NEXT.
            </em>
          </h2>

          <p
            style={{
              color: "#c4c0d2",
              fontSize: "15px",
              lineHeight: 1.7,
              margin: "22px auto 0",
              maxWidth: "500px",
            }}
          >
            Turning imagination into extraordinary
            digital experiences.
          </p>

          <a
            href="#contact"
            className="btn btn--ghost"
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "auto",
              marginTop: "28px",
              padding: "15px 30px",
              borderRadius: "50px",
              border: "1px solid rgba(167,139,250,0.7)",
              background: "rgba(124,58,237,0.2)",
              color: "#ffffff",
              textDecoration: "none",
              backdropFilter: "blur(12px)",
            }}
          >
            Let's connect ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  const handleDone = useCallback(
    () => setIntroDone(true),
    []
  );

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    document.body.classList.toggle(
      "is-locked",
      !introDone
    );

    if (!introDone) {
      window.scrollTo(0, 0);
    }

    return () =>
      document.body.classList.remove("is-locked");
  }, [introDone]);

  return (
    <>
      {!introDone && <Intro onDone={handleDone} />}

      <div className="grain" aria-hidden="true" />

      <motion.div
        className="progress"
        style={{ scaleX }}
      />

      <Navbar ready={introDone} />

      <main>
        <Hero ready={introDone} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <FinalScene />
      </main>

      <Footer />
    </>
  );
}