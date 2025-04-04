// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_icon from '../../assets/logo1.svg';
import Meditation_1 from '../../assets/Meditation_1.svg';
import { auth, db } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
  
    const navigate = useNavigate();

    const handleRegister = async () => {
      try {
        // Check if fields are empty
        if (!name || !email || !password) {
          toast.warn("Please fill in all fields!", { position: "top-right" });
          return;
        }
  
        // Send registration request to backend
        const response = await axios.post(
          "http://localhost:5000/api/auth/signup",
          { name, email, password }
        );
  
        console.log("User registered:", response.data);
        toast.success("User registered successfully!", { position: "top-right" });
  
        // Delay navigation to allow toast message to be visible
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (error) {
        console.error("Error during registration:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Registration failed!", { position: "top-right" });
      }
    };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-20 py-14 bg-gray-800">
      <ToastContainer autoClose={2000} />
      <div className="flex flex-col self-start max-md:max-w-full w-1/2 ml-20">
        <div className="flex gap-2.5 mt-5 self-start font-semibold text-white">
      {/* Logo */}
      <img src={logo_icon} alt="App Logo" className="w-16 h-16" />

      {/* Text next to the logo */}
      <div className="flex flex-col my-auto">
        <h1 className="text-2xl font-bold">CALM MIND</h1>
        <p className="mt-1.5 text-base ">STRESS FREE ZONE</p>
      </div>
    </div>
    
      <div className="flex flex-col items-start text-base font-medium max-w-[426px] text-slate-400 mt-10">
        <h1 className="text-3xl font-semibold text-white">Create an Account 👋</h1>
        <div className="mt-0 text-lg leading-loose">
      Kindly fill in your details to create an account
    </div>
    <div className="mt-5 text-gray-500 max-md:mt-10">Your fullname*</div>
    <input
            name="fullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="px-8 py-4 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
              <div className="mt-5 text-gray-500 max-md:mt-10">Your Email-Address*</div>
              <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your E-mail"
            className="px-8 py-4 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
              <div className="mt-5 text-gray-500 max-md:mt-10">Create password*</div>
             <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Create your password"
            className="px-8 py-4 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
       
       
        <button onClick={handleRegister} className="w-full bg-teal-500 text-white py-3 rounded mt-7">
          Register
        </button>

        <p className="flex gap-48 mt-3 text-center text-white ">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-teal-400 cursor-pointer"
          >
                Login
          </span>
        </p>

        
      </div>
      
      </div>
      <div className="w-1/2 text-right">
      <img src={Meditation_1} alt="" className="w-2/3 h-2/3 top-[100px] "/>
      </div>
    
    </div>
  );
}


