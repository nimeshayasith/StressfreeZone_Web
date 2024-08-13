import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_icon from '../assets/logo1.svg';
import Meditation_1 from '../assets/Meditation_1.svg';

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signup = () => {
    if (!formData.username || !formData.email || !formData.password) {
      alert("Please fill out all fields.");
      return;
    }

    // Example API call
    fetch("https://example.com/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Signup successful!", data);
          navigate("/"); // Navigate to login page after successful signup
        } else {
          alert("Signup failed: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error during signup:", error);
        alert("An error occurred. Please try again later.");
      });
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
    
      <div className="flex flex-col items-start text-base font-medium max-w-[426px] text-slate-400">
        <h1 className="text-3xl font-semibold text-white">Create an Account 👋</h1>
        <div className="mt-5 text-lg leading-loose">
      Kindly fill in your details to create an account
    </div>
    <div className="mt-12 text-gray-500 max-md:mt-10">Your fullname*</div>
    <input
            name="fullName"
            value={formData.fullName}
            onChange={changeHandler}
            type="text"
            placeholder="Enter your name"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
              <div className="mt-12 text-gray-500 max-md:mt-10">Your Email-Address*</div>
              <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Enter your E-mail"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
              <div className="mt-12 text-gray-500 max-md:mt-10">Create password*</div>
             <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Create your password"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
       
       
        <button onClick={signup} className="w-full bg-teal-500 text-white py-3 rounded">
          Register
        </button>
        <p className="mt-6 text-center text-white">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-teal-400 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
      </div>
      <div className="w-1/2 text-right">
      <img src={Meditation_1} alt="" className="w-120 h-120 left-[100px] top-[100px] "/>
      </div>
    
    </div>
  );
}

{/*}
   
import React, { useState } from 'react';
import mdi_eye from '../assets/mdi_eye.svg';
import tik_icon from '../assets/tik_icon.svg';
import Meditation_1 from '../assets/Meditation_1.svg';

export default function LoginSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Add form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className="flex overflow-hidden flex-wrap gap-10 px-20 py-14 bg-slate-700 max-md:px-5">
      <div className="flex flex-col self-start max-md:max-w-full w-1/2">
        <div className="flex gap-2.5 self-start font-semibold text-white">

          <img src={logo_icon} alt="" className='w-24 h-24'/>
          <div className="flex flex-col my-auto">
            <div className="text-2xl">CALM MIND</div>
            <div className="mt-1.5 text-base">Stress Free Zone</div>
          </div>
        </div>
        <div className="flex flex-col items-start pl-20 mt-12 w-full text-base font-medium text-slate-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="self-center text-3xl font-semibold text-white">
            Create an Account 👋
          </div>
          <div className="mt-5 text-lg leading-loose">
            Kindly fill in your details to create an account
          </div>
          <div className="mt-12 text-gray-500 max-md:mt-10">Your fullname*</div>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={changeHandler}
            type="text"
            placeholder="Enter your name"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
          <div className="mt-5 text-gray-500">Email address*</div>
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Enter email address"
            className="px-8 py-5 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
          <div className="mt-5 text-gray-500">Create password*</div>
          <div className="flex gap-10 px-6 py-5 mt-3 rounded-md border border-solid bg-zinc-800 border-slate-400 max-md:pl-5 max-md:max-w-full">
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Create a password"
              className="bg-transparent text-white focus:outline-none w-full"
            />
            <img src={mdi_eye} alt="Show password" />
          </div>
          <div className="flex gap-3.5 mt-5 text-gray-500">
            <img src={tik_icon} alt="Agree to terms" />
            <div className="basis-auto">I agree to terms & conditions</div>
          </div>
          <button
            onClick={handleSubmit}
            className="px-16 py-6 mt-9 text-center text-white bg-teal-500 rounded-md max-md:px-5 max-md:max-w-full"
          >
            Register Account
          </button>
        </div>
      </div>
      <div className="w-1/2 text-right">
      <img src={Meditation_1} alt="" className="w-200 h-200 left-[71px] top-[83px] "/>
      </div>
    </div>
  );
}
*/}


