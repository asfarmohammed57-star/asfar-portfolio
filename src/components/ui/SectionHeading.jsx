import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, children }) {
  return (
    <header>
      <Reveal as="span" className="eyebrow" y={16}>{eyebrow}</Reveal>
      <Reveal as="h2" className="h2" delay={0.08}>{children}</Reveal>
    </header>
  );
}
