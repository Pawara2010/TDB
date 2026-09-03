import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { Confetti } from './components/Confetti';
import { SealedEnvelope } from './components/SealedEnvelope';
import { MessageLetter } from './components/MessageLetter';
import { Cake }  from './components/Cake';
import { Gifts }  from './components/Gifts';
import  LastMessage from './components/LastMessage';

type Stage = 'sealed' | 'opening' | 'open';

export function App() {
  const [stage, setStage] = useState<Stage>('sealed');
  const [confettiKey, setConfettiKey] = useState(0);
  const [confettiOn, setConfettiOn] = useState(false);
  const [adoFinished, setAdoFinshed] = useState(false);
  const [cakeSt, setCakeSt] = useState<string | null>(null);
  const [giftSt, setGiftSt] = useState<boolean | null>(null);

  const audio = new Audio('/hbd.mp3'); // place file in public/
  audio.preload = 'auto';

  const burst = () => {
    setConfettiKey((key) => key + 1);
    setConfettiOn(true);
    window.setTimeout(() => setConfettiOn(false), 5200);
  };

  const handleOpen = () => {
    if (stage !== 'sealed') return;
    setStage('opening');
    burst();
    window.setTimeout(() => setStage('open'), 620);
  };

  const playHbd = () => {
    audio.play();
  };

  const getCakeSt = () => {
    const cakeImg = document.getElementById("cakeSt");
    if (cakeImg) {
      cakeImg.addEventListener("load", () => {
        const cake2 = cakeImg.getAttribute('src');
        if (cake2) {
          setTimeout(() => {
            setCakeSt(cake2);
          }, 6000);
        };
      }); 
    };
  };

  const getGiftSt = () => {
    const GiftImg = document.getElementById("giftbox");
    if (GiftImg !== null) {
      GiftImg.addEventListener("click", () => {
        setTimeout(() => {
          setGiftSt(true);
        }, 8000)
      }); 
    };
  };

  audio.addEventListener("ended", () => {
    setAdoFinshed(true);
    setTimeout(playHbd, 1000);
  });

  return (
    <main>
      <Confetti key={confettiKey} active={confettiOn} />

      <AnimatePresence mode="wait">
        {stage !== 'open' ?
        <motion.div key="sealed" exit={{ opacity: 0 }}>
            <SealedEnvelope onOpen={handleOpen} isOpening={stage === 'opening'} />
          </motion.div> :
            !adoFinished ? <MessageLetter onOpen={playHbd} /> :
              cakeSt !== "/cake-2.gif" ? <Cake onOpen={getCakeSt} /> : !giftSt ? <Gifts onOpen={getGiftSt}/> : <LastMessage/>
        }
      </AnimatePresence>
      <Analytics />
    </main>);

}
