// ─────────────────────────────────────────────────────────────
//  Everything you see on the site lives here. Edit freely.
//  Nothing in this file is invented: it only contains what you
//  told me. Add more (links, email, project details) as you like.
// ─────────────────────────────────────────────────────────────
import portrait from "../assets/portrait.jpg";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpg";
import photo3 from "../assets/photo-3.jpg";
import photo4 from "../assets/photo-4.jpg";
import photo5 from "../assets/photo-5.jpg";

export const profile = {
  firstLine: "S. Mohamed",
  name: "MOHAMED ASFAR",
  fullName: "S. Mohamed Asfar",
  roles: ["Creative Developer", "Photographer", "UI/UX Designer"],
  education: {
    degree: "B.Com Computer Applications",
    school: "The American College",
  },
  // Add your real email to enable the mailto contact form, e.g. "you@example.com"
  email: "yourrealemail@gmail.com",
  // Add links, e.g. { label: "Instagram", href: "https://instagram.com/yourname" }
  socials: [],
};

export const skills = [
  { name: "Python", icon: "Terminal", group: "Code" },
  { name: "HTML", icon: "Code2", group: "Code" },
  { name: "CSS", icon: "Palette", group: "Code" },
  { name: "Figma", icon: "PenTool", group: "Design" },
  { name: "Adobe Photoshop", icon: "Layers", group: "Design" },
  { name: "Photography", icon: "Camera", group: "Visual" },
  { name: "Tally", icon: "Calculator", group: "Business" },
];

export const featuredProject = {
  title: "Apollo Studio",
  label: "Featured project",
  summary:
    "My featured project — designed and built by S. Mohamed Asfar.",
};

// Floating 3D showcase panels (category cards, not fake projects)

export const showcasePanels = [
  {
    id: "apollo",
    title: "Apollo Studio",
    tag: "Featured",
    accent: ["#7c5cff", "#c084fc"]
  },
  {
    id: "ui",
    title: "UI / UX Design",
    tag: "Design",
    accent: ["#4c1d95", "#8b5cf6"]
  },
  {
    id: "creative",
    title: "Creative Code",
    tag: "Development",
    accent: ["#312e81", "#a78bfa"]
  },
  {
    id: "photo",
    title: "Photography",
    tag: "Visual",
    accent: ["#581c87", "#d8b4fe"]
  },
  {
    id: "photoshop",
    title: "Photo Editing",
    tag: "Adobe Photoshop",
    accent: ["#172554", "#60a5fa"]
  },
  {
    id: "web",
    title: "Web Design",
    tag: "Development",
    accent: ["#164e63", "#67e8f9"]
  }
];


// Add your own photos: drop files in src/assets and add them here.
export const photos = [
  { src: photo1, title: "Portrait Study I", span: "tall" },
  { src: photo3, title: "Studio Light", span: "wide" },
  { src: photo2, title: "Detail", span: "" },
  { src: photo4, title: "Portrait Study II", span: "" },
  { src: photo5, title: "Violet Hour", span: "wide" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
  { id: "ending", label: "Final Scene" },
];
