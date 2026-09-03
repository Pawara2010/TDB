import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { recipient } from '../data/surprise';

type SealedEnvelopeProps = {
  onOpen: () => void;
  isOpening: boolean;
};
const audio = new Audio('/click.mp3'); // place file in public/
audio.preload = 'auto';

export function SealedEnvelope({ onOpen, isOpening }: SealedEnvelopeProps) {
  const handleOpen = () => {
    onOpen();
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Play sound effect
    audio.play();
  }

    // Optional: celebration chime after delay

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-linear-to-br from-pink-50 via-rose-50 to-amber-50 p-6">
      <motion.button
        type="button"
        onClick={handleOpen}
        disabled={isOpening}
        aria-label={`Open the envelope for ${recipient.name}`}
        initial={{ opacity: 1, y: 0 }}
        animate={isOpening ? { scale: 1.02, y: -6 } : { scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        whileTap={{ scale: 0.98 }}
        className="relative w-90 max-w-full rounded-xl shadow-2xl focus:outline-none"
      >
        <div className="relative rounded-xl bg-paper border border-rose-100 overflow-hidden">
          {/* paper grain */}
          <div className="pointer-events-none absolute inset-0 bg-paper-grain opacity-30 mix-blend-multiply" />

          {/* curved flap + seal */}
          <div className="absolute inset-x-0 top-0 h-24 flex items-start justify-center">
            <svg viewBox="0 0 400 80" className="w-full h-full">
              <defs>
                <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.06" />
                </filter>
              </defs>

              {/* flap curve */}
              <motion.path
                d="M0,40 Q100,10 200,40 T400,40"
                fill="none"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'url(#soft)' }}
                initial={{ pathLength: 1 }}
                animate={isOpening ? { pathLength: 0 } : { pathLength: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />

              {/* seal circle */}
              <motion.circle
                cx="200"
                cy="40"
                r="10"
                fill="#f43f5e"
                initial={{ scale: 1 }}
                animate={isOpening ? { scale: 0.6, rotate: -20, x: -6 } : { scale: 1, rotate: 0, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: '200px 40px' }}
              />
            </svg>
          </div>

          {/* content */}
          <div className="relative px-6 pt-20 pb-8 text-center">
            <p className="text-xs uppercase tracking-widest text-rose-400">A Special Mail for</p>
            <p className="mt-2 text-lg font-serif text-ink">{recipient.name}</p>
            <div className="mx-auto mt-6 h-px w-16 bg-ink/10" />
            <p className="mt-5 text-sm font-medium text-rose-600">Tap to break the seal 🎉</p>
          </div>
        </div>
      </motion.button>
    </section>
  );
}
