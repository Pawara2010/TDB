import { useMemo } from 'react';
import { motion } from 'framer-motion';

type ConfettiProps = {
  active: boolean;
  pieceCount?: number;
};

const COLORS = ['#7B2D4E', '#B98A2F', '#E7C3C4', '#2C1B22', '#D9705C', '#8FA98E'];

type Piece = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  drift: number;
  rotation: number;
  color: string;
  width: number;
  height: number;
  round: boolean;
};

export function Confetti({ active, pieceCount = 70 }: ConfettiProps) {
  const pieces = useMemo<Piece[]>(
    () =>
    Array.from({ length: pieceCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.9,
      duration: 2.6 + Math.random() * 2.2,
      drift: (Math.random() - 0.5) * 220,
      rotation: 180 + Math.random() * 720,
      color: COLORS[i % COLORS.length],
      width: 6 + Math.random() * 6,
      height: 10 + Math.random() * 12,
      round: Math.random() > 0.75
    })),
    [pieceCount]
  );

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      
      {pieces.map((piece) =>
      <motion.span
        key={piece.id}
        className="absolute top-[-8%] block"
        style={{
          left: `${piece.left}%`,
          width: piece.width,
          height: piece.round ? piece.width : piece.height,
          backgroundColor: piece.color,
          borderRadius: piece.round ? '9999px' : '1px'
        }}
        initial={{ y: '-10vh', x: 0, rotate: 0, opacity: 1 }}
        animate={{
          y: '110vh',
          x: piece.drift,
          rotate: piece.rotation,
          opacity: [1, 1, 0.9, 0]
        }}
        transition={{
          duration: piece.duration,
          delay: piece.delay,
          ease: 'easeIn'
        }} />

      )}
    </div>);

}