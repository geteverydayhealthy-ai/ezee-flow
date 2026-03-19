import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import logo from "@/assets/logo.png";

/* ── seeded-random for deterministic particles ── */
const seed = (s: number) => () => {
  s = (s * 16807) % 2147483647;
  return (s - 1) / 2147483646;
};

/* ── Particle field (reduced on mobile) ── */
const Particles = ({ count = 40 }: { count?: number }) => {
  const particles = useMemo(() => {
    const rng = seed(42);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rng() * 100,
      y: rng() * 100,
      size: rng() * 3 + 1,
      dur: rng() * 6 + 4,
      delay: rng() * 3,
      drift: (rng() - 0.5) * 20,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full will-change-transform"
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

/* ── Orbital rings — responsive via vmin percentages ── */
const OrbitalRing = ({
  sizeVmin,
  duration,
  delay,
  reverse,
}: {
  sizeVmin: number;
  duration: number;
  delay: number;
  reverse?: boolean;
}) => (
  <motion.div
    className="absolute rounded-full border pointer-events-none will-change-transform"
    style={{
      width: `${sizeVmin}vmin`,
      height: `${sizeVmin}vmin`,
      left: `calc(50% - ${sizeVmin / 2}vmin)`,
      top: `calc(50% - ${sizeVmin / 2}vmin)`,
      borderColor: "hsl(174 42% 40% / 0.08)",
    }}
    initial={{ scale: 0, opacity: 0, rotate: 0 }}
    animate={{ scale: 1, opacity: 1, rotate: reverse ? -360 : 360 }}
    transition={{
      scale: { duration: 1.2, delay, ease: "easeOut" },
      opacity: { duration: 0.8, delay },
      rotate: { duration, repeat: Infinity, ease: "linear" },
    }}
  >
    <motion.div
      className="absolute -top-1 left-1/2 -ml-1 w-2 h-2 rounded-full"
      style={{ background: "hsl(174 42% 50% / 0.5)" }}
    />
  </motion.div>
);

/* ── Glowing pulse — responsive ── */
const GlowPulse = () => (
  <>
    <motion.div
      className="absolute rounded-full w-[40vmin] h-[40vmin] max-w-[200px] max-h-[200px]"
      style={{
        background: "radial-gradient(circle, hsl(174 42% 40% / 0.15), transparent 70%)",
      }}
      animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.15, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute rounded-full w-[60vmin] h-[60vmin] max-w-[300px] max-h-[300px]"
      style={{
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
    className="absolute inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(hsl(174 42% 40%) 1px, transparent 1px),
        linear-gradient(90deg, hsl(174 42% 40%) 1px, transparent 1px)
      `,
      backgroundSize: "clamp(30px, 8vw, 60px) clamp(30px, 8vw, 60px)",
    }}
  />
);

/* ── Scanning line ── */
const ScanLine = () => (
  <motion.div
    className="absolute left-0 right-0 h-px pointer-events-none"
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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        const speed = prev < 30 ? 12 : prev < 70 ? 4 : prev < 90 ? 8 : 15;
        return Math.min(prev + Math.random() * speed + 2, 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background: "hsl(195 30% 10%)",
        /* safe-area support for notched devices */
        paddingTop: "env(safe-area-inset-top, 0px)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        paddingLeft: "env(safe-area-inset-left, 0px)",
        paddingRight: "env(safe-area-inset-right, 0px)",
        /* use dvh where supported for mobile browser chrome */
        height: "100dvh",
      }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Layers */}
      <GridOverlay />
      <ScanLine />
      <Particles count={40} />

      {/* Orbital rings — vmin based so they scale to smallest viewport dimension */}
      <OrbitalRing sizeVmin={45} duration={20} delay={0.3} />
      <OrbitalRing sizeVmin={65} duration={30} delay={0.6} reverse />
      <OrbitalRing sizeVmin={82} duration={25} delay={0.9} />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <GlowPulse />

        {/* Logo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <motion.img
            src={logo}
            alt="Ezee Technologies"
            className="h-12 xs:h-14 sm:h-16 md:h-20 w-auto brightness-0 invert"
            style={{
              filter: "brightness(0) invert(1) drop-shadow(0 0 20px hsl(174 42% 40% / 0.3))",
            }}
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
          className="mt-8 sm:mt-10 flex flex-col items-center w-full max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Progress bar */}
          <div
            className="relative w-full h-[3px] rounded-full overflow-hidden"
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
            {/* Leading edge dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
              style={{
                left: `calc(${Math.min(progress, 100)}% - 5px)`,
                background: "hsl(174 42% 70%)",
                boxShadow: "0 0 10px hsl(174 42% 50%)",
                opacity: progress < 100 ? 1 : 0,
              }}
            />
          </div>

          {/* Percentage */}
          <motion.span
            className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: "hsl(174 42% 55% / 0.7)" }}
          >
            {Math.round(Math.min(progress, 100))}%
          </motion.span>

          {/* Tagline */}
          <motion.p
            className="mt-4 sm:mt-6 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.25em] uppercase font-medium text-center"
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
        "top-3 left-3 sm:top-6 sm:left-6",
        "top-3 right-3 sm:top-6 sm:right-6 rotate-90",
        "bottom-3 left-3 sm:bottom-6 sm:left-6 -rotate-90",
        "bottom-3 right-3 sm:bottom-6 sm:right-6 rotate-180",
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.8 + i * 0.1 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
            <path d="M0 12V0h12" stroke="hsl(174 42% 50%)" strokeWidth="1" />
          </svg>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LoadingScreen;
