import React from 'react';
import { useNavigate } from 'react-router-dom';

const StressLevel2 = () => {
  const navigate = useNavigate(); // useNavigate for React Router v6

  const navigateToRelaxation = () => {
    navigate('/workrelief'); // Navigate to the relaxation page
  };
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-yellow-600">Mild Stress Detected</h1>
        <p className="mt-4 text-lg text-gray-700"> You’re feeling a little stressed, but it’s manageable. Take a moment for yourself to relax.</p>
        <div className="mt-6 text-center">
          <p className="text-xl font-medium text-gray-600">"Breathe in, breathe out, and let it go!"</p>
        </div>
        <div className="mt-6">
          <button 
           onClick={navigateToRelaxation}
           className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">Take a Deep Breath</button>
        </div>
      </div>
    </div>
  );
};

export default StressLevel2;
