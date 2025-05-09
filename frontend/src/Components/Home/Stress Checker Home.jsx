// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate,Link} from "react-router-dom"
import YogaBackgroundArt from '../../assets/Yoga background art.png'
import logo_icon from '../../assets/logo1.svg'
import Footer from "./Footer"
import StressCheckerRightSide from "../../assets/Stress Checker.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to show the toast message and redirect after a delay
  const handleButtonClick = () => {
    toast.warning("Please login to go to the relevant page.", {
      position: "top-center",
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => navigate("/login"), // Redirect to login page after toast closes
    });
  };

  return (

    <div>

      
    <div className="min-h-screen w-full flex items-center justify-center px-2 py-8 bg-gray-800">

      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 text-lg leading-8 text-center text-white">

      <div className="flex flex-wrap gap-0 justify-between items-center self-start min-h-[51px] max-md:max-w-full">

      <div className="animate-blink w-28 h-24  rounded-full bg-green-300 shadow-lg shadow-green-300/50   ">
      
     
      <img src={logo_icon} alt="App Logo" className="w-24  md:w-32 lg:w-40 object-contain" />
      </div>
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[623px] max-md:max-w-full">
        <div className="flex flex-wrap justify-center items-center min-h-[51px] ">
          <Link to="/stresscheckerhome"> <button className="self-stretch my-auto  w-[150px] text-teal-500 transition duration-300">Stress Checker</button></Link>
          <Link to="/quickrelaxation"><button className="self-stretch my-auto w-[150px] hover:text-teal-300 transition duration-300">Quick Relaxation</button></Link>
          <Link to="/movementshome"><button className="self-stretch my-auto w-[150px] hover:text-teal-300 transition duration-300">Movements</button></Link>
          <Link to="/learnmorehome"><button className="self-stretch my-auto w-[154px] hover:text-teal-300 transition duration-300">Learn more</button></Link>
          
        </div>
        </div>
        <div className="flex gap-0.5 justify-center items-center self-stretch my-auto min-h-[51px] min-w-[240px] w-[480px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[480px] max-md:max-w-full">
          <div className="flex justify-center items-center min-h-[51px]">
            <Link to="/"><button className="self-stretch my-auto  w-[120px] hover:text-teal-300 transition duration-300">Home</button></Link>
            <Link to="/aboutus"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">About Us</button></Link>
            <Link to="/mobileapp"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">Mobile App</button></Link>
            <Link to="/premierplan"><button className="self-stretch my-auto  w-[120px] hover:text-teal-300 transition duration-300">Premier plan</button></Link>
          </div>
        </div>
      </div>
        {/*<img src={CircleGaps} alt=""  className="object-cover absolute flex mr-28"/>*/}
        <div className="flex relative flex-col items-start self-center pt-20 pr-12 pb-0 -mt-12 mb-28 ml-24 max-w-full min-h-[503px] rounded-[202px] w-[568px] max-md:pt-24 max-md:pr-5">

          <img src={YogaBackgroundArt} alt=""  className="object-cover absolute inset-0 size-full"/>

          <div className="relative text-4xl text-left font-bold text-white leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          Take a moment for   <br />
          yourself - check your stress
            <br />  and reclaim your calm
          </div>
          <div className="relative mt-9 text-lg text-left leading-8 text-neutral-400 max-md:max-w-full">
          Our mission is to empower you to understand and manage your stress levels with ease. The Stress Level Checker is designed to help you identify how stress impacts your daily life, offering a simple yet effective way to take the first step toward well-being. By providing insights into your stress patterns, we aim to guide you on a journey to balance, calm, and mindfulness. Remember, understanding your stress is the key to overcoming it – and we’re here to support you every step of the way. <br />
          </div>
       
       
        </div>

        <div className="w-1/2 text-right -mt-16">
      <img src={StressCheckerRightSide} alt="" className="w-120 h-120 left-[100px] top-[100px] "/>
      </div>
    </div>
      </div>


      <div className="flex overflow-hidden rounded-2xl flex-col justify-center items-center px-20 py-5 bg-gray-900 max-md:px-5 mb-16">
      {/* Toast Container */}
      <ToastContainer />

{/* New Section with Button */}
<div className="flex overflow-hidden flex-col  justify-center items-center px-20 py-1 bg-gray-900 max-md:px-5 mb-8 mt-8">
  <div className="text-center">
    <h2 className="text-4xl font-bold text-white mb-6">
      Let's Check Your Stress Level
    </h2>
    <p className="text-lg text-neutral-400 mb-8">
      We will guide you to a stress-free mind. Take the first step towards a calmer, more balanced life.
    </p>
    
    <button
      onClick={handleButtonClick}
      className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
    >
      Check Your Stress Level Now
    </button>
  </div>
</div>

      </div>


     
    </div>
</div>

<Footer />
</div>

  );
}