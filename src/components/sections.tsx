import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { P } from "../data/portfolio";
import Reveal from "./Reveal";
import Html from "./Html";
import { CORE_SVG, MOCKS } from "./visuals";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const Out = ({ href, children, primary }: { href: string; children: string; primary?: boolean }) => (
  <a className={"btn" + (primary ? " p" : "")} href={href} {...ext}>{children} <ArrowUpRight size={14} /></a>
);
const Label = ({ n, children }: { n: string; children: string }) => <Reveal><p className="lab">{n} / {children}</p></Reveal>;

export function Nav() {
  return (
    <nav aria-label="Main">
      <div className="w">
        <a className="logo" href="#top">SUJAL<b>.SYS</b></a>
        <ul>
          <li><a href="#top">[INDEX]</a></li><li><a href="#projects">[PROJECTS]</a></li>
          <li><a href="#about">[ABOUT]</a></li><li><a href="#contact">[CONTACT]</a></li>
        </ul>
      </div>
    </nav>
  );
}

export function ResumeBtn({ primary }: { primary?: boolean }) {
  const [note, setNote] = useState("");
  if (P.resumeUrl)
    return <a className={"btn" + (primary ? " p" : "")} href={P.resumeUrl} download {...ext}>Download resume <ArrowUpRight size={14} /></a>;
  return (
    <>
      <button className={"btn" + (primary ? " p" : "")} aria-disabled="true" onClick={() => setNote("Resume PDF not added yet — set resumeUrl in src/data/portfolio.ts")}>Download resume</button>
      {note && <span className="mono" role="status">{note}</span>}
    </>
  );
}

export function Hero() {
  const core = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const m = (e: MouseEvent) => {
      const x = (e.clientX / innerWidth - 0.5) * 2, y = (e.clientY / innerHeight - 0.5) * 2;
      if (core.current) core.current.style.transform = `translate(${x * 14}px,${y * 14}px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    };
    addEventListener("mousemove", m);
    return () => removeEventListener("mousemove", m);
  }, []);
  return (
    <section id="hero">
      <div className="w hg">
        <div>
          <p className="mono">Independent Developer / India / 2026</p>
          <h1 aria-label="I turn complexity into code."><span><i>I TURN</i></span><span><i>COMPLEXITY</i></span><span><i>INTO CODE.</i></span></h1>
          <p className="sub">I’m Sujal Singhal — a full-stack developer and CSE student who enjoys solving challenging problems and building software that works beyond the demo.</p>
          <div className="cta"><a className="btn p" href="#projects">Explore my work ↗</a><ResumeBtn /></div>
          <p className="st mono">Open to software engineering internships</p>
        </div>
        <div id="core" ref={core} aria-hidden="true">
          <Html html={CORE_SVG} />
          <p className="mono" style={{ textAlign: "center", marginTop: 6 }}>THE CORE</p>
        </div>
      </div>
      <div className="scroll mono">Scroll</div>
    </section>
  );
}

export function About() {
  const [note, setNote] = useState("Hover or focus a node.");
  return (
    <section id="about">
      <div className="w">
        <Label n="01">THE HUMAN</Label>
        <Reveal><h2>Not just writing code.<br />Understanding systems.</h2></Reveal>
        <div className="ab">
          <Reveal><p className="in">I’m a Computer Science Engineering student graduating in 2027. I enjoy building full-stack applications, exploring how software systems work, and improving my problem-solving skills through consistent coding practice.</p></Reveal>
          <Reveal>
            <div className="prof">{P.profile.map(([k, v]) => <div key={k}><span className="mono">{k}</span><b>{v}</b></div>)}</div>
            <svg id="dia" viewBox="0 0 400 190" role="group" aria-label="Diagram connecting three interests">
              <g stroke="#24242e"><line x1="200" y1="45" x2="85" y2="140" /><line x1="200" y1="45" x2="315" y2="140" /><line x1="85" y1="140" x2="315" y2="140" /></g>
              {P.diagram.map((n) => (
                <g key={n.l} className="n" tabIndex={0} onMouseEnter={() => setNote(n.t)} onFocus={() => setNote(n.t)}>
                  <circle cx={n.x} cy={n.y} r={24} fill="#0e0e13" stroke="#c9ccd6" />
                  <text x={n.x} y={n.y + 4} textAnchor="middle">{n.l}</text>
                </g>
              ))}
            </svg>
            <p id="dnote" aria-live="polite">{note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" style={{ paddingBottom: 0 }}>
      <div className="w"><Label n="02">SELECTED WORK</Label><Reveal><h2>Built to solve.<br />Made to work.</h2></Reveal></div>
      {P.projects.map((p, i) => (
        <article key={p.title} className={"pj" + (i % 2 ? " rev" : "")}>
          <div className="w pg">
            <Reveal className="pt">
              <p className="mono">{p.cat}</p>
              <h3>{p.title}</h3>
              <p>{p.line}</p>
              <h4>Problem</h4><p>{p.problem}</p>
              <h4>Capabilities</h4>
              <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="tg">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
              <div className="acts">
                {p.live && <Out primary href={p.live}>Live site</Out>}
                <a className={"btn" + (p.live ? "" : " p")} href={p.github} {...ext}>GitHub <ArrowUpRight size={14} /></a>
              </div>
            </Reveal>
            <Reveal><Html html={MOCKS[p.mock]} /></Reveal>
          </div>
        </article>
      ))}
      <div className="w">
        <Reveal>
          <p className="mono" style={{ marginTop: 50 }}>More builds (listed on resume)</p>
          <div className="more">{P.more.map((m) => <div key={m.title}><span className="mono">{m.stack}</span><h3>{m.title}</h3><p>{m.text}</p></div>)}</div>
        </Reveal>
      </div>
      <div style={{ height: "clamp(70px,11vw,150px)" }} />
    </section>
  );
}

export function Toolkit() {
  const [sel, setSel] = useState<{ g: string; n: string } | null>(null);
  return (
    <section id="toolkit">
      <div className="w">
        <Label n="03">TOOLKIT</Label>
        <Reveal><h2>Tools are useful.<br />Knowing why matters.</h2></Reveal>
        <div className="tk">
          <Reveal>
            {Object.entries(P.tech).map(([g, items]) => (
              <div className="grp" key={g}>
                <p className="mono">{g}</p>
                <div className="nodes">
                  {Object.keys(items).map((n) => {
                    const pick = () => setSel({ g, n });
                    return <button key={n} className={"nd" + (sel?.n === n && sel.g === g ? " on" : "")} onMouseEnter={pick} onFocus={pick} onClick={pick}>{n}</button>;
                  })}
                </div>
              </div>
            ))}
          </Reveal>
          <div id="tip" aria-live="polite">
            {sel ? (<><p className="mono">{sel.g}</p><h3>{sel.n}</h3><p>{P.tech[sel.g][sel.n]}</p></>) : (<><p className="mono">Select a node</p><h3>—</h3><p>Hover, focus or tap any technology to see how it fits into my work. No fake skill percentages here.</p></>)}
          </div>
        </div>
      </div>
    </section>
  );
}

const CELLS = Array.from({ length: 182 }, (_, i) => {
  const v = Math.abs((Math.sin(i * 12.9898) * 43758.5453) % 1);
  return v > 0.8 ? "a3" : v > 0.6 ? "a2" : v > 0.4 ? "a1" : "";
});

export function Practice() {
  return (
    <section id="practice">
      <div className="w">
        <Label n="04">PRACTICE</Label>
        <Reveal><h2>Small improvements.<br />Compounded daily.</h2></Reveal>
        <Reveal><div className="pr">{P.stats.map(([b, t]) => <div key={t}><b>{b}</b>{t}</div>)}</div></Reveal>
        <div className="hm" aria-hidden="true">{CELLS.map((c, i) => <i key={i} className={c} />)}</div>
        <p className="mono">Decorative pattern — not real contribution data. See live profiles below.</p>
        <Reveal>
          <ul className="ach">{P.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          <div className="lk">
            <Out href={P.links.leetcode}>LeetCode</Out><Out href={P.links.hackerrank}>HackerRank</Out>
            <Out href={P.links.gfg}>GeeksforGeeks</Out><Out href={P.links.github}>GitHub</Out>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <div className="w">
        <Label n="05">EXPERIENCE</Label>
        <Reveal><h2>Real work.<br />Clear impact.</h2></Reveal>
        <Reveal>
          <div className="tm">
            {P.experience.map((e) => (
              <div key={e.org}>
                <span className="mono">{e.dates}</span>
                <h3>{e.org}</h3>
                <p className="mono" style={{ color: "var(--sv)" }}>{e.role}</p>
                <p>{e.text}</p>
                <div className="tg">{e.stack.map((s) => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ResumeCTA() {
  return (
    <section id="resume">
      <div className="w">
        <Label n="06">RESUME</Label>
        <Reveal><p className="big">Let’s build something<br /><em>worth shipping.</em></p></Reveal>
        <Reveal><p className="sub" style={{ margin: "26px 0" }}>Interested in my work? Explore the projects, review my experience, or get in touch.</p></Reveal>
        <Reveal><div className="cta"><ResumeBtn primary /><Out href={P.links.github}>View GitHub</Out><Out href={P.links.linkedin}>Connect on LinkedIn</Out></div></Reveal>
      </div>
    </section>
  );
}

type Errs = { name?: string; email?: string; message?: string };

export function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState<Errs>({});
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; t: string } | null>(null);
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const er: Errs = {};
    if (f.name.trim().length < 2) er.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Enter a valid email address.";
    if (f.message.trim().length < 10) er.message = "Message should be at least 10 characters.";
    setErr(er);
    if (Object.keys(er).length) {
      document.getElementById("f-" + Object.keys(er)[0])?.focus();
      return;
    }
    if (!P.formEndpoint) {
      setStatus({ ok: false, t: "The form is not connected to a submission service yet, so nothing was sent. Please email me directly or use LinkedIn." });
      return;
    }
    setBusy(true);
    try {
      const r = await fetch(P.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(f) });
      if (!r.ok) throw new Error("bad status");
      setStatus({ ok: true, t: "Message sent. Thank you!" });
      setF({ name: "", email: "", message: "" });
    } catch {
      setStatus({ ok: false, t: "Could not send the message. Please try again or email me directly." });
    }
    setBusy(false);
  };

  return (
    <section id="contact">
      <div className="w">
        <Label n="07">CONTACT</Label>
        <Reveal><p className="big">Got an interesting<br /><em>problem?</em></p></Reveal>
        <Reveal><p className="sub" style={{ marginTop: 24 }}>I’m interested in software engineering opportunities, challenging projects, and conversations about building better software.</p></Reveal>
        <form noValidate onSubmit={submit}>
          <label>Name<input id="f-name" value={f.name} onChange={set("name")} autoComplete="name" aria-invalid={!!err.name} aria-describedby="e-name" /><span className="er" id="e-name">{err.name}</span></label>
          <label>Email<input id="f-email" type="email" value={f.email} onChange={set("email")} autoComplete="email" aria-invalid={!!err.email} aria-describedby="e-email" /><span className="er" id="e-email">{err.email}</span></label>
          <label>Message<textarea id="f-message" rows={5} value={f.message} onChange={set("message")} aria-invalid={!!err.message} aria-describedby="e-message" /><span className="er" id="e-message">{err.message}</span></label>
          <div><button className="btn p" type="submit" disabled={busy}>{busy ? "Sending…" : "Send message"}</button></div>
          <p id="fs" role="status" style={{ color: status ? (status.ok ? "var(--ac)" : "#ffb74d") : undefined }}>{status?.t}</p>
        </form>
        <div className="lk">
          <a className="btn" href={`mailto:${P.email}`}>{P.email}</a>
          <Out href={P.links.github}>GitHub</Out><Out href={P.links.linkedin}>LinkedIn</Out>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return <footer><p className="mono">Built with curiosity. Refined through code.</p></footer>;
}
