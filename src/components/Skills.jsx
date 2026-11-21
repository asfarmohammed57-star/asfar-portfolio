
import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Palette,
  Megaphone,
  Code2,
  Calculator,
  Sparkles,
  ArrowUpRight,
  Layers,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    category: "AI & INTELLIGENCE",
    title: "AI Development",
    icon: Brain,
    skills: [
      "AI Development",
      "AI-Assisted Coding",
      "Prompt Engineering",
      "AI Image Generation",
      "AI Video Generation",
    ],
  },
  {
    number: "02",
    category: "CREATIVE & VISUAL",
    title: "Creative Design",
    icon: Palette,
    skills: [
      "Adobe Photoshop",
      "Brand Identity",
      "UI/UX Design",
    ],
  },
  {
    number: "03",
    category: "REACH & GROWTH",
    title: "Digital Marketing",
    icon: Megaphone,
    skills: [
      "Google Ads",
      "Social Media Marketing",
      "Growth Hacking",
      "Content Strategy",
      "Meta Ads",
    ],
  },
  {
    number: "04",
    category: "DESIGN INTO CODE",
    title: "Web Development",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "React",
      "Next.js",
      "GitHub",
      "Framer Motion",
    ],
  },
  {
    number: "05",
    category: "FINANCE & COMPLIANCE",
    title: "Accounting & Taxation",
    icon: Calculator,
    skills: [
      "Accounting",
      "Auditing",
      "Income Tax Filing",
      "GST Filing",
      "Tally",
    ],
  },
  {
    number: "06",
    category: "TOOLS & EXPLORE",
    title: "AI Tools & Platforms",
    icon: Sparkles,
    skills: [
      "Google AI Studio",
      "Gemini",
      "Claude",
      "OpenAI",
      "Google Flow",
    ],
  },
];

export default function Skills() {
  return (
    <section className="liquid-skills" id="skills">
      <div className="liquid-skills__glow liquid-skills__glow--one" />
      <div className="liquid-skills__glow liquid-skills__glow--two" />

      <div className="liquid-skills__container">

        <motion.div
          className="liquid-skills__heading"
          initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="liquid-skills__eyebrow">
            02 — MY EXPERTISE
          </span>

          <h2>
            Skills & <span>Capabilities.</span>
          </h2>

          <p>
            A combination of creative thinking, technology,
            design and digital tools to turn ideas into
            meaningful experiences.
          </p>
        </motion.div>

        <div className="liquid-skills__grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className="liquid-skill-card"
                key={group.number}
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(7px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
              >
                <div className="liquid-skill-card__reflection" />

                <div className="liquid-skill-card__top">
                  <span className="liquid-skill-card__number">
                    {group.number}
                  </span>

                  <Icon
                    className="liquid-skill-card__icon"
                    size={24}
                    strokeWidth={1.6}
                  />

                  <ArrowUpRight
                    className="liquid-skill-card__arrow"
                    size={19}
                  />
                </div>

                <span className="liquid-skill-card__category">
                  {group.category}
                </span>

                <h3>{group.title}</h3>

                <div className="liquid-skill-card__tags">
                  {group.skills.map((skill) => (
                    <span
                      className="liquid-skill-tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="liquid-skills__bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Layers size={16} />
          <span>
            CREATIVITY · TECHNOLOGY · CONTINUOUS LEARNING
          </span>
        </motion.div>

      </div>

      <style>{`
        .liquid-skills {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 115px 6%;
          color: #fff;
          background:
            radial-gradient(
              ellipse at 15% 15%,
              rgba(91, 33, 182, .09),
              transparent 42%
            ),
            #050508;
        }

        .liquid-skills__container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
        }

        .liquid-skills__glow {
          position: absolute;
          z-index: 0;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(125px);
          pointer-events: none;
          opacity: .55;
        }

        .liquid-skills__glow--one {
          top: 8%;
          left: -250px;
          background: rgba(124, 58, 237, .17);
        }

        .liquid-skills__glow--two {
          right: -250px;
          bottom: 0;
          background: rgba(37, 99, 235, .13);
        }

        .liquid-skills__heading {
          max-width: 760px;
          margin-bottom: 55px;
        }

        .liquid-skills__eyebrow {
          color: #a78bfa;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .liquid-skills__heading h2 {
          margin: 18px 0;
          color: #f8f7ff;
          font-size: clamp(38px, 6vw, 76px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .liquid-skills__heading h2 span {
          color: #a78bfa;
        }

        .liquid-skills__heading p {
          max-width: 570px;
          color: #9693a6;
          font-size: 15px;
          line-height: 1.8;
        }

        .liquid-skills__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        /* PREMIUM DARK LIQUID GLASS */
        .liquid-skill-card {
          position: relative;
          isolation: isolate;
          min-width: 0;
          padding: 32px;
          overflow: hidden;
          border-radius: 25px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,.075),
              rgba(255,255,255,.025) 48%,
              rgba(124,58,237,.055)
            );

          border: 1px solid rgba(255,255,255,.15);

          -webkit-backdrop-filter: blur(30px) saturate(155%);
          backdrop-filter: blur(30px) saturate(155%);

          box-shadow:
            inset 0 1px 1px rgba(255,255,255,.16),
            inset 0 -1px 1px rgba(255,255,255,.025),
            0 18px 55px rgba(0,0,0,.32);

          transition:
            border-color .4s ease,
            box-shadow .4s ease,
            background .4s ease;
        }

        .liquid-skill-card::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;

          background:
            radial-gradient(
              circle at 5% 0%,
              rgba(255,255,255,.13),
              transparent 37%
            ),
            linear-gradient(
              115deg,
              transparent 35%,
              rgba(255,255,255,.035) 50%,
              transparent 65%
            );
        }

        .liquid-skill-card::after {
          content: "";
          position: absolute;
          z-index: -1;
          width: 200px;
          height: 200px;
          right: -110px;
          bottom: -130px;
          border-radius: 50%;
          background: rgba(124,58,237,.15);
          filter: blur(65px);
          pointer-events: none;
        }

        .liquid-skill-card:hover {
          border-color: rgba(167,139,250,.48);

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,.095),
              rgba(255,255,255,.035),
              rgba(124,58,237,.09)
            );

          box-shadow:
            inset 0 1px 2px rgba(255,255,255,.2),
            0 22px 60px rgba(91,33,182,.17),
            0 0 22px rgba(139,92,246,.08);
        }

        .liquid-skill-card__reflection {
          position: absolute;
          z-index: -1;
          top: -100px;
          left: -30%;
          width: 65%;
          height: 180px;
          transform: rotate(-25deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.055),
            transparent
          );
          filter: blur(18px);
          pointer-events: none;
        }

        .liquid-skill-card__top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .liquid-skill-card__number {
          color: #b9a7ff;
          font-size: 13px;
          font-weight: 800;
        }

        .liquid-skill-card__icon {
          margin-left: auto;
          color: #b9a7ff;
          filter: drop-shadow(0 0 9px rgba(167,139,250,.4));
        }

        .liquid-skill-card__arrow {
          color: rgba(255,255,255,.5);
          transition: transform .3s ease, color .3s ease;
        }

        .liquid-skill-card:hover .liquid-skill-card__arrow {
          color: #c4b5fd;
          transform: translate(3px, -3px);
        }

        .liquid-skill-card__category {
          color: #a78bfa;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .liquid-skill-card h3 {
          margin: 11px 0 23px;
          color: #f8f7ff;
          font-size: clamp(21px, 2.5vw, 28px);
          font-weight: 850;
          letter-spacing: -.8px;
        }

        .liquid-skill-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        /* DARK FROSTED GLASS TAGS */
        .liquid-skill-tag {
          display: inline-flex;
          align-items: center;
          padding: 10px 15px;
          border-radius: 30px;

          color: #dedbea;
          font-size: 12px;
          font-weight: 500;

          background: linear-gradient(
            145deg,
            rgba(255,255,255,.09),
            rgba(255,255,255,.025)
          );

          border: 1px solid rgba(255,255,255,.15);

          -webkit-backdrop-filter: blur(18px) saturate(150%);
          backdrop-filter: blur(18px) saturate(150%);

          box-shadow:
            inset 0 1px 1px rgba(255,255,255,.12),
            0 5px 15px rgba(0,0,0,.2);

          transition:
            color .3s ease,
            background .3s ease,
            border-color .3s ease,
            transform .3s ease;
        }

        .liquid-skill-tag:hover {
          color: #fff;
          border-color: rgba(167,139,250,.55);
          background: rgba(124,58,237,.19);
          transform: translateY(-3px);
        }

        .liquid-skills__bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 55px;
          color: #817b95;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-align: center;
        }

        .liquid-skills__bottom svg {
          color: #a78bfa;
        }

        @media (max-width: 700px) {
          .liquid-skills {
            padding: 80px 6%;
          }

          .liquid-skills__grid {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .liquid-skill-card {
            padding: 25px;
          }

          .liquid-skills__heading h2 {
            letter-spacing: -2px;
          }

          .liquid-skills__bottom {
            flex-wrap: wrap;
            line-height: 1.8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .liquid-skill-card,
          .liquid-skill-tag {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
