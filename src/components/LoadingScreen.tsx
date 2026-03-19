import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-secondary flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Animated background lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M-100 ${150 + i * 150} Q ${300 + i * 50} ${100 + i * 80}, ${600 + i * 30} ${200 + i * 100} T ${1200 + i * 40} ${300 + i * 60} T 1600 ${250 + i * 120}`}
            stroke="hsl(174, 42%, 40%)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 + i * 0.3, ease: "easeInOut", delay: i * 0.15 }}
          />
        ))}
      </svg>

      {/* Floating geometric shapes */}
      {[
        { x: "15%", y: "20%", size: 60, delay: 0, color: "hsl(174, 42%, 40%)" },
        { x: "80%", y: "15%", size: 40, delay: 0.2, color: "hsl(165, 30%, 88%)" },
        { x: "10%", y: "75%", size: 50, delay: 0.4, color: "hsl(175, 25%, 80%)" },
        { x: "85%", y: "70%", size: 35, delay: 0.3, color: "hsl(150, 15%, 85%)" },
        { x: "50%", y: "85%", size: 45, delay: 0.5, color: "hsl(80, 40%, 80%)" },
      ].map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-2xl opacity-[0.08]"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
          }}
          initial={{ scale: 0, rotate: -45 }}
          animate={{
            scale: [0, 1, 1.1, 1],
            rotate: [-45, 0, 5, 0],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            scale: { duration: 0.8, delay: shape.delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: shape.delay },
          }}
        />
      ))}

      {/* Logo */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src={logo}
          alt="Ezee Technologies"
          className="h-16 sm:h-20 w-auto mb-8 brightness-0 invert"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Progress bar */}
        <div className="w-48 sm:w-64 h-1 bg-secondary-foreground/10 rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full bg-primary rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          className="text-secondary-foreground/40 text-xs sm:text-sm tracking-widest uppercase font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Insurance-native digital infrastructure
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
