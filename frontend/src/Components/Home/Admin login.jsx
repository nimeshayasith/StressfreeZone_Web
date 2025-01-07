// eslint-disable-next-line no-unused-vars

import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_icon from '../../assets/logo1.svg';
import Meditation_2 from '../../assets/Meditation_2.svg';
import axios from "axios";


export default function AdminLogin() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 

  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      // Authenticate with the backend
      const response = await axios.post("https://localhost:5000/api/admin/admin_login", {
        email,
        password

      });

      const { token } = response.data; // Getting token from response
      localStorage.setItem('token', token); // Save token to localStorage if needed

      console.log("User logged in successfully:", response.data);
      alert("User Logged in successfully!");
      navigate("/adminhome"); 
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-20 py-14 bg-gray-800">
      <div className="flex flex-col self-start max-md:max-w-full w-1/2">
        <div className="flex gap-2.5 mt-10 self-start font-semibold text-white">
      {/* Logo */}
      <img src={logo_icon} alt="App Logo" className="w-16 h-16" />

      {/* Text next to the logo */}
      <div className="flex flex-col my-auto">
        <h1 className="text-2xl font-bold">CALM MIND</h1>
        <p className="mt-1.5 text-base ">STRESS FREE ZONE</p>
      </div>
    </div>
    
    <div className="flex flex-col items-start text-base font-medium max-w-[426px] text-slate-400 mt-10">
        <h1 className="text-3xl font-semibold text-white">Welcome Admin 👋</h1>
        <div className="mt-5 text-lg leading-loose">
     Develop your app day by day
    </div>
    
              <div className="mt-12  text-gray-500 max-md:mt-10">Enter the Email-Address*</div>
              <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
      
            type="email"
            placeholder="Enter your E-mail"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
              <div className="mt-12 text-gray-500 max-md:mt-10">Enter your password*</div>
             <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            type="password"
            placeholder="Create your password"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
       
      
  
        <button onClick={handleLogin} className="w-full bg-teal-500 text-white py-3 rounded mt-10">
          Login
        </button>
        </div>
     
      </div>
      <div className="w-1/2 text-right">
      <img src={Meditation_2} alt="" className="w-120 h-120 left-[100px] top-[100px] "/>
      </div>
      </div>
    
    );
  }