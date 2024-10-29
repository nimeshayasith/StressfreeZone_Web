import React, { useState, useEffect } from 'react';
import backgroundexercise from '../../assets/backgroundexercise.png';
import seawavespic from '../../assets/seawavespic.jpeg';

const BreathingExercise = () => {
  const [size, setSize] = useState(300);
  const [text, setText] = useState('');
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [cycle, setCycle] = useState(1);

  useEffect(() => {
    let timeout1, timeout2, timeout3, interval;

    if (started && cycle <= 4) {
      setText('Inhale');
      setSize(150);
      setSeconds(5);

      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      timeout1 = setTimeout(() => {
        clearInterval(interval);
        setText('Hold');
        setSize(150);
        setSeconds(5);

        interval = setInterval(() => {
          setSeconds((prev) => prev - 1);
        }, 1000);
      }, 5000);

      timeout2 = setTimeout(() => {
        clearInterval(interval);
        setText('Exhale');
        setSize(300);
        setSeconds(5);

        interval = setInterval(() => {
          setSeconds((prev) => prev - 1);
        }, 1000);
      }, 10000);

      timeout3 = setTimeout(() => {
        clearInterval(interval);
        if (cycle < 4) {
          setCycle((prevCycle) => prevCycle + 1);
        } else {
          setStarted(false);
        }
      }, 15000);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearInterval(interval);
    };
  }, [started, cycle]);

  const handleStart = () => {
    setCycle(1);
    setStarted(true);
  };

  return (
    <div className="relative flex items-center bg-black justify-center h-screen overflow-hidden">
     

     {} <section data-layername="texture" className="flex absolute inset-0 object-cover justify-center items-center px-20 py-16 max-md:px-5">
      <img src={seawavespic}
        alt="Textured background pattern"
        className="object-contain w-full aspect-[1.8] max-w-[1320px] max-md:max-w-full" 
      />
              <img src={backgroundexercise} alt="Background exercise" className="object-cover absolute w-full h-full opacity-auto" />
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </section>

      <div className="relative z-20 flex flex-col items-center justify-center text-black">
        <div className="mb-4 text-xl font-semibold">Cycle: {cycle}/4</div>
        <div
          className="flex items-center justify-center bg-zinc-900 transparent rounded-full text-white text-2xl"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transition: 'width 5s ease, height 5s ease',
          }}
        >
          {text}
        </div>
        <div className="mt-4 text-2xl">
          {seconds > 0 && `${seconds} seconds`}
        </div>
        {!started && (
          <button
            onClick={handleStart}
            className="mt-8 bg-slate-950 text-white px-4 py-2 rounded-lg"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default BreathingExercise;
