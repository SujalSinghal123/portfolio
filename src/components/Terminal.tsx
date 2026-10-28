import { useEffect, useRef, useState, type FormEvent } from "react";
import { P } from "../data/portfolio";

type Line = { t: string; c?: string };
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const COMMANDS: Record<string, [string, string?]> = {
  help: ["Commands: help, about, projects, skills, contact, clear"],
  about: [`${P.name} — ${P.profile[3][1]}. Focus: full-stack development, DSA, practical software & systems.`, "about"],
  projects: [P.projects.map((p, i) => `${i + 1}) ${p.title}`).join("\n"), "projects"],
  skills: [Object.entries(P.tech).map(([k, v]) => `${k}: ${Object.keys(v).join(", ")}`).join("\n"), "toolkit"],
  contact: [`GitHub: ${P.links.github}\nLinkedIn: ${P.links.linkedin}\nEmail: ${P.email}`, "contact"],
};

export default function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([{ t: "SUJAL.SYS terminal. Type 'help'.", c: "k" }]);
  const [v, setV] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const out = useRef<HTMLDivElement>(null);

  useEffect(() => { if (open) input.current?.focus(); }, [open]);
  useEffect(() => { out.current?.scrollTo(0, out.current.scrollHeight); }, [lines]);

  const run = (e: FormEvent) => {
    e.preventDefault();
    const c = v.trim().toLowerCase();
    setV("");
    if (!c) return;
    if (c === "clear") { setLines([]); return; }
    const r = COMMANDS[c];
    setLines((l) => [...l, { t: "$ " + c, c: "k" }, r ? { t: r[0] } : { t: `Command not found: ${c}. Type 'help'.`, c: "e" }]);
    if (r?.[1]) go(r[1]);
  };

  return (
    <div id="term" className={open ? "o" : ""} role="dialog" aria-label="Terminal" aria-hidden={!open}>
      <div className="th">
        <span className="mono">sujal.sys ~ terminal</span>
        <button onClick={onClose} aria-label="Close terminal" tabIndex={open ? 0 : -1}>CLOSE ✕</button>
      </div>
      <div id="out" ref={out} aria-live="polite">
        {lines.map((l, i) => <div key={i} className={l.c}>{l.t}</div>)}
      </div>
      <form className="tl" onSubmit={run} style={{ display: "flex", maxWidth: "none", marginTop: 0 }}>
        <span>$</span>
        <input id="cmd" ref={input} value={v} onChange={(e) => setV(e.target.value)} aria-label="Terminal command" autoComplete="off" spellCheck={false} tabIndex={open ? 0 : -1} />
      </form>
    </div>
  );
}
