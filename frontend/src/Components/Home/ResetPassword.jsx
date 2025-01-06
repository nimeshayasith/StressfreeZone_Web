import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo_icon from '../../assets/logo1.svg';
import Meditation_2 from '../../assets/Meditation_2.svg';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams(); 
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
      alert("Password reset successful! Please log in.");
      navigate('/login'); 
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
        <div className="min-h-screen w-full flex items-center justify-center px-20 py-14 bg-gray-800">
          <div className="flex flex-col self-start max-md:max-w-full w-1/2">
            <div className="flex gap-2.5 mt-10 self-start font-semibold text-white">
        
          <img src={logo_icon} alt="App Logo" className="w-16 h-16" />
    
          
          <div className="flex flex-col my-auto">
            <h1 className="text-2xl font-bold">CALM MIND</h1>
            <p className="mt-1.5 text-base ">STRESS FREE ZONE</p>
          </div>
        </div>
        <div className="flex flex-col items-start text-base font-medium max-w-[426px] text-slate-400 mt-10">
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
        />
        <button
          onClick={handleResetPassword}
          className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-700 mt-10"
        >
          Reset Password
        </button>
      </div>
    
      </div>
          <div className="w-1/2 text-right">
          <img src={Meditation_2} alt="" className="w-96 h-96 left-[100px] top-[100px] "/>
          </div>
          </div>
  );
}