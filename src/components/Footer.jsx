import { ArrowUp, Mail, MessageCircle, Sparkles } from "lucide-react";
import { navLinks, profile } from "../data/content.js";
import { motion } from "framer-motion";

const whatsappNumber = "917010894798";

export default function Footer() {
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="footer" id="footer">

      <div className="footer__glow" />

      <div className="footer__main">

        <motion.div
          className="footer__intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="footer__eyebrow">
            <Sparkles size={14} />
            THANKS FOR VISITING
          </span>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p>
            Creative ideas deserve thoughtful execution.
            Let's create something meaningful together.
          </p>

          <a href="#contact" className="footer__cta">
            Start a conversation
            <ArrowUp size={17} />
          </a>
        </motion.div>

        <motion.div
          className="footer__identity"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="footer__label">CREATIVE PORTFOLIO</span>

          <div className="footer__big">
            {profile.name}
          </div>

          <p>
            Creative Developer · Photographer · UI/UX Designer
          </p>
        </motion.div>

      </div>

      <div className="footer__divider" />

      <div className="footer__row">

        <div className="footer__copyright">
          <span>
            © {new Date().getFullYear()} {profile.fullName}
          </span>
          <span>Designed with creativity.</span>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact-links">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              title="Email"
            >
              <Mail size={17} />
            </a>
          )}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <MessageCircle size={17} />
          </a>

          <a
            href="#top"
            className="footer__top"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>

      </div>

      <style>{`
        .footer {
          position: relative;
          overflow: hidden;
          padding: 100px 6% 28px;
          background: #080810;
          border-top: 1px solid rgba(167,139,250,.15);
          isolation: isolate;
        }

        .footer__glow {
          position: absolute;
          width: 500px;
          height: 350px;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(110,75,255,.16);
          filter: blur(110px);
          border-radius: 50%;
          z-index: -1;
          pointer-events: none;
        }

        .footer__main {
          max-width: 1200px;
          margin: auto;
        }

        .footer__intro {
          text-align: center;
          margin-bottom: 110px;
        }

        .footer__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #a78bfa;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .footer__intro h2 {
          margin: 25px 0 18px;
          color: #fff;
          font-size: clamp(48px, 8vw, 100px);
          font-weight: 900;
          line-height: .95;
          letter-spacing: -5px;
        }

        .footer__intro h2 span {
          color: #9580ff;
          text-shadow: 0 0 35px rgba(139,92,246,.3);
        }

        .footer__intro p {
          max-width: 460px;
          margin: 25px auto;
          color: #aaa7ba;
          font-size: 14px;
          line-height: 1.8;
        }

        .footer__cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 23px;
          margin-top: 10px;
          border-radius: 40px;
          color: white;
          background: linear-gradient(120deg, #7657ef, #a78bfa);
          font-size: 13px;
          font-weight: 700;
          transition: .3s ease;
        }

        .footer__cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 35px rgba(139,92,246,.35);
        }

        .footer__identity {
          text-align: center;
        }

        .footer__label {
          color: #77728c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 4px;
        }

        .footer__big {
          margin: 25px 0 12px;
          color: transparent;
          font-size: clamp(42px, 10vw, 135px);
          font-weight: 950;
          letter-spacing: -7px;
          line-height: .95;
          white-space: nowrap;
          -webkit-text-stroke: 1px rgba(167,139,250,.55);
          transition: .4s ease;
        }

        .footer__big:hover {
          color: rgba(139,92,246,.12);
          text-shadow: 0 0 45px rgba(139,92,246,.2);
        }

        .footer__identity p {
          color: #89859c;
          font-size: 11px;
          letter-spacing: 1.5px;
        }

        .footer__divider {
          max-width: 1200px;
          height: 1px;
          margin: 65px auto 25px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(167,139,250,.35),
            transparent
          );
        }

        .footer__row {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          flex-wrap: wrap;
        }

        .footer__copyright {
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: #aaa6bb;
          font-size: 11px;
        }

        .footer__copyright span:last-child {
          color: #716d82;
        }

        .footer__links {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
        }

        .footer__links a {
          color: #aaa6bb;
          font-size: 11px;
          transition: color .25s;
        }

        .footer__links a:hover {
          color: #b9a7ff;
        }

        .footer__contact-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer__contact-links > a {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(167,139,250,.2);
          border-radius: 50%;
          color: #d4ccff;
          background: rgba(139,92,246,.08);
          transition: .25s ease;
        }

        .footer__contact-links > a:hover {
          color: white;
          background: #7958ed;
          transform: translateY(-3px);
        }

        @media (max-width: 700px) {
          .footer {
            padding: 75px 6% 25px;
          }

          .footer__intro {
            margin-bottom: 75px;
          }

          .footer__intro h2 {
            letter-spacing: -2px;
          }

          .footer__big {
            font-size: 12vw;
            letter-spacing: -3px;
          }

          .footer__row {
            justify-content: center;
            text-align: center;
          }

          .footer__copyright {
            width: 100%;
            align-items: center;
          }

          .footer__links {
            justify-content: center;
          }
        }
      `}</style>

    </footer>
  );
}