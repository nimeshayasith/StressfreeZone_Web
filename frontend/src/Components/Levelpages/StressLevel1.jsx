import React from 'react';
import { useNavigate } from 'react-router-dom';

const StressLevel1 = () => {
  const navigate = useNavigate(); // useNavigate for React Router v6

  const navigateToRelaxation = () => {
    navigate('/soundscape'); // Navigate to the relaxation page
  };
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-green-500">You're Doing Great!</h1>
        <p className="mt-4 text-lg text-gray-700">Your stress level is very low, which means you're managing things wonderfully!</p>
        <div className="mt-6 text-center">
          <p className="text-xl font-medium text-gray-600">"Keep going, you're on the right path!"</p>
        </div>
        <div className="mt-6">
          <button 
          onClick={navigateToRelaxation}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Keep Relaxing</button>
        </div>
      </div>
    </div>
  );
};

export default StressLevel1;
