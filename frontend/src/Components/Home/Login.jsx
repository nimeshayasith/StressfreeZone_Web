// eslint-disable-next-line no-unused-vars
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from "../../firebaseConfig";
import { signInWithPopup} from "firebase/auth";
import axios from "axios";
import logo_icon from '../../assets/logo1.svg';
import Meditation_2 from '../../assets/Meditation_2.svg';
import googlelogo from '../../assets/google_logo.jpeg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack } from "react-icons/io";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      // Authenticate with the backend
      const response = await axios.post("https://stressfreezone-web.onrender.com/api/auth/login", {
        email,
        password
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      toast.success("Logged in successfully!", { position: "top-right" });
      setTimeout(() => {
         navigate("/dashboard");
      }, 2000); 
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed! Please check your credentials.", { position: "top-right" });
    }
  };

  const handleForgotPassword = async () => {
    try {
      if (!email) {
        toast.warn("Please enter your email address.", { position: "top-right" });
        return;
      }
  
      await axios.post("https://stressfreezone-web.onrender.com/api/auth/forgot-password", { email });
  
      toast.success("Password reset email sent successfully!", { position: "top-right" });
  
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast.error("Failed to send password reset email.", { position: "top-right" });
    }
  };
  
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();
  
      const res = await axios.post("https://stressfreezone-web.onrender.com/api/auth/login-google", { token });
  
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
  
        toast.success("Logged in successfully!", { position: "top-right" });
  
        // Delay navigation to allow toast notification to display
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      toast.error("Google login failed. Please try again.", { position: "top-right" });
    }
  };
  

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-14 bg-gray-800">
      <ToastContainer />
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <div className="flex gap-2.5 mb-8 lg:ml-20 font-semibold text-white">
        <IoIosArrowBack
                    className="text-white cursor-pointer text-xl mr-5"
                    onClick={() => navigate(-1)} // Navigate to the previous page
                  />
          <img src={logo_icon} alt="App Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
          <div className="flex flex-col justify-center">
            
            <h1 className="text-xl sm:text-2xl font-bold">CALM MIND</h1>
            <p className="text-sm sm:text-base">STRESS FREE ZONE</p>
          </div>
        </div>
  
        <div className="text-base font-medium text-slate-400 w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-2">Welcome Back 👋</h1>
          <p className="mb-5 text-lg leading-relaxed">We are happy to have you back</p>
  
          <label className="text-gray-400">Email Address*</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-3 mt-2 mb-4 rounded-md border border-slate-400 bg-zinc-800 text-white"
          />
  
          <label className="text-gray-400">Password*</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-6 py-3 mt-2 mb-4 rounded-md border border-slate-400 bg-zinc-800 text-white"
          />
  
          <div className="flex justify-between text-gray-500 text-sm mb-4">
            <button onClick={() => navigate("/adminlogin")} className="hover:text-white">Admin</button>
            <button onClick={handleForgotPassword} className="hover:text-white">Forget password</button>
          </div>
  
          <button onClick={handleLogin} className="w-full bg-teal-500 text-white py-3 rounded mb-3">
            Login
          </button>
  
          <p className="text-center text-white mb-3">Or</p>
  
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-4 w-full bg-black text-white py-3 rounded mb-3"
          >
            <img src={googlelogo} alt="Google" className="w-6 h-6" />
            Continue with Google
          </button>
  
          <p className="text-center text-white text-sm">
            If you do not have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-teal-400 cursor-pointer"
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
  
      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <img src={Meditation_2} alt="Meditation" className="w-3/4 sm:w-2/3 h-auto" />
      </div>
    </div>
  );

}

