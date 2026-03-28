"use client";

import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";


interface Stage {
  at: number;
  label: string;
  sub: string;
}


const DURATION_MS = 2600;
const INTERVAL_MS = 20;
const EXIT_DELAY  = 520;

const STAGES: Stage[] = [
  { at: 0,  label: "Initializing",   sub: "Loading resources"   },
  { at: 35, label: "Loading assets",  sub: "Fetching components" },
  { at: 72, label: "Finalizing",      sub: "Preparing interface" },
  { at: 92, label: "Ready",           sub: "Launching app"       },
];

const CORNERS = [
  "top-5 left-5 border-t border-l",
  "top-5 right-5 border-t border-r",
  "bottom-5 left-5 border-b border-l",
  "bottom-5 right-5 border-b border-r",
] as const;


function getStage(p: number): Stage {
  return [...STAGES].reverse().find((s) => p >= s.at)!;
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}


const BLOBS = [
  {
    size: 520,
    style: { top: -140, right: -100 },
    color: "rgba(170,15,15,0.3)",
    animation: "ls-floatA 10s ease-in-out infinite",
  },
  {
    size: 380,
    style: { bottom: -110, left: -80 },
    color: "rgba(140,10,10,0.16)",
    animation: "ls-floatB 13s ease-in-out infinite",
  },
  {
    size: 300,
    style: { bottom: 40, right: 80 },
    color: "rgba(80,80,80,0.07)",
    animation: "ls-floatC 9s ease-in-out infinite",
  },
] as const;


const KEYFRAMES = `
  @keyframes ls-floatA {
    0%,100% { transform: translate(0,0); }
    50%      { transform: translate(-16px,22px); }
  }
  @keyframes ls-floatB {
    0%,100% { transform: translate(0,0); }
    50%      { transform: translate(20px,-16px); }
  }
  @keyframes ls-floatC {
    0%,100% { transform: translate(0,0); }
    50%      { transform: translate(-10px,-20px); }
  }
  @keyframes ls-shimmer {
    from { left: -80%; }
    to   { left: 160%; }
  }
  @keyframes ls-blink {
    0%,100% { opacity: 1; }
    50%      { opacity: 0; }
  }
  @keyframes ls-revealLine {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
`;


export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone]         = useState(false);
  const [show, setShow]       = useState(false); 



  useEffect(() => {
  const hasSeen = localStorage.getItem("hasSeenLoading");

  if (hasSeen) {
    setDone(true); // langsung skip loading
    return;
  }

  setShow(true);

  const steps = DURATION_MS / INTERVAL_MS;
  let current = 0;

  const timer = setInterval(() => {
    current++;
    const p = Math.min(100, Math.round(easeOutQuart(current / steps) * 100));
    setProgress(p);

    if (current >= steps) {
      clearInterval(timer);

      localStorage.setItem("hasSeenLoading", "true"); // simpan flag

      setTimeout(() => setDone(true), EXIT_DELAY);
    }
  }, INTERVAL_MS);

  return () => clearInterval(timer);
}, []);

if (!show) return null;

  const stage = getStage(progress);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {!done && (
          <m.div
            className="fixed inset-0 z-999 flex items-center justify-center overflow-hidden"
            style={{ background: "#0d0d0d" }}
            exit={{ y: "-100%", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
          >
            {BLOBS.map((blob, i) => (
              <div
                key={i}
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: blob.size,
                  height: blob.size,
                  ...blob.style,
                  background: `radial-gradient(circle,${blob.color} 0%,transparent 68%)`,
                  filter: "blur(80px)",
                  animation: blob.animation,
                }}
              />
            ))}

          
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.016) 1px,transparent 1px)," +
                  "linear-gradient(90deg,rgba(255,255,255,0.016) 1px,transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />

         
            {CORNERS.map((cls, i) => (
              <div
                key={i}
                className={`absolute w-4 h-4 ${cls}`}
                style={{ borderColor: "rgba(255,255,255,0.09)" }}
              />
            ))}

           
            <div className="relative z-10 flex flex-col items-center">

             
              <m.p
                className="mb-5.5 font-mono text-[9px] tracking-[0.44em] uppercase"
                style={{ color: "rgba(255,255,255,0.2)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                Tendzone · Est. 2010
              </m.p>

          
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="select-none"
                  style={{
                    fontSize: "clamp(60px, 12vw, 100px)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    color: "#ffffff",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  TENDZONE
                </div>

               
                <div
                  className="mt-2.5 h-0.5 w-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg,#8b0000,#c41a1a,rgba(255,255,255,0.35))",
                    transformOrigin: "left",
                    animation: "ls-revealLine 0.7s 0.5s cubic-bezier(0.22,1,0.36,1) both",
                  }}
                />
              </m.div>

              <m.div
                className="flex items-center gap-1.5 my-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.22 }}
              >
                <span className="w-0.75 h-0.75 rounded-full bg-white/15" />
                <span className="w-0.75 h-0.75 rounded-full bg-red-600/55" />
                <span className="w-0.75 h-0.75 rounded-full bg-white/15" />
              </m.div>

             
              <m.p
                className="font-mono text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "rgba(255,255,255,0.18)" }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Industrial &amp; Commercial Products
              </m.p>
              <m.div
                className="mt-11 w-65 flex flex-col"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
              
                <div className="flex items-end justify-between mb-2.5">
                  <span
                    className="font-mono text-[9px] tracking-[0.2em] uppercase"
                    style={{ color: "rgba(255,255,255,0.18)" }}
                  >
                    {stage.label}
                  </span>
                  <span
                    className="font-mono font-bold leading-none"
                    style={{ fontSize: 30, color: "white", letterSpacing: "-0.02em" }}
                  >
                    {progress}
                    <sup style={{ fontSize: 12, color: "rgba(196,26,26,0.7)", marginLeft: 1, fontWeight: 500 }}>
                      %
                    </sup>
                  </span>
                </div>

                <div
                  className="w-full h-px relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="h-full relative overflow-hidden"
                    style={{
                      width: `${progress}%`,
                      background: "linear-gradient(90deg,#6b0000,#c41a1a,rgba(255,255,255,0.85))",
                      transition: `width ${INTERVAL_MS}ms linear`,
                    }}
                  >
                    <span
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)",
                        animation: "ls-shimmer 1.2s ease-in-out infinite",
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-1.75 mt-2.75">
                  <span
                    className="w-0.75 h-1.75 shrink-0"
                    style={{ background: "#c41a1a", animation: "ls-blink 1s step-end infinite" }}
                  />
                  <span
                    className="font-mono text-[9px] tracking-[0.2em] uppercase"
                    style={{ color: "rgba(255,255,255,0.13)" }}
                  >
                    {stage.sub}
                  </span>
                </div>
              </m.div>
            </div>

            <style>{KEYFRAMES}</style>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}