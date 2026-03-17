"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface Banner {
  id: number;
  title: string;
  description: string;
  image_url: string;
  cta: string;
}

const AUTOPLAY_DELAY = 4000;
const TRANSITION_TIME = 700;

export default function BannerCarousel() {
  const [slides, setSlides]       = useState<Banner[]>([]);
  const [current, setCurrent]     = useState(0);
  const [previous, setPrevious]   = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused]       = useState(false);
  const [tick, setTick]           = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_BANNER_URL || "")
      .then((r) => r.json())
      .then((json) => {
        const list = (json.data || json) as any[];
        setSlides(list);
      })
      .catch(console.error);
  }, []);

  const go = useCallback((next: number) => {
    if (animating || next === current) return;
    setPrevious(current);
    setAnimating(true);
    setTick((t) => t + 1);
    setTimeout(() => {
      setCurrent(next);
      setPrevious(null);
      setAnimating(false);
    }, TRANSITION_TIME);
  }, [animating, current]);

  const goNext = useCallback(() => {
    if (!slides.length) return;
    go((current + 1) % slides.length);
  }, [slides.length, current, go]);

  useEffect(() => {
    if (paused || !slides.length) return;
    timerRef.current = setInterval(goNext, AUTOPLAY_DELAY);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, slides.length, goNext]);

  if (!slides.length) return null;

  return (
    <>
      <style>{`
        @keyframes zoomBg {
          from { transform: scale(1.0); }
          to   { transform: scale(1.06); }
        }
        @keyframes bgFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes bgFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes textFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fillBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .bg-zoom   { animation: zoomBg ${AUTOPLAY_DELAY + 700}ms ease-out both; }
        .bg-enter  { animation: bgFadeIn  ${TRANSITION_TIME}ms ease both; }
        .bg-leave  { animation: bgFadeOut ${TRANSITION_TIME}ms ease both; }

        .t1 { animation: textFadeIn .5s .05s ease both; }
        .t2 { animation: textFadeIn .5s .15s ease both; }
        .t3 { animation: textFadeIn .5s .25s ease both; }

        .fill-bar {
          animation: fillBar ${AUTOPLAY_DELAY}ms linear both;
          animation-play-state: var(--ps, running);
          transform-origin: left;
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden bg-black select-none"
        style={{
          height: "100svh",
          minHeight: "560px",
          "--ps": paused ? "paused" : "running",
        } as React.CSSProperties}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, i) => {
          const isActive  = i === current;
          const isLeaving = i === previous;
          if (!isActive && !isLeaving) return null;
          return (
            <div
              key={i}
              className={`absolute inset-0 ${isActive ? "bg-enter" : "bg-leave"}`}
              style={{ zIndex: isActive ? 2 : 1 }}
            >
              <div className={`absolute inset-0 ${isActive ? "bg-zoom" : ""}`}>
                <Image
                  unoptimized fill priority={i === 0}
                  src={s.image_url} alt={s.title}
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.42)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 50%)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.46) 0%, transparent 20%)" }} />
            </div>
          );
        })}

        <div
          className="absolute inset-0 z-10 flex items-center justify-center text-center"
          style={{ padding: "clamp(72px,10vw,120px) clamp(16px,4vw,48px) clamp(72px,10vw,110px)" }}
        >
          <div
            key={`${current}-${tick}`}
            className="flex flex-col items-center w-full"
          >
            <h1
              className="t1 text-white font-black leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.6rem,4vw,3.6rem)",
                textShadow: "0 2px 28px rgba(0,0,0,0.6)",
                marginBottom: "clamp(8px,1vw,12px)",
                maxWidth: "90vw",
              }}
            >
              {slides[current].title}
            </h1>

            <div
              className="t1 rounded-full bg-red-500"
              style={{ width: 28, height: 3, marginBottom: "clamp(8px,1vw,12px)" }}
            />

            <p
              className="t2 text-gray-300/80 leading-relaxed"
              style={{
                fontSize: "clamp(0.78rem,1.1vw,0.95rem)",
                maxWidth: "90vw",
                marginBottom: "clamp(18px,2.2vw,28px)",
                textShadow: "0 1px 10px rgba(0,0,0,0.4)",
              }}
            >
              {slides[current].description}
            </p>

            <div className="t3 flex items-center justify-center gap-4 flex-wrap">
              <button
                className="group relative overflow-hidden text-white font-bold transition-all duration-500"
                style={{
                  fontSize: "clamp(0.7rem,0.95vw,0.82rem)",
                  padding: "clamp(10px,1vw,12px) clamp(20px,2.5vw,32px)",
                  background: "linear-gradient(135deg,#dc2626,#9f1010)",
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)",
                  boxShadow: "0 4px 24px rgba(220,38,38,0.36)",
                  letterSpacing: "0.07em",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get A Quote
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M7 1.5l4 4.5-4 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/10 group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button
                className="group flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-300"
                style={{ fontSize: "clamp(0.7rem,0.95vw,0.82rem)", letterSpacing: "0.05em" }}
              >
                <span className="border-b border-white/20 group-hover:border-white/50 pb-px transition-colors duration-300">
                  Explore Products
                </span>
                <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 text-xs">→</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 z-20"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)" }}
        >
          <div
            className="mx-auto flex items-center justify-center gap-4"
            style={{ padding: "0 clamp(20px,5vw,64px) clamp(16px,2.5vw,24px)" }}
          >
            <span className="font-mono tabular-nums text-white/30" style={{ fontSize: "11px" }}>
              <span className="text-white font-bold" style={{ fontSize: "13px" }}>
                {String(current + 1).padStart(2, "0")}
              </span>
              &nbsp;/&nbsp;{String(slides.length).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="relative overflow-hidden rounded-full transition-all duration-500"
                  style={{
                    height: i === current ? "3px" : "2px",
                    width: i === current ? "40px" : "12px",
                    background: "rgba(255,255,255,0.18)",
                  }}
                >
                  {i === current && (
                    <span key={tick} className="fill-bar absolute inset-0 bg-red-500 rounded-full block" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}