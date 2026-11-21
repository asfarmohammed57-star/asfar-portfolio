import { CanvasTexture, SRGBColorSpace, LinearFilter } from "three";

const W = 640, H = 864;

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/** Draws a glossy violet card (no external assets, no network). */
export async function makePanelTexture({ title, tag, accent, image }) {
  try { await document.fonts.load('96px "Anton"'); await document.fonts.load('600 24px "Inter Variable"'); } catch {}

  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const ctx = c.getContext("2d");

  ctx.save();
  roundRect(ctx, 6, 6, W - 12, H - 12, 44);
  ctx.clip();

  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, accent[0]); g.addColorStop(1, "#0b0618");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

  if (image) {
    const img = await new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = image; });
    if (img) {
      const s = Math.max(W / img.width, H / img.height);
      ctx.globalAlpha = 0.85;
      ctx.drawImage(img, (W - img.width * s) / 2, (H - img.height * s) / 2, img.width * s, img.height * s);
      ctx.globalAlpha = 1;
    }
  } else {
    const r = ctx.createRadialGradient(W * 0.75, H * 0.25, 10, W * 0.75, H * 0.25, W * 0.9);
    r.addColorStop(0, accent[1] + "cc"); r.addColorStop(1, "transparent");
    ctx.fillStyle = r; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(255,255,255,.12)"; ctx.lineWidth = 2;
    for (let i = 1; i < 6; i++) { ctx.beginPath(); ctx.arc(W * 0.75, H * 0.25, i * 90, 0, Math.PI * 2); ctx.stroke(); }
  }

  const shade = ctx.createLinearGradient(0, H * 0.45, 0, H);
  shade.addColorStop(0, "transparent"); shade.addColorStop(1, "rgba(5,3,12,.92)");
  ctx.fillStyle = shade; ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "rgba(255,255,255,.85)";
  ctx.font = '600 24px "Inter Variable", Inter, sans-serif';
  ctx.textBaseline = "alphabetic";
  ctx.letterSpacing = "6px";
  ctx.fillText(tag.toUpperCase(), 48, H - 150);
  ctx.letterSpacing = "0px";

  ctx.fillStyle = "#fff";
  ctx.font = '110px "Anton", Impact, sans-serif';
  const words = title.toUpperCase().split(" ");
  words.forEach((w, i) => ctx.fillText(w, 48, H - 56 - (words.length - 1 - i) * 100));
  ctx.restore();

  ctx.strokeStyle = "rgba(216,180,254,.55)"; ctx.lineWidth = 3;
  roundRect(ctx, 6, 6, W - 12, H - 12, 44); ctx.stroke();

  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  tex.minFilter = LinearFilter;
  tex.anisotropy = 8;
  return tex;
}
