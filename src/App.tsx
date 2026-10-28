import { useEffect, useState } from "react";
import { SquareTerminal } from "lucide-react";
import Cursor from "./components/Cursor";
import Terminal from "./components/Terminal";
import { Nav, Hero, About, Projects, Toolkit, Practice, Experience, ResumeCTA, Contact, Footer } from "./components/sections";

export default function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <Cursor />
      <Nav />
      <main id="top">
        <Hero /><About /><Projects /><Toolkit /><Practice /><Experience /><ResumeCTA /><Contact />
      </main>
      <Footer />
      <button className="tbtn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="term">
        <SquareTerminal size={14} style={{ verticalAlign: "-2px", marginRight: 6 }} />{open ? "CLOSE TERMINAL" : "OPEN TERMINAL"}
      </button>
      <Terminal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
