import React from 'react';
import { useNavigate } from 'react-router-dom';

const StressLevel3 = () => {
  const navigate = useNavigate(); // useNavigate for React Router v6

  const navigateToRelaxation = () => {
    navigate('/movements'); // Navigate to the relaxation page
  };
  return (
    <div className="flex justify-center items-center h-screen bg-orange-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-orange-600">You're Almost There!</h1>
        <p className="mt-4 text-lg text-gray-700"> You're experiencing a bit of stress. It’s okay, everyone goes through this. Let's focus on some calm and soothing activities.</p>
        <div className="mt-6 text-center">
          <p className="text-xl font-medium text-gray-600">"Take a pause, and give yourself some time to unwind!"</p>
        </div>
        <div className="mt-6">
          <button 
           onClick={navigateToRelaxation}
           className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">Try Relaxation Techniques</button>
        </div>
      </div>
    </div>
  );
};

export default StressLevel3;
