
import { Suspense, lazy, useState } from "react";
import {
  Send,
  Mail,
  GraduationCap,
  CheckCircle2,
  Copy,
  MessageCircle,
  Check,
} from "lucide-react";

import { profile } from "../data/content.js";
import Reveal from "./ui/Reveal.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";

const MetalOrbital = lazy(() => import("./three/MetalOrbital.jsx"));

// Replace this with your WhatsApp number.
// Include country code 91, without + or spaces.
const whatsappNumber = "917010894798";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("info");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (!profile.email?.trim()) {
      setStatus("Please configure your email first.");
      setStatusType("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setStatus("Email copied to clipboard!");
      setStatusType("success");

      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus("Unable to copy email. Please copy it manually.");
      setStatusType("error");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!profile.email?.trim()) {
      setStatus("Configure your email in src/data/content.js.");
      setStatusType("error");
      return;
    }

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;

    const mailto =
      `mailto:${profile.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setStatus("Your email app is opening...");
    setStatusType("success");
    form.reset();
  };

  const whatsappReady = /^\d{10,15}$/.test(whatsappNumber) &&
    !whatsappNumber.includes("X");

  const whatsappLink = whatsappReady
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hello Asfar! I visited your portfolio and would like to connect."
      )}`
    : null;

  return (
    <section className="section contact" id="contact">

      <div className="wrap">
        <SectionHeading eyebrow="05 — Contact">
          Get in <em>touch</em>
        </SectionHeading>
      </div>

      <div className="orbital">
        <Suspense fallback={null}>
          <MetalOrbital />
        </Suspense>

        <div className="orbital__over">
          <Reveal>
            <h2>
              Let’s create
              <em>something bold</em>
            </h2>

            <p>
              Interfaces, imagery and code — I’d love to hear
              about your idea.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="wrap">
        <div className="contact__grid">

          {/* Contact information */}
          <div className="contact__info">

            <Reveal className="glass card">
              <small>
                <GraduationCap
                  size={14}
                  style={{ display: "inline", marginRight: 8 }}
                />
                EDUCATION
              </small>

              <h3>{profile.education.school}</h3>
              <p>{profile.education.degree}</p>
            </Reveal>

            {/* Email card */}
            {profile.email && (
              <Reveal className="glass card" delay={0.08}>
                <small>
                  <Mail
                    size={14}
                    style={{ display: "inline", marginRight: 8 }}
                  />
                  EMAIL
                </small>

                <a
                  className="contact__email-link"
                  href={`mailto:${profile.email}`}
                >
                  <h3>{profile.email}</h3>
                </a>

                <button
                  type="button"
                  className="contact__copy"
                  onClick={copyEmail}
                >
                  {copied ? (
                    <Check size={15} />
                  ) : (
                    <Copy size={15} />
                  )}
                  {copied ? "Copied" : "Copy email"}
                </button>
              </Reveal>
            )}

            {/* WhatsApp card */}
            <Reveal className="glass card" delay={0.14}>
              <small>
                <MessageCircle
                  size={14}
                  style={{ display: "inline", marginRight: 8 }}
                />
                WHATSAPP
              </small>

              <h3>Let's connect directly.</h3>
              <p>Available for conversations and project enquiries.</p>

              {whatsappLink ? (
                <a
                  className="contact__whatsapp"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              ) : (
                <p className="contact__setup">
                  Add your WhatsApp number in Contact.jsx to activate this link.
                </p>
              )}
            </Reveal>

            {/* Social links */}
            {profile.socials?.map((social, index) => (
              <Reveal
                key={social.href || social.label}
                className="glass card"
                delay={0.2 + index * 0.06}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>{social.label}</h3>
                </a>
              </Reveal>
            ))}

          </div>

          {/* Enquiry form */}
          <Reveal
            as="form"
            className="glass contact__form"
            onSubmit={onSubmit}
            delay={0.1}
          >
            <div className="contact__form-heading">
              <small>01 / PROJECT ENQUIRY</small>

              <h2>Tell me about your idea.</h2>

              <p>
                Fill in the details below and let's start a
                conversation.
              </p>
            </div>

            <div className="field__row">

              <div className="field">
                <label htmlFor="c-name">YOUR NAME</label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="c-email">EMAIL ADDRESS</label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

            </div>

            <div className="field">
              <label htmlFor="c-msg">YOUR MESSAGE</label>
              <textarea
                id="c-msg"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <div className="contact__submit">
              <button className="btn btn--primary" type="submit">
                Send enquiry <Send size={17} />
              </button>

              {status && (
                <span
                  className={`toast contact-status contact-status--${statusType}`}
                  role="status"
                >
                  {statusType === "success" && (
                    <CheckCircle2 size={15} />
                  )}
                  {status}
                </span>
              )}
            </div>

          </Reveal>
        </div>
      </div>

      <style>{`
        .contact__form {
          position: relative;
          overflow: hidden;
        }

        .contact__form-heading {
          margin-bottom: 30px;
        }

        .contact__form-heading small {
          color: #a78bfa;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .contact__form-heading h2 {
          margin-top: 12px;
          font-size: clamp(25px, 3vw, 38px);
          line-height: 1.1;
        }

        .contact__form-heading p {
          margin-top: 10px;
          color: #aaa4bd;
          font-size: 13px;
        }

        .contact__form .field {
          min-width: 0;
        }

        .contact__form input,
        .contact__form textarea {
          width: 100%;
          color: #fff;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(196,181,253,.18);
          border-radius: 12px;
          padding: 15px 16px;
          outline: none;
          font: inherit;
          transition: border-color .25s, background .25s;
        }

        .contact__form input:focus,
        .contact__form textarea:focus {
          border-color: rgba(167,139,250,.75);
          background: rgba(139,92,246,.07);
        }

        .contact__form input::placeholder,
        .contact__form textarea::placeholder {
          color: #777185;
        }

        .contact__form textarea {
          resize: vertical;
          min-height: 130px;
        }

        .contact__submit {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 22px;
        }

        .contact-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
        }

        .contact-status--success {
          color: #a7f3d0;
        }

        .contact-status--error {
          color: #fca5a5;
        }

        .contact__info a {
          transition: color .25s;
        }

        .contact__info a:hover {
          color: #c4b5fd;
        }

        .contact__email-link {
          display: block;
          overflow-wrap: anywhere;
        }

        .contact__copy,
        .contact__whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 16px;
          padding: 10px 15px;
          border: 1px solid rgba(196,181,253,.25);
          border-radius: 30px;
          color: #eeeaff;
          background: rgba(139,92,246,.12);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: .25s ease;
        }

        .contact__copy:hover,
        .contact__whatsapp:hover {
          background: rgba(139,92,246,.3);
          border-color: #a78bfa;
          transform: translateY(-2px);
        }

        .contact__setup {
          margin-top: 12px;
          color: #aaa4bd;
          font-size: 12px;
        }

        @media (max-width: 650px) {
          .contact__submit {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

    </section>
  );
}
