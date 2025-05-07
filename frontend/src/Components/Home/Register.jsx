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
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-10 bg-gray-800">
  <ToastContainer autoClose={2000} />

  {/* Form Section */}
  <div className="flex flex-col w-full md:w-1/2 md:ml-20">
    {/* Header */}
    <div className="flex gap-2.5 mt-5 self-start font-semibold text-white">
      <img src={logo_icon} alt="App Logo" className="w-14 h-14" />
      <div className="flex flex-col my-auto">
        <h1 className="text-xl md:text-2xl font-bold">CALM MIND</h1>
        <p className="mt-1 text-sm md:text-base">STRESS FREE ZONE</p>
      </div>
    </div>

    {/* Form Inputs */}
    <div className="flex flex-col items-start text-base font-medium text-slate-400 mt-10 max-w-full md:max-w-[426px]">
      <h1 className="text-2xl md:text-3xl font-semibold text-white">Create an Account 👋</h1>
      <p className="mt-1 text-base md:text-lg leading-relaxed">
        Kindly fill in your details to create an account
      </p>

      <label className="mt-5 text-gray-500">Your Fullname*</label>
      <input
        name="fullName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your name"
        className="px-5 py-3 mt-2 w-full rounded-md border border-slate-400 bg-zinc-800 text-white"
      />

      <label className="mt-5 text-gray-500">Your Email-Address*</label>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your E-mail"
        className="px-5 py-3 mt-2 w-full rounded-md border border-slate-400 bg-zinc-800 text-white"
      />

      <label className="mt-5 text-gray-500">Create password*</label>
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Create your password"
        className="px-5 py-3 mt-2 w-full rounded-md border border-slate-400 bg-zinc-800 text-white"
      />

      <button onClick={handleRegister} className="w-full bg-teal-500 text-white py-3 rounded mt-7">
        Register
      </button>

      <p className="mt-4 text-white text-sm">
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

  {/* Image Section */}
  <div className="hidden md:flex w-1/2 justify-center mt-10 md:mt-0">
    <img src={Meditation_1} alt="Meditation" className="w-2/3 h-auto" />
  </div>
</div>

  );
}


