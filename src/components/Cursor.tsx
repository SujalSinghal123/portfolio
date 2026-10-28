import { useEffect, useRef } from "react";

/** Custom cursor: only on fine-pointer desktops without reduced-motion. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(hover:hover) and (pointer:fine)").matches || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const el = ref.current!;
    const move = (e: MouseEvent) => {
      el.style.left = "0";
      el.style.top = "0";
      el.style.transform = `translate(${e.clientX - 17}px,${e.clientY - 17}px)`;
      el.classList.toggle("h", !!(e.target as Element).closest?.("a,button,.nd"));
    };
    addEventListener("mousemove", move);
    return () => removeEventListener("mousemove", move);
  }, []);
  return <div id="cur" ref={ref} aria-hidden="true" />;
}
