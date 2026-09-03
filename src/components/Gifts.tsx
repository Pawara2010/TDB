// src/components/GiftBoxGame.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

type GiftsProps = {
  onOpen: () => void;
};


export function Gifts({ onOpen }: GiftsProps) {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const gifts = [
    { name: "Teddy Bear", img: "/teddybear.png" },
    { name: "Birthday Cake", img: "/flowers.png" },
    { name: "Balloon", img: "/keytag.png" },
  ];

  return (
    <section className="flex min-h-screen pb-100 items-center justify-center bg-linear-to-br from-rose-100 to-sky-100">
      <div className="relative flex flex-col items-center">
        {/* Gift Box */}
        {!opened && (
          <div className="flex flex-col justify-center items-center h-screen">
              <motion.img
                id="giftbox"
                src="/giftbox.png" // your gift box image
                alt="Gift Box"
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                className="w-50 h-50 cursor-pointer drop-shadow-xl"
                onClick={() => {
                  setOpened(true);
                  confetti({
                    particleCount: 120,
                    spread: 70,
                    origin: { y: 0.65 },
                  });
                }}
              />
          </div>
        )}

        {/* Gifts popping out */}
        {opened && (
          <div className="flex flex-col items-center justify-center">
          <span className="relative bottom-20 text-3xl font-sans font-normal bg-linear-to-br from-sky-500  to-green-400 bg-clip-text text-transparent">Some Gifts For You</span>
          <div className="relative mt-10 flex flex-wrap justify-center gap-6">
            {gifts.map((gift, idx) => (
              <motion.div
                key={gift.name}
                initial={{ y: 80, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: idx * 1, // stagger items one by one
                  type: "spring",
                  stiffness: 30,
                  damping: 15,
                }}
                className="flex flex-col items-center"
              >
                <img
                  src={gift.img}
                  alt={gift.name}
                  className="h-44 w-44 object-contain drop-shadow-lg"
                />
              </motion.div>
            ))}
          </div>
          </div>
        )}
      </div>
    </section>
  );
}
