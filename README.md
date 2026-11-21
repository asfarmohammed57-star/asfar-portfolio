# S. Mohamed Asfar — Cinematic Portfolio

React + Vite · React Three Fiber (Three.js) · GSAP · Framer Motion · Lucide icons.
No paid APIs, no external services, no CDN at runtime (fonts are bundled via Fontsource; 3D lighting is built in code).

## Run it in VS Code

1. Install **Node.js 18+** (https://nodejs.org).
2. Unzip, then in VS Code: **File → Open Folder…** → `asfar-portfolio`.
3. Open the terminal (**Ctrl+`**) and run:

```bash
npm install
npm run dev
```

4. Open the URL it prints (usually http://localhost:5173).

Production build: `npm run build` (output in `dist/`), test it with `npm run preview`.

## Make it yours — one file

Everything editable lives in **`src/data/content.js`**:

- `profile.email` — add your email to turn the contact form into a working mailto link
  (while empty, the form copies the message to the clipboard instead).
- `profile.socials` — e.g. `{ label: "Instagram", href: "https://instagram.com/you" }`.
- `featuredProject` — extend the Apollo Studio summary once you want to say more.
- `photos` — the Photography grid currently uses crops of your portrait so nothing is
  broken or empty. Drop your own shots into `src/assets/`, import them at the top of
  `content.js`, and replace the entries.

## Structure

```
src/
  main.jsx · App.jsx
  data/content.js              all text + media
  styles/global.css            design tokens + every section's styles
  components/
    Intro  Navbar  Hero  About  Skills  Projects  Photography  Contact  Footer
    ui/    Reveal  SectionHeading  MagneticButton  TiltCard  Marquee
    three/ FloatingShowcase (floating 3D project cards) · MetalOrbital (final chrome orbit) · panelTexture
  assets/                      portrait.jpg · portrait-cutout.png (transparent) · photo-*.jpg
```

## Notes

- `portrait-cutout.png` is an automatic background removal of your photo. For a
  cleaner edge, re-cut it in Photoshop and replace the file (same name, transparent PNG).
- The 3D scenes are code-split and only load when you scroll near them.
- Animations respect `prefers-reduced-motion`.
