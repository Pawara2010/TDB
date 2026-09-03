import { useEffect } from "react";
import { motion } from "framer-motion";

type MessageLetterProps = {
  onOpen: () => void;
};


export function MessageLetter({ onOpen }: MessageLetterProps) {
  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const name = "amsahani".split("");

  const container = {
    hidden: {},
    visible: {
      transition: { delayChildren: 1.2, staggerChildren: 0.15 },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
  };

  const pVariant = {
    hidden: { opacity: 1, rotate: 0, x: 60, y: 4 },
    visible: {
      opacity: 1, y: 0, x: 0, rotate: 180,
      transition: { duration: 1.3, delay: 1},
    },
  };

  return (
    <section
    className="h-screen flex justify-center items-center bg-center bg-no-repeat bg-cover relative overflow-hidden"
    style={{ backgroundImage: "url(/birthday_bg.jpg)" }}
    >
      
      {/* Balloons */}
      <motion.div initial={{ y: 300, opacity: 0 }} animate={{ y: -600, opacity: 1 }}
        transition={{ duration: 6, ease: "easeOut", repeat: Infinity }}
        className="absolute left-10 text-6xl">🎈</motion.div>
      <motion.div initial={{ y: 300, opacity: 0 }} animate={{ y: -600, opacity: 1 }}
        transition={{ duration: 7, ease: "easeOut", repeat: Infinity }}
        className="absolute right-10 text-6xl">🎈</motion.div>
      <motion.div initial={{ y: 400, opacity: 0 }} animate={{ y: -700, opacity: 1 }}
        transition={{ duration: 8, ease: "easeOut", repeat: Infinity }}
        className="absolute left-1/2 text-6xl">🎈</motion.div>

      {/* Message */}
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="text-center px-6">
        <p className="text-5xl font-bold uppercase tracking-[0.15em] text-amber-300 drop-shadow-lg animate-pulse">
          Happy Birthday
        </p>
        <div className="mt-1 flex justify-center text-3xl font-bold text-pink-100">
          <motion.span variants={pVariant} initial="hidden" animate="visible"
            className="text-red-400 font" style={{ position: "relative" }}>p</motion.span>
          <motion.div variants={container} initial="hidden" animate="visible"
            className="flex items-center text-center" style={{ lineHeight: "1.6em" }}>
            {name.map((char, index) => (
              <motion.span key={index} variants={letterVariant}
                className="inline-block align-middle font text-red-400">{char}</motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
