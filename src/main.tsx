// Polyfill IntersectionObserver para iOS Safari antigo
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  import('intersection-observer');
}

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
