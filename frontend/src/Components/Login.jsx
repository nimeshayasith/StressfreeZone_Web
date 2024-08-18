import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_icon from '../assets/logo1.svg';
import Meditation_2 from '../assets/Meditation_2.svg';

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
   
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID", 
      callback: handleGoogleResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const handleGoogleResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);

  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = () => {
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    fetch("https://example.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Login successful!", data);
         
          navigate("/");
        } else {
          alert("Invalid email or password.");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again later.");
      });
  };
  const handleForgotPassword = async () => {
    if (!formData.email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      const response = await fetch("https://example.com/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      if (response.ok) {
        setMessage("Password reset link has been sent to your email.");
      } else {
        setMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("An error occurred. Please try again later.");
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
        <h1 className="text-3xl font-semibold text-white">Welcome Back 👋</h1>
        <div className="mt-5 text-lg leading-loose">
     We are happy to have you back
    </div>
    
              <div className="mt-12 text-gray-500 max-md:mt-10">Enter the Email-Address*</div>
              <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Enter your E-mail"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
              <div className="mt-12 text-gray-500 max-md:mt-10">Enter your password*</div>
             <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Create your password"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
       
       <div className="flex gap-64 mt-4 text-gray-500 max-md:max-w-full">

            <button onClick={() => navigate("/adminlogin")}
            className=" cursor-pointer">Admin</button>

          <button onClick={handleForgotPassword} className="cursor-pointer">Forget password</button>
          </div>
        <button onClick={login} className="w-full bg-teal-500 text-white py-3 rounded mt-5">
          Login
        </button>

        
        <p className='w-full text-center mt-10 text-teal-50'>Or</p>
        <div id="googleSignInButton" className="mt-10 w-full"></div>

        {message && <p className="mt-6 text-center text-green-400">{message}</p>}
        <p className="flex gap-48 mt-10 text-center text-white ">
          Don't have an account? {" "}
<span
            onClick={() => navigate("/register")}
            className="text-teal-400 cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
      </div>
      <div className="w-1/2 text-right">
      <img src={Meditation_2} alt="" className="w-120 h-120 left-[100px] top-[100px] "/>
      </div>
      </div>
     
      
    
  );
}