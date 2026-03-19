import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import logo from "@/assets/logo.png";

/* ── tiny seeded-random for deterministic particle positions ── */
const seed = (s: number) => () => {
  s = (s * 16807) % 2147483647;
  return (s - 1) / 2147483646;
};

/* ── Particle field ── */
const Particles = ({ count = 50 }: { count?: number }) => {
  const particles = useMemo(() => {
    const rng = seed(42);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rng() * 100,
      y: rng() * 100,
      size: rng() * 3 + 1,
      dur: rng() * 6 + 4,
      delay: rng() * 3,
      drift: (rng() - 0.5) * 30,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsl(174 42% 55% / 0.6), hsl(174 42% 40% / 0))`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0.4, 0.8, 0],
            scale: [0, 1, 1.5, 1, 0],
            y: [0, -p.drift, -p.drift * 1.5],
            x: [0, p.drift * 0.5, p.drift],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ── Orbital rings ── */
const OrbitalRing = ({ radius, duration, delay, reverse }: { radius: number; duration: number; delay: number; reverse?: boolean }) => (
  <motion.div
    className="absolute rounded-full border"
    style={{
      width: radius * 2,
      height: radius * 2,
      left: `calc(50% - ${radius}px)`,
      top: `calc(50% - ${radius}px)`,
      borderColor: "hsl(174 42% 40% / 0.08)",
    }}
    initial={{ scale: 0, opacity: 0, rotate: 0 }}
    animate={{
      scale: 1,
      opacity: 1,
      rotate: reverse ? -360 : 360,
    }}
    transition={{
      scale: { duration: 1.2, delay, ease: "easeOut" },
      opacity: { duration: 0.8, delay },
      rotate: { duration, repeat: Infinity, ease: "linear" },
    }}
  >
    {/* orbiting dot */}
    <motion.div
      className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full"
      style={{ background: "hsl(174 42% 50% / 0.5)" }}
    />
  </motion.div>
);

/* ── Glowing pulse behind logo ── */
const GlowPulse = () => (
  <>
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 200,
        height: 200,
        background: "radial-gradient(circle, hsl(174 42% 40% / 0.15), transparent 70%)",
      }}
      animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.15, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 300,
        height: 300,
        background: "radial-gradient(circle, hsl(174 42% 40% / 0.08), transparent 70%)",
      }}
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
  </>
);

/* ── Grid overlay ── */
const GridOverlay = () => (
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `
        linear-gradient(hsl(174 42% 40%) 1px, transparent 1px),
        linear-gradient(90deg, hsl(174 42% 40%) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />
);

/* ── Scanning line ── */
const ScanLine = () => (
  <motion.div
    className="absolute left-0 right-0 h-px"
    style={{
      background: "linear-gradient(90deg, transparent, hsl(174 42% 50% / 0.3), transparent)",
    }}
    initial={{ top: "0%" }}
    animate={{ top: "100%" }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  />
);

/* ── Main loading screen ── */
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "complete">("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("complete");
          setTimeout(onComplete, 600);
          return 100;
        }
        // Organic progress: fast start, slow middle, fast end
        const remaining = 100 - prev;
        const speed = prev < 30 ? 12 : prev < 70 ? 4 : prev < 90 ? 8 : 15;
        return Math.min(prev + Math.random() * speed + 2, 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "hsl(195 30% 10%)" }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Layers */}
      <GridOverlay />
      <ScanLine />
      <Particles count={60} />

      {/* Orbital rings */}
      <OrbitalRing radius={140} duration={20} delay={0.3} />
      <OrbitalRing radius={200} duration={30} delay={0.6} reverse />
      <OrbitalRing radius={260} duration={25} delay={0.9} />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        <GlowPulse />

        {/* Logo with dramatic entrance */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <motion.img
            src={logo}
            alt="Ezee Technologies"
            className="h-16 sm:h-20 w-auto brightness-0 invert drop-shadow-[0_0_30px_hsl(174_42%_40%/0.3)]"
            animate={{
              filter: [
                "brightness(0) invert(1) drop-shadow(0 0 20px hsl(174 42% 40% / 0.2))",
                "brightness(0) invert(1) drop-shadow(0 0 40px hsl(174 42% 40% / 0.5))",
                "brightness(0) invert(1) drop-shadow(0 0 20px hsl(174 42% 40% / 0.2))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Progress section */}
        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Progress bar with glow */}
          <div className="relative w-52 sm:w-72 h-[3px] rounded-full overflow-hidden"
            style={{ background: "hsl(174 42% 40% / 0.1)" }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, hsl(174 42% 50%), hsl(174 42% 60%))",
                boxShadow: "0 0 15px hsl(174 42% 50% / 0.6), 0 0 30px hsl(174 42% 50% / 0.3)",
              }}
            />
            {/* Glowing leading edge */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{
                left: `calc(${Math.min(progress, 100)}% - 6px)`,
                background: "hsl(174 42% 70%)",
                boxShadow: "0 0 10px hsl(174 42% 50%)",
                opacity: progress < 100 ? 1 : 0,
              }}
            />
          </div>

          {/* Percentage */}
          <motion.span
            className="mt-4 text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: "hsl(174 42% 55% / 0.7)" }}
          >
            {Math.round(Math.min(progress, 100))}%
          </motion.span>

          {/* Tagline with staggered reveal */}
          <motion.p
            className="mt-6 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium"
            style={{ color: "hsl(0 0% 100% / 0.3)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Insurance-native digital infrastructure
          </motion.p>
        </motion.div>
      </div>

      {/* Corner accents */}
      {[
        "top-6 left-6",
        "top-6 right-6 rotate-90",
        "bottom-6 left-6 -rotate-90",
        "bottom-6 right-6 rotate-180",
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.8 + i * 0.1 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M0 12V0h12" stroke="hsl(174 42% 50%)" strokeWidth="1" />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LoadingScreen;
