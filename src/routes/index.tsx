import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import w1Asset from "@/assets/work-1.jpeg.asset.json";
import w2Asset from "@/assets/work-2.jpg.asset.json";
import w3Asset from "@/assets/work-3.jpg.asset.json";
import w4Asset from "@/assets/work-4.jpg.asset.json";
import w5Asset from "@/assets/work-5.jpg.asset.json";
import w6Asset from "@/assets/work-6.jpg.asset.json";
import { accumulateScrollPause, TRANSITION_DURATION_MS } from "@/lib/screen-transition";

const SECTION_AT: Record<number, string> = { 2: "menu", 3: "selected_works", 8: "projects", 9: "about", 10: "hello" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "solynx." },
      { name: "description", content: "solynx. — selected works, projects, about and contact." },
      { property: "og:title", content: "solynx." },
      { property: "og:description", content: "selected works, projects, about and contact." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const DURATION = TRANSITION_DURATION_MS;
const w1 = w1Asset.url;
const w2 = w2Asset.url;
const w3 = w3Asset.url;
const w4 = w4Asset.url;
const w5 = w5Asset.url;
const w6 = w6Asset.url;

const works = [
  { src: w6, title: "thoughts running wild", meta: "acrylic in raw canvas, 20 x 15 cm. 2024", pos: "items-start justify-start", w: "w-[58vw] md:w-[24vw]", mt: "mt-8" },
  { src: w2, title: "from tigers and cats", meta: "acrylic on paper, 2025", pos: "items-end justify-end", w: "w-[70vw] md:w-[32vw]" },
  { src: w3, title: "blah.", meta: "coal and acrylic on paper, 2025", pos: "items-center justify-center md:pr-[32vw]", w: "w-[58vw] md:w-[24vw]" },
  { src: w4, title: "2025", meta: "", pos: "items-center justify-center md:pl-[32vw]", w: "w-[58vw] md:w-[24vw]" },
  { src: w5, title: "precious.", meta: "acrylic on canvas, 50 x 70 cm. 2025", pos: "items-end justify-center", w: "w-[80vw] md:w-[38vw]" },
];

const menu = [
  { n: "01", label: "selected works.", target: 3 },
  { n: "02", label: "projects.", target: 8 },
  { n: "03", label: "about.", target: 9 },
  { n: "04", label: "hello.", target: 10 },
];

function Index() {
  const [index, setIndex] = useState(0);
  const lock = useRef(false);
  const touchY = useRef<number | null>(null);
  const idx = useRef(0);
  const scrollPause = useRef(0);

  const screens: ReactNode[] = [
    <div key="land" className="flex h-full items-center justify-center">
      <h1 className="text-4xl font-light tracking-[0.08em] md:text-6xl">solynx.</h1>
    </div>,
    <div key="reveal" className="flex h-full items-end justify-end p-6 md:p-14">
      <figure className="flex flex-col items-end">
        <img src={w1} alt="in dreams" className="w-[80vw] md:w-[40vw]" />
        <figcaption className="caption mt-4">in dreams. 2024</figcaption>
      </figure>
    </div>,
    <div key="menu" className="flex h-full items-end justify-start p-6 md:p-14">
      <nav className="flex flex-col gap-3">
        {menu.map((m) => (
          <button key={m.n} onClick={() => go(m.target, "menu")} className="group flex items-baseline gap-6 text-left text-2xl font-light tracking-[0.04em] md:text-4xl">
            <span className="caption w-6">{m.n}</span>
            <span className="transition-opacity duration-500 group-hover:opacity-40">{m.label}</span>
          </button>
        ))}
      </nav>
    </div>,
    ...works.map((w, i) => (
      <div key={w.title} className={`flex h-full p-6 md:p-14 ${w.pos}`}>
        <figure className={"mt" in w ? w.mt : ""}>
          <img src={w.src} alt={w.title} className={w.w} loading="lazy" />
          <figcaption className="mt-4 flex justify-between gap-8">
            <span className="caption">{w.title}{w.meta ? ` — ${w.meta}` : ""}</span>
            <span className="caption tabular-nums">{String(i + 1).padStart(2, "0")} | {String(works.length).padStart(2, "0")}</span>
          </figcaption>
        </figure>
      </div>
    )),
    <Section key="projects" title="projects.">
      <ul className="space-y-6">
        {[["2026", "work in progress.", "coming soon", ""], ["2024", "gradients.", "private exhibition (invitational)", "secret location"]].map(([y, t, p, l]) => (
          <li key={t} className="grid grid-cols-[4rem_1fr] gap-4 border-t border-border pt-4">
            <span className="caption">{y}</span>
            <div><p className="text-lg font-light">{t}</p><p className="caption mt-1">{p}</p>{l && <p className="caption mt-1">{l}</p>}</div>
          </li>
        ))}
      </ul>
    </Section>,
    <Section key="about" title="about." sequential>
      <p className="text-lg font-light leading-relaxed">solynx is an abstract artist. surfer. scientist. innovator. — the practice is intuitive and deeply emotional.</p>
      <p className="caption mt-6 leading-relaxed">lives and works between zurich and seignosse.</p>
    </Section>,
    <Section key="hello" title="hello." sequential inlineTitle>
      <div className="space-y-6 text-lg font-light">
        <a href="mailto:hello@solynx.art" onClick={() => window.__lovableEvents?.track?.("project.contact_link_clicked", { link: "email" })} className="hover:opacity-40 transition-opacity">hello@solynx.art</a>
        <div aria-hidden className="h-6" />
        <div><p className="caption">studio</p><p>zurich. seignosse.</p></div>
        <div><p className="caption">elsewhere</p><a href="https://www.instagram.com/solynx.art/" target="_blank" rel="noreferrer" onClick={() => window.__lovableEvents?.track?.("project.contact_link_clicked", { link: "instagram" })} className="hover:opacity-40 transition-opacity">instagram</a></div>
      </div>
    </Section>,
  ];
  const total = screens.length;

  const go = useCallback((i: number, method: "menu" | "scroll" = "scroll") => {
    if (lock.current) return;
    const next = Math.max(0, Math.min(total - 1, i));
    if (next === idx.current) return;
    lock.current = true;
    scrollPause.current = 0;
    idx.current = next;
    setIndex(next);
    const t = window.__lovableEvents?.track;
    if (next >= 3 && next < 3 + works.length) t?.("project.artwork_viewed", { artwork: String(next - 2).padStart(2, "0") });
    const sec = SECTION_AT[next];
    if (sec) t?.("project.section_navigated", { section: sec, method });
    setTimeout(() => (lock.current = false), DURATION);
  }, [total]);

  useEffect(() => {
    const step = (d: number) => go(idx.current + d);
    const scrollStep = (delta: number) => {
      if (lock.current) return;
      const direction = Math.sign(delta);
      if (!direction) return;
      const pause = accumulateScrollPause(scrollPause.current, delta, window.innerHeight);
      scrollPause.current = pause.distance;
      if (!pause.ready) return;
      step(direction);
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1);
      scrollStep(delta);
    };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); step(1); }
      if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); step(-1); }
    };
    const onTS = (e: TouchEvent) => (touchY.current = (e.touches[0]?.clientY ?? 0));
    const onTM = (e: TouchEvent) => {
      if (touchY.current === null) return;
      const d = touchY.current - (e.touches[0]?.clientY ?? 0);
      if (Math.abs(d) > 40) { scrollStep(d); touchY.current = e.touches[0]?.clientY ?? null; }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTS, { passive: true });
    window.addEventListener("touchmove", onTM, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTS);
      window.removeEventListener("touchmove", onTM);
    };
  }, [go]);

  return (
    <main className="fixed inset-0 overflow-hidden overscroll-none bg-background text-foreground">
      {screens.map((s, i) => (
        <section
          key={i}
          aria-hidden={i !== index}
          className="absolute inset-0"
          style={{
            opacity: i === index ? 1 : 0,
            transform: `translateY(${i === index ? 0 : i < index ? "-2vh" : "2vh"})`,
            transition: `opacity ${DURATION}ms cubic-bezier(0.65,0,0.35,1), transform ${DURATION}ms cubic-bezier(0.65,0,0.35,1)`,
            pointerEvents: i === index ? "auto" : "none",
          }}
        >
          {s}
        </section>
      ))}
      {index > 0 && (
        <button onClick={() => go(2, "menu")} className="caption fixed left-6 top-6 md:left-14 md:top-10 hover:opacity-40 transition-opacity">solynx.</button>
      )}
    </main>
  );
}

function Section({ title, children, sequential = false, inlineTitle = false }: { title: string; children: ReactNode; sequential?: boolean; inlineTitle?: boolean }) {
  return (
    <div className={`flex h-full p-6 md:p-14 ${sequential ? "items-start pt-[30vh] md:pt-[30vh]" : "items-center"}`}>
      <div className={`mx-auto grid w-full max-w-5xl items-baseline ${inlineTitle ? "grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-4 md:gap-10" : "gap-10 md:grid-cols-[1fr_2fr]"}`}>
        <h2 className="text-3xl font-light tracking-[0.04em]">{title}</h2>
        <div className="min-w-0 max-w-xl">{children}</div>
      </div>
    </div>
  );
}
