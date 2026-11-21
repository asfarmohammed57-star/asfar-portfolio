export default function Marquee({ items }) {
  const row = (key) => (
    <div className="marquee__item" key={key} aria-hidden={key !== "a"}>
      {items.map((t) => (
        <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 28 }}>
          {t} <b>✦</b>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee">
      <div className="marquee__track">{row("a")}{row("b")}</div>
    </div>
  );
}
