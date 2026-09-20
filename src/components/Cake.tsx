import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

type CakeProps = {
  onOpen: () => void;
};


export function Cake({ onOpen }: CakeProps) {
  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const [gif, setGif] = useState("/cake-1.gif");
  const audio = new Audio("/click.mp3");
  audio.preload = "auto";
  const audio2 = new Audio("/horn.mp3");
  audio2.volume = 1;
  audio2.preload = "auto";

  // Fireworks loop for a few seconds
  const fireworks = () => {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 25,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 25,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const extinguishing = () => {
    if (gif !== "/cake-1.gif") return;
    setGif("/cake-2.gif");

    // 🎉 Initial confetti burst
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });

    // 🎆 Fireworks celebration
    fireworks();

    // 🔊 Play sounds
    audio.play();
    audio2.play();
  };

  return (
    <section className="h-screen bg-[url('/bg-2.webp')] bg-center bg-cover flex flex-col items-center justify-center">
        <img
          id="cakeSt"
          src={gif}
          alt="cake"
          className="bg-transparent relative scale-140 bottom-25"
          onClick={extinguishing}
        />
      <div className="text-center">
        {gif === "/cake-1.gif" ?
        <span className="text-xl relative font-bold left-1 animate-pulse font bg-linear-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
          Tap on the flames
        </span> :
        <span className="text-xl opacity-0 relative font-bold font-sans font bg-linear-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
        Tap On The Flames
        </span>}
      </div>


    </section>
  );
}
