import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AudioProvider } from "./context/AudioContext.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AudioProvider>
      <App />
    </AudioProvider>
  </StrictMode>
);
