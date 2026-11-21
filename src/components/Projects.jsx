import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Code2,
  Palette,
  Monitor,
  Sparkles,
  Aperture,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Apollo Studio",
    category: "FEATURED PROJECT",
    description: "Photography studio and digital presence.",
    tag: "PHOTOGRAPHY",
    accent: "#d6aa65",
    type: "apollo",
    featured: true,
  },
  {
    number: "02",
    title: "UI / UX Design",
    category: "DESIGN",
    description: "Creative interfaces and user experiences.",
    tag: "FIGMA",
    accent: "#8271ff",
    type: "ui",
  },
  {
    number: "03",
    title: "Creative Development",
    category: "DEVELOPMENT",
    description: "Interactive websites and digital experiences.",
    tag: "WEB DEVELOPMENT",
    accent: "#45a9ff",
    type: "code",
  },
  {
    number: "04",
    title: "Photography",
    category: "VISUAL STORYTELLING",
    description: "Portraits, studio photography and visual stories.",
    tag: "PHOTOGRAPHY",
    accent: "#d78bce",
    type: "photo",
  },
  {
    number: "05",
    title: "Creative Editing",
    category: "ADOBE PHOTOSHOP",
    description: "Photo manipulation, retouching and compositions.",
    tag: "PHOTOSHOP",
    accent: "#238bdc",
    type: "editing",
  },
  {
    number: "06",
    title: "Web Experiences",
    category: "DIGITAL EXPERIENCE",
    description: "Modern layouts and responsive web concepts.",
    tag: "WEB DESIGN",
    accent: "#48c6c1",
    type: "web",
  },
];

function ProjectVisual({ project }) {
  return (
    <div
      className={`project-visual project-visual--${project.type}`}
      style={{ "--accent": project.accent }}
    >
      <div className="project-visual__grid" />

      <span className="project-visual__number">
        PROJECT / {project.number}
      </span>

      {project.type === "apollo" && (
        <div className="apollo-preview">
          <div className="apollo-preview__top">
            <Aperture size={22} />
            <span>APOLLO STUDIO</span>
            <span className="apollo-preview__menu">MENU +</span>
          </div>

          <div className="apollo-preview__main">
            <span className="apollo-preview__eyebrow">
              CAPTURING MOMENTS
            </span>

            <h3>
              YOUR STORY.
              <br />
              <span>OUR FRAME.</span>
            </h3>

            <div className="apollo-preview__line" />

            <span className="apollo-preview__bottom">
              PHOTOGRAPHY · CREATIVITY · ART
            </span>
          </div>

          <div className="apollo-preview__circle">
            <Camera size={42} strokeWidth={1} />
          </div>

          <span className="apollo-preview__concept">
            CONCEPT PREVIEW
          </span>
        </div>
      )}

      {project.type === "ui" && (
        <div className="ui-preview">
          <div className="ui-preview__window">
            <div className="ui-preview__bar">
              <i />
              <i />
              <i />
              <span>DESIGN SYSTEM</span>
            </div>

            <div className="ui-preview__body">
              <div className="ui-preview__sidebar">
                <b />
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="ui-preview__content">
                <div className="ui-preview__hero">
                  <span>DESIGN YOUR WORLD</span>
                </div>

                <div className="ui-preview__blocks">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="ui-preview__footer" />
              </div>
            </div>
          </div>

          <span className="ui-preview__label">
            INTERFACE / EXPERIENCE
          </span>
        </div>
      )}

      {project.type === "code" && (
        <div className="code-preview">
          <div className="code-preview__orb">
            <Code2 size={72} strokeWidth={1} />
          </div>

          <div className="code-preview__window">
            <span>01</span>
            <code>const create = () =&gt; {"{"}</code>
            <span>02</span>
            <code> return innovation;</code>
            <span>03</span>
            <code>{"}"}</code>
          </div>

          <span className="code-preview__label">
            BUILD · CREATE · DEPLOY
          </span>
        </div>
      )}

      {project.type === "photo" && (
        <div className="photo-preview">
          <div className="photo-preview__frame">
            <div className="photo-preview__sun" />
            <div className="photo-preview__subject">
              <Camera size={50} strokeWidth={1} />
            </div>
            <span>VISUAL STORIES</span>
          </div>

          <div className="photo-preview__mini photo-preview__mini--one" />
          <div className="photo-preview__mini photo-preview__mini--two" />
        </div>
      )}

      {project.type === "editing" && (
        <div className="editing-preview">
          <div className="editing-preview__panel">
            <div className="editing-preview__image">
              <Sparkles size={55} strokeWidth={1} />
            </div>

            <div className="editing-preview__tools">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="editing-preview__timeline">
              <i />
              <i />
              <i />
            </div>
          </div>

          <span className="editing-preview__label">
            CREATIVE COMPOSITING
          </span>
        </div>
      )}

      {project.type === "web" && (
        <div className="web-preview">
          <div className="web-preview__screen">
            <div className="web-preview__nav">
              <b>STUDIO.</b>
              <span>HOME</span>
              <span>WORK</span>
              <span>ABOUT</span>
            </div>

            <div className="web-preview__content">
              <span>DIGITAL EXPERIENCES</span>
              <h3>
                DESIGN
                <br />
                THE FUTURE.
              </h3>

              <div className="web-preview__button">
                EXPLORE MORE ↗
              </div>
            </div>
          </div>

          <span className="web-preview__label">
            RESPONSIVE WEB CONCEPT
          </span>
        </div>
      )}

      <span className="project-visual__tag">
        {project.tag}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card ${
        project.featured ? "project-card--featured" : ""
      }`}
      initial={{
        opacity: 0,
        y: 55,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
    >
      <div className="project-card__glass" />

      <ProjectVisual project={project} />

      <div className="project-card__info">
        <div>
          <span className="project-card__category">
            {project.category}
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>
        </div>

        <span className="project-card__arrow">
          <ArrowUpRight size={21} />
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <>
      <section className="projects-section" id="projects">
        <div className="projects-section__glow" />

        <div className="projects-container">

          <motion.header
            className="projects-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="projects-heading__eyebrow">
              03 — SELECTED PROJECTS
            </span>

            <h2>
              SELECTED
              <br />
              <span>WORK.</span>
            </h2>

            <p>
              A collection of creativity, design and
              technology — turning ideas into digital
              experiences.
            </p>
          </motion.header>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={index}
              />
            ))}
          </div>

          <div className="projects-bottom">
            <Palette size={17} />
            <span>
              CREATIVITY · DESIGN · DEVELOPMENT
            </span>
            <Monitor size={17} />
          </div>

        </div>
      </section>

      <style>{`

        .projects-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 120px 6%;
          color: #fff;
          background:
            radial-gradient(
              ellipse at 50% 35%,
              rgba(100,65,190,.10),
              transparent 55%
            ),
            #050508;
        }

        .projects-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
        }

        .projects-section__glow {
          position: absolute;
          top: 35%;
          left: 50%;
          width: 550px;
          height: 550px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(103,58,183,.08);
          filter: blur(130px);
          pointer-events: none;
        }

        .projects-heading {
          max-width: 760px;
          margin-bottom: 60px;
        }

        .projects-heading__eyebrow {
          color: #a78bfa;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .projects-heading h2 {
          margin: 20px 0;
          color: #fff;
          font-size: clamp(58px, 9vw, 110px);
          line-height: .88;
          font-weight: 950;
          letter-spacing: -5px;
        }

        .projects-heading h2 span {
          color: #9580ff;
        }

        .projects-heading p {
          max-width: 520px;
          color: #9995a9;
          font-size: 15px;
          line-height: 1.8;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
          perspective: 1200px;
        }

        .project-card {
          position: relative;
          isolation: isolate;
          min-width: 0;
          overflow: hidden;
          padding: 12px;
          border-radius: 23px;
          border: 1px solid rgba(255,255,255,.13);

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.075),
              rgba(255,255,255,.018)
            );

          -webkit-backdrop-filter: blur(25px);
          backdrop-filter: blur(25px);

          box-shadow:
            inset 0 1px 1px rgba(255,255,255,.12),
            0 20px 60px rgba(0,0,0,.28);

          transition:
            border-color .4s ease,
            box-shadow .4s ease;
        }

        .project-card:hover {
          border-color: rgba(167,139,250,.5);
          box-shadow:
            inset 0 1px 2px rgba(255,255,255,.2),
            0 25px 70px rgba(90,50,180,.17);
        }

        .project-card--featured {
          grid-column: span 2;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          align-items: center;
          gap: 28px;
          padding: 16px;
        }

        .project-visual {
          position: relative;
          isolation: isolate;
          min-width: 0;
          height: 285px;
          overflow: hidden;
          border-radius: 15px;
          background:
            radial-gradient(
              circle at 50% 45%,
              color-mix(in srgb, var(--accent), transparent 80%),
              transparent 65%
            ),
            #0b0b14;
        }

        .project-card--featured .project-visual {
          height: 360px;
        }

        .project-visual__grid {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .16;
          background-image:
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px);
          background-size: 35px 35px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .project-visual__number {
          position: absolute;
          top: 18px;
          left: 20px;
          color: rgba(255,255,255,.65);
          font-size: 10px;
          letter-spacing: 2px;
        }

        .project-visual__tag {
          position: absolute;
          right: 18px;
          bottom: 17px;
          color: rgba(255,255,255,.7);
          font-size: 9px;
          letter-spacing: 2px;
        }

        /* APOLLO STUDIO */

        .apollo-preview {
          position: absolute;
          inset: 0;
          padding: 30px 7%;
          overflow: hidden;
          color: #e6d3ae;
          background:
            radial-gradient(circle at 70% 60%, rgba(180,130,65,.20), transparent 40%),
            linear-gradient(135deg, #17120c, #050505);
        }

        .apollo-preview__top {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(214,170,101,.25);
          font-size: 11px;
          letter-spacing: 2px;
        }

        .apollo-preview__menu {
          margin-left: auto;
          font-size: 9px;
        }

        .apollo-preview__main {
          position: relative;
          z-index: 2;
          margin-top: 55px;
        }

        .apollo-preview__eyebrow {
          font-size: 9px;
          letter-spacing: 3px;
          color: #b89a70;
        }

        .apollo-preview__main h3 {
          margin: 14px 0;
          font-size: clamp(28px, 4vw, 53px);
          line-height: .98;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .apollo-preview__main h3 span {
          color: #c69c5b;
        }

        .apollo-preview__line {
          width: 65px;
          height: 2px;
          margin-top: 23px;
          background: #c69c5b;
        }

        .apollo-preview__bottom {
          display: block;
          margin-top: 18px;
          color: #9c8c73;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .apollo-preview__circle {
          position: absolute;
          top: 50%;
          right: 10%;
          display: grid;
          place-items: center;
          width: 175px;
          height: 175px;
          transform: translateY(-35%);
          border: 1px solid rgba(214,170,101,.5);
          border-radius: 50%;
          color: #d6aa65;
          background: radial-gradient(circle, rgba(214,170,101,.13), transparent 70%);
          box-shadow: 0 0 70px rgba(214,170,101,.12);
        }

        .apollo-preview__concept {
          position: absolute;
          right: 18px;
          bottom: 18px;
          color: rgba(255,255,255,.35);
          font-size: 8px;
          letter-spacing: 2px;
        }

        /* UI DESIGN */

        .ui-preview {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 30px;
        }

        .ui-preview__window {
          width: 82%;
          height: 75%;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 12px;
          background: rgba(18,18,35,.85);
          box-shadow: 0 20px 50px rgba(0,0,0,.4);
        }

        .ui-preview__bar {
          display: flex;
          align-items: center;
          gap: 5px;
          height: 30px;
          padding: 0 10px;
          background: rgba(255,255,255,.08);
        }

        .ui-preview__bar i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #a78bfa;
        }

        .ui-preview__bar span {
          margin-left: auto;
          color: #a8a2bf;
          font-size: 7px;
          letter-spacing: 1px;
        }

        .ui-preview__body {
          display: flex;
          height: calc(100% - 30px);
        }

        .ui-preview__sidebar {
          display: flex;
          flex-direction: column;
          gap: 13px;
          width: 24%;
          padding: 15px 9px;
          border-right: 1px solid rgba(255,255,255,.1);
        }

        .ui-preview__sidebar i,
        .ui-preview__sidebar b {
          height: 5px;
          border-radius: 5px;
          background: rgba(167,139,250,.6);
        }

        .ui-preview__content {
          flex: 1;
          padding: 15px;
        }

        .ui-preview__hero {
          display: grid;
          place-items: center;
          height: 52%;
          border-radius: 7px;
          background: linear-gradient(135deg, #6250bd, #171a36);
          color: #fff;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .ui-preview__blocks {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }

        .ui-preview__blocks i {
          flex: 1;
          height: 35px;
          border-radius: 5px;
          background: rgba(255,255,255,.10);
        }

        .ui-preview__footer {
          width: 65%;
          height: 5px;
          margin-top: 12px;
          border-radius: 5px;
          background: rgba(255,255,255,.16);
        }

        .ui-preview__label,
        .code-preview__label,
        .editing-preview__label,
        .web-preview__label {
          position: absolute;
          bottom: 16px;
          color: rgba(255,255,255,.55);
          font-size: 8px;
          letter-spacing: 2px;
        }

        /* CODE */

        .code-preview {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
        }

        .code-preview__orb {
          display: grid;
          place-items: center;
          width: 150px;
          height: 150px;
          border: 1px solid rgba(69,169,255,.55);
          border-radius: 50%;
          color: #78bdff;
          background: radial-gradient(circle, rgba(69,169,255,.20), transparent 70%);
          box-shadow: 0 0 65px rgba(69,169,255,.17);
        }

        .code-preview__window {
          position: absolute;
          right: 9%;
          bottom: 22%;
          display: grid;
          grid-template-columns: 20px 1fr;
          gap: 8px;
          padding: 13px;
          border: 1px solid rgba(255,255,255,.17);
          border-radius: 9px;
          background: rgba(8,10,20,.85);
          font-size: 8px;
        }

        .code-preview__window span {
          color: #6da9ff;
        }

        .code-preview__window code {
          color: #c5c5e8;
        }

        /* PHOTOGRAPHY */

        .photo-preview {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
        }

        .photo-preview__frame {
          position: relative;
          display: grid;
          place-items: center;
          width: 175px;
          height: 205px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.35);
          background: linear-gradient(145deg, #59384f, #15101e);
          box-shadow: 0 20px 50px rgba(0,0,0,.45);
        }

        .photo-preview__sun {
          position: absolute;
          top: 22px;
          right: 20px;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #e7b8ca;
          filter: blur(1px);
        }

        .photo-preview__subject {
          z-index: 2;
          display: grid;
          place-items: center;
          width: 100px;
          height: 125px;
          margin-top: 60px;
          border-radius: 50% 50% 10% 10%;
          color: #f2d6e7;
          background: linear-gradient(#9a6689, #241a35);
        }

        .photo-preview__frame > span {
          position: absolute;
          bottom: 13px;
          color: #fff;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .photo-preview__mini {
          position: absolute;
          width: 55px;
          height: 75px;
          border: 1px solid rgba(255,255,255,.35);
          background: linear-gradient(145deg, #77536e, #191526);
        }

        .photo-preview__mini--one {
          left: 13%;
          top: 25%;
          transform: rotate(-12deg);
        }

        .photo-preview__mini--two {
          right: 13%;
          bottom: 22%;
          transform: rotate(12deg);
        }

        /* PHOTOSHOP */

        .editing-preview {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
        }

        .editing-preview__panel {
          width: 75%;
          height: 70%;
          padding: 12px;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 12px;
          background: rgba(12,17,30,.85);
          box-shadow: 0 20px 45px rgba(0,0,0,.4);
        }

        .editing-preview__image {
          display: grid;
          place-items: center;
          height: 68%;
          border-radius: 7px;
          color: #8dcaff;
          background: radial-gradient(circle at 60% 35%, #287db4, #101c42 65%, #080b1a);
        }

        .editing-preview__tools {
          display: flex;
          gap: 8px;
          margin-top: 9px;
        }

        .editing-preview__tools span {
          width: 14px;
          height: 14px;
          border-radius: 3px;
          background: #3289c5;
        }

        .editing-preview__timeline {
          display: flex;
          gap: 5px;
          margin-top: 9px;
        }

        .editing-preview__timeline i {
          flex: 1;
          height: 4px;
          border-radius: 4px;
          background: rgba(141,202,255,.5);
        }

        /* WEB DESIGN */

        .web-preview {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
        }

        .web-preview__screen {
          width: 83%;
          height: 76%;
          padding: 14px;
          border: 1px solid rgba(255,255,255,.22);
          border-radius: 10px;
          background: linear-gradient(145deg, #10282c, #080d17);
          box-shadow: 0 20px 50px rgba(0,0,0,.4);
        }

        .web-preview__nav {
          display: flex;
          align-items: center;
          gap: 13px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,.13);
          color: #b7e7e2;
          font-size: 6px;
        }

        .web-preview__nav b {
          margin-right: auto;
          font-size: 10px;
        }

        .web-preview__content {
          padding: 25px 8px;
        }

        .web-preview__content > span {
          color: #72cfc6;
          font-size: 7px;
          letter-spacing: 2px;
        }

        .web-preview__content h3 {
          margin: 10px 0;
          font-size: clamp(22px, 3vw, 37px);
          line-height: .95;
          letter-spacing: -1px;
        }

        .web-preview__button {
          display: inline-block;
          margin-top: 10px;
          padding: 7px 12px;
          border: 1px solid rgba(114,207,198,.5);
          border-radius: 20px;
          color: #a9e5df;
          font-size: 7px;
        }

        /* PROJECT INFO */

        .project-card__info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 22px 12px 13px;
        }

        .project-card--featured .project-card__info {
          padding: 25px;
        }

        .project-card__category {
          color: #a78bfa;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .project-card__info h3 {
          margin: 10px 0 8px;
          color: #f8f7ff;
          font-size: clamp(20px, 2.5vw, 29px);
          font-weight: 850;
          letter-spacing: -.8px;
        }

        .project-card__info p {
          margin: 0;
          color: #9693a6;
          font-size: 13px;
          line-height: 1.7;
        }

        .project-card__arrow {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(167,139,250,.35);
          border-radius: 50%;
          color: #b9a7ff;
          transition: .3s ease;
        }

        .project-card:hover .project-card__arrow {
          color: #fff;
          background: rgba(124,58,237,.3);
          transform: rotate(45deg);
        }

        .projects-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-top: 60px;
          color: #817b95;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .projects-bottom svg {
          color: #a78bfa;
        }

        @media (max-width: 800px) {
          .projects-section {
            padding: 85px 5%;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-card--featured {
            grid-column: span 1;
            display: block;
          }

          .project-card--featured .project-visual {
            height: 285px;
          }

          .project-card--featured .project-card__info {
            padding: 22px 12px 13px;
          }

          .projects-heading h2 {
            letter-spacing: -3px;
          }
        }

        @media (max-width: 480px) {
          .project-visual {
            height: 245px;
          }

          .project-card--featured .project-visual {
            height: 260px;
          }

          .apollo-preview__circle {
            width: 100px;
            height: 100px;
            right: 5%;
          }

          .apollo-preview__main h3 {
            font-size: 32px;
          }

          .projects-bottom {
            flex-wrap: wrap;
            font-size: 8px;
            line-height: 1.8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .project-card__arrow {
            transition: none;
          }
        }

      `}</style>
    </>
  );
}