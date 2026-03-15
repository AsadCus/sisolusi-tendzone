"use client";

import { useEffect, useState } from "react";
// import { LazyMotion, domAnimation, m, AnimatePresence } = "framer-motion";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const interval = 18;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const ease = Math.min(100, Math.round((1 - Math.pow(1 - current / steps, 4)) * 100));
      setProgress(ease);
      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => setDone(true), 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {!done && (
          <m.div
            className="fixed inset-0 z-999 flex flex-col items-center justify-center"
            style={{ background: "linear-gradient(135deg, #c41a1a 0%, #a01616 60%, #800f0f 100%)" }}
            exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          >
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: progress < 100 ? 0.80 : 0.35, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="select-none"
              style={{
                fontSize: "clamp(72px, 18vw, 180px)",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                color: "white",
                lineHeight: 1,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              TENDZONE
            </m.div>

            <m.div
              className="mt-12 flex flex-col items-center gap-4 w-full px-8"
              style={{ maxWidth: "380px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span
                className="text-white/60 font-semibold tracking-widest"
                style={{ fontSize: "clamp(13px, 2vw, 15px)", letterSpacing: "0.15em" }}
              >
                {progress}%
              </span>

              <div className="w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
                <m.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.9))",
                    width: `${progress}%`,
                    transition: "width 18ms linear",
                  }}
                />
              </div>

              <m.span
                className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Loading
              </m.span>
            </m.div>

          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}