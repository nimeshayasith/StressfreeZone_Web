import React from 'react';
import { useNavigate } from 'react-router-dom';

const StressLevel4 = () => {
  const navigate = useNavigate(); // useNavigate for React Router v6

  const navigateToRelaxation = () => {
    navigate('/meditation'); // Navigate to the relaxation page
  };
  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-red-600">You’ve Got This!</h1>
        <p className="mt-4 text-lg text-gray-700"> You may be feeling overwhelmed right now, but remember, it's okay to take a step back and focus on calming yourself. You've got the strength to handle this!</p>
        <div className="mt-6 text-center">
          <p className="text-xl font-medium text-gray-600">"Take it one step at a time, you're doing better than you think!"</p>
        </div>
        <div className="mt-6">
          <button  
           onClick={navigateToRelaxation}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Take a Breathing Exercise</button>
        </div>
      </div>
    </div>
  );
};

export default StressLevel4;
