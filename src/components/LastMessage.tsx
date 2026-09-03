import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdayShow() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(2), 4000),
      setTimeout(() => setStep(3), 8000),
      setTimeout(() => setStep(4), 12000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const messages: Record<number, string> = {
  1: "🌟 Keep Smiling, Shine Bright 🌟",
  2: "✨ Wishing You Endless Joy ✨",
  3: "🎂 May All Your Dreams Come True 🎂",
  4: "🎉 Happy Birthday Damsahani 🎉",
};


  return (
    <section className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden relative">
      
      {/* Animated starry background */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3 + i * 0.1, repeat: Infinity }}
          className="absolute rounded-full bg-yellow-300"
          style={{
            width: "4px",
            height: "4px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Floating balloons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", x: i * 80 }}
          animate={{ y: -200 }}
          transition={{ duration: 12 + i, repeat: Infinity, ease: "easeOut" }}
          className="absolute text-5xl"
        >
          🎈
        </motion.div>
      ))}

      {/* Text sequence */}
      <div className="text-center px-6 z-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -40 }}
            transition={{ duration: 1 }}
            className={`text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl ${
              step === 4 ? "text-pink-400 animate-pulse" : "text-yellow-200"
            }`}
          >
            {messages[step]}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
