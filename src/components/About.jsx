import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Sparkles,
  Award,
  BrainCircuit,
  Palette,
  ArrowUpRight,
} from "lucide-react";

import portrait from "../assets/portrait.jpg";
import { profile } from "../data/content.js";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const frame = useRef(null);
  const ideaRef = useRef(null);
  const headingRef = useRef(null);
  const credentialsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0.15,
          y: 45,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about__frame img",
        { yPercent: -6, scale: 1.12 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: frame.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      const words = gsap.utils.toArray(".about__idea-word");

      gsap.fromTo(
        words,
        {
          opacity: 0.12,
          y: 45,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ideaRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".credential-card",
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: credentialsRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section about" id="about">
      <div className="wrap">

        {/* MAIN HEADING */}
        <div ref={headingRef} className="about__main-heading">
          <SectionHeading eyebrow="01 — About">
            Code, design <em>&amp; light</em>
          </SectionHeading>
        </div>

        <div className="about__grid">

          {/* PORTRAIT */}
          <Reveal className="about__frame" y={60}>
            <div
              ref={frame}
              style={{ position: "absolute", inset: 0 }}
            >
              <img
                src={portrait}
                alt={profile.fullName}
                loading="lazy"
              />
            </div>

            <span className="about__tag">
              {profile.fullName}
            </span>
          </Reveal>

          {/* ABOUT CONTENT */}
          <div className="about__text">

            <Reveal as="p" delay={0.1}>
              I’m <b>{profile.fullName}</b> — a creative developer,
              photographer and UI/UX designer. I bring code,
              interface design and a photographer’s eye together
              to make digital work that feels considered,
              cinematic and alive.
            </Reveal>

            {/* CREATIVE PROCESS */}
            <div className="about__idea" ref={ideaRef}>
              <span className="about__idea-label">
                MY CREATIVE PROCESS
              </span>

              <h2>
                <span className="about__idea-word">FROM</span>{" "}
                <span className="about__idea-word">IDEA</span>
                <br />
                <span className="about__idea-word about__idea-accent">
                  TO LAUNCH.
                </span>
              </h2>

              <p>
                Turning creative ideas into meaningful digital
                experiences through design, technology and
                imagination.
              </p>
            </div>

            {/* EDUCATION AND DISCIPLINES */}
            <div className="about__cards">

              <Reveal className="glass card" delay={0.15}>
                <small>
                  <GraduationCap size={13} />
                  Education
                </small>

                <h3>{profile.education.degree}</h3>
                <p>{profile.education.school}</p>
              </Reveal>

              <Reveal className="glass card" delay={0.25}>
                <small>
                  <Sparkles size={13} />
                  Disciplines
                </small>

                <ul>
                  {profile.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </Reveal>

            </div>

          </div>
        </div>

        {/* EDUCATION & CERTIFICATIONS */}
        <div
          className="about__credentials"
          ref={credentialsRef}
        >
          <div className="credentials-heading">
            <span className="about__idea-label">
              02 — LEARNING JOURNEY
            </span>

            <h2>
              Education &amp; <em>Certifications.</em>
            </h2>

            <p>
              Building knowledge through continuous learning,
              practical experience and creative exploration.
            </p>
          </div>

          <div className="credentials-grid">

            {/* AI TRAINING */}
            <div className="credential-card">
              <div className="credential-top">
                <BrainCircuit size={25} />
                <span>IN PROGRESS</span>
              </div>

              <h3>Advanced AI Systems Engineering</h3>

              <p>
                Generative AI, Large Language Models,
                Prompt Engineering, AI Agents and
                Agentic Workflows.
              </p>

              <div className="credential-bottom">
                <span>AI &amp; INTELLIGENT SYSTEMS</span>
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* FIGMA */}
            <div className="credential-card">
              <div className="credential-top">
                <Palette size={25} />
                <span>COMPLETED</span>
              </div>

              <h3>Figma UI/UX Design</h3>

              <p>
                Online learning in interface design,
                visual design principles and digital
                product experiences.
              </p>

              <div className="credential-bottom">
                <span>DESIGN &amp; UI/UX</span>
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* SELF LEARNING */}
            <div className="credential-card">
              <div className="credential-top">
                <Award size={25} />
                <span>ONGOING</span>
              </div>

              <h3>Independent Technical Learning</h3>

              <p>
                Practical learning in Python, web development,
                creative technologies and digital marketing.
              </p>

              <div className="credential-bottom">
                <span>DEVELOPMENT &amp; TECHNOLOGY</span>
                <ArrowUpRight size={18} />
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`

        .about__main-heading {
          will-change: transform, opacity, filter;
        }

        .about__idea {
          position: relative;
          margin: 55px 0 45px;
          padding: 25px 0;
          overflow: hidden;
        }

        .about__idea-label {
          display: block;
          margin-bottom: 20px;
          color: #9584ff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .about__idea h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(42px, 6vw, 82px);
          font-weight: 950;
          line-height: 0.95;
          letter-spacing: -4px;
        }

        .about__idea-word {
          display: inline-block;
          will-change: transform, opacity, filter;
        }

        .about__idea-accent {
          color: #9180ff;
        }

        .about__idea p {
          max-width: 430px;
          margin-top: 24px;
          color: #aaa8b9;
          font-size: 14px;
          line-height: 1.8;
        }

        /* EDUCATION AND CERTIFICATIONS */

        .about__credentials {
          margin-top: 130px;
          padding-top: 65px;
          border-top: 1px solid rgba(255,255,255,.1);
        }

        .credentials-heading {
          max-width: 750px;
          margin-bottom: 45px;
        }

        .credentials-heading h2 {
          font-size: clamp(35px, 5vw, 65px);
          line-height: 1.05;
          letter-spacing: -2px;
          color: #fff;
          margin: 0 0 18px;
        }

        .credentials-heading h2 em {
          color: #9584ff;
          font-style: normal;
        }

        .credentials-heading p {
          max-width: 480px;
          color: #aaa8b9;
          font-size: 14px;
          line-height: 1.8;
        }

        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .credential-card {
          position: relative;
          min-height: 270px;
          padding: 28px;
          overflow: hidden;
          border: 1px solid rgba(149,132,255,.2);
          border-radius: 20px;
          background:
            linear-gradient(
              145deg,
              rgba(120,95,220,.13),
              rgba(15,14,27,.75)
            );
          backdrop-filter: blur(18px);
          transition:
            transform .4s ease,
            border-color .4s ease,
            background .4s ease;
        }

        .credential-card:hover {
          transform: translateY(-8px);
          border-color: rgba(149,132,255,.65);
          background:
            linear-gradient(
              145deg,
              rgba(120,95,220,.22),
              rgba(15,14,27,.9)
            );
        }

        .credential-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #a995ff;
          margin-bottom: 35px;
        }

        .credential-top span {
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 800;
          padding: 7px 10px;
          border: 1px solid rgba(149,132,255,.35);
          border-radius: 30px;
        }

        .credential-card h3 {
          color: #fff;
          font-size: 19px;
          line-height: 1.35;
          margin-bottom: 12px;
        }

        .credential-card p {
          color: #aaa8b9;
          font-size: 12px;
          line-height: 1.8;
        }

        .credential-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 28px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,.1);
          color: #a995ff;
        }

        .credential-bottom span {
          font-size: 9px;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .credentials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .about__idea h2 {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .about__credentials {
            margin-top: 85px;
            padding-top: 45px;
          }

          .credentials-grid {
            grid-template-columns: 1fr;
          }

          .credential-card {
            min-height: 240px;
          }
        }

      `}</style>
    </section>
  );
}