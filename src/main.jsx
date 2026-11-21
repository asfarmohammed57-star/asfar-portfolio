import React from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@fontsource/anton/400.css";
import "@fontsource/mr-dafoe/400.css";
import "@fontsource-variable/inter";
import "./styles/global.css";

import App from "./App.jsx";

gsap.registerPlugin(ScrollTrigger);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
