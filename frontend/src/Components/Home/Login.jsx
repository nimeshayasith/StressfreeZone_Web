// eslint-disable-next-line no-unused-vars
import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from "../../firebaseConfig";
import { signInWithPopup} from "firebase/auth";
import axios from "axios";
import logo_icon from '../../assets/logo1.svg';
import Meditation_2 from '../../assets/Meditation_2.svg';
import googlelogo from '../../assets/google_logo.jpeg';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Authenticate with the backend
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      const { token ,user} = response.data; // Getting token from response
      localStorage.setItem('token', token); // Save token to localStorage if needed
      localStorage.setItem('user', JSON.stringify(user));
      console.log("User logged in successfully:", response.data);
      alert("User Logged in successfully!");
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleForgotPassword = async () =>{
    try {
      if(!email){
        console.log("Enter the email address..... ");
      }
      await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      alert('Password reset email sent successfully');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert('Failed to send password reset email.');
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();
      // Send the token to your backend or handle login success
      const res = await axios.post("http://localhost:5000/api/auth/login-google", { token });
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        alert("Logged in successfully!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      alert("Google login failed. Please try again.");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your E-mail"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
              <div className="mt-12 text-gray-500 max-md:mt-10">Enter your password*</div>
             <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
            className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5 text-white"
          />
       
       <div className="flex gap-64 mt-4 text-gray-500 max-md:max-w-full">

            <button onClick={() => navigate("/adminlogin")}
            className=" cursor-pointer">Admin</button>

          <button onClick={handleForgotPassword} className="cursor-pointer">Forget password</button>
          
        </div>
        <button onClick={handleLogin} className="w-full bg-teal-500 text-white py-3 rounded mt-5">
          Login
        </button>

        
        <p className='w-full text-center mt-10 text-teal-50'>Or</p>


        <button className="flex px-20 w-full bg-black text-white py-3 rounded mt-5" onClick={handleGoogleLogin}>
        <img src={googlelogo} alt='googlelogo' className='rounded-lg mx-6 '/>
          Continue with Google
        </button>

        <p className="flex gap-20 mt-10 text-center text-white ">
          If you do not have an account? {" "}
          <span
            onClick={() => navigate("/register")}
            className="text-teal-400 cursor-pointer"
          >
            Create a account
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