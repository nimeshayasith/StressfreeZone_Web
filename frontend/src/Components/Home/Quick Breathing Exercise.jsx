import React, { useState, useEffect } from 'react';

const BreathingExercise = () => {
  const [size, setSize] = useState(300); // Initial size of the circle
  const [text, setText] = useState(''); // Text to display (Inhale, Hold, Exhale)
  const [started, setStarted] = useState(false); // Track if exercise is started

  useEffect(() => {
    let timeout1, timeout2, timeout3;

    if (started) {
      setText('Inhale');
      setSize(150); // Decrease size for Inhale over 5 seconds
      timeout1 = setTimeout(() => {
        setText('Hold');
        setSize(150); // Keep size unchanged during Hold
      }, 5000);

      timeout2 = setTimeout(() => {
        setText('Exhale');
        setSize(300); // Increase size back to original for Exhale over 5 seconds
      }, 10000);

      timeout3 = setTimeout(() => {
        setStarted(false); // Reset after the whole process
      }, 15000);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [started]);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className="flex items-center justify-center bg-blue-500 rounded-full text-white text-2xl"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transition: 'width 5s ease, height 5s ease',
        }}
      >
        {text}
      </div>
      {!started && (
        <button
          onClick={handleStart}
          className="mt-8 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Start
        </button>
      )}
    </div>
  );
};

export default BreathingExercise;
