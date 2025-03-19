// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate,Link , useLocation} from "react-router-dom"
import YogaBackgroundArt from '../../assets/Yoga background art.png'
import YogaGirlRightSide from '../../assets/Yoga girl right side.png'
import logo_icon from '../../assets/logo1.svg'
import group4 from '../../assets/Group 4.png'
import group7 from '../../assets/Group 7.png'
import group8 from '../../assets/Group 8.png'
import breathingword from '../../assets/BREATHING.png'
import logocirclewithstyle from '../../assets/logo with style.png'
import breath from '../../assets/breath.png'
import base from '../../assets/base.png'
import phoneSelection from '../../assets/Phone Selection.png'
import frame2 from '../../assets/Frame 2.png'
import placeholder1 from '../../assets/placeholder1.png'
import placeholder3 from '../../assets/placeholder3.png'
import placeholder4 from '../../assets/placeholder4.png'
import placeholder6 from '../../assets/placeholder6.png'
import arrow from '../../assets/vector.png'
import MeditationBackground from '../../assets/meditation background.png'
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

const handleClick = () => {
  navigate('/login');
};

  const quotes = [
    "Take a deep breath. You are stronger than you think.",
    "Inhale the future, exhale the past.",
    "Relaxation is the key to a calm mind and a healthy body.",
    "You don't have to control your thoughts. You just have to stop letting them control you.",
    "Peace begins with a single breath.",
    "The best way to capture moments is to pay attention. This is how we cultivate mindfulness.",
    "Calm mind brings inner strength and self-confidence.",
    "Let go of what you can't control and focus on what you can.",
  ];
  
  const positions = [
    { top: 3, left: 8 }, // Quote 1 
    { top:3, left: 36 }, // Quote 2
    { top: 34, left: 23 }, // Quote 3
    { top: 35, left: 75 }, // Quote 4
    { top: 65, left: 36 }, // Quote 5
    { top: 14, left: 58 }, // Quote 6
    { top: 65, left: 8 }, // Quote 7
    { top: 56, left: 58 }, // Quote 8
  ];

  const showRelaxationTip = () => {
    const tips = [
      "Close your eyes and take 5 deep breaths.",
      "Stretch your body for 2 minutes to release tension.",
      "Listen to calming music for 5 minutes.",
      "Practice mindfulness by focusing on the present moment.",
      "Take a short walk in nature to clear your mind.",
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    toast.info(`💡 Relaxation Tip: ${randomTip}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  


  return (

    <div>

      
    <div className="min-h-screen w-full flex items-center justify-center px-2 py-8 bg-gray-800">

      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 text-lg leading-8 text-center text-white">

      <div className="flex flex-wrap gap-0 justify-between items-center self-start min-h-[51px] max-md:max-w-full">

      <div className="animate-blink w-28 h-24  rounded-full bg-green-300 shadow-lg shadow-green-300/50  ">
      
     
      <img src={logo_icon} alt="App Logo" className="relative w-24  md:w-32 lg:w-40 object-contain" />
      </div>
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[623px] max-md:max-w-full">
        <div className="flex flex-wrap justify-center items-center min-h-[51px] ">
          <Link to="/stresscheckerhome"> <button className="self-stretch my-auto  w-[150px] hover:text-teal-300 transition duration-300">Stress Checker</button></Link>
          <Link to="/quickrelaxation"><button className="self-stretch my-auto w-[150px] hover:text-teal-300 transition duration-300">Quick Relaxation</button></Link>
          <Link to="/movementshome"><button className="self-stretch my-auto w-[150px] hover:text-teal-300 transition duration-300">Movements</button></Link>
          <Link to="/learnmorehome"><button className="self-stretch my-auto w-[154px] hover:text-teal-300 transition duration-300">Learn more</button></Link>
          
        </div>
        </div>
        <div className="flex gap-0.5 justify-center items-center self-stretch my-auto min-h-[51px] min-w-[240px] w-[480px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[480px] max-md:max-w-full">
          <div className="flex justify-center items-center min-h-[51px]">
            <Link to="/"><button className="self-stretch my-auto text-teal-500 w-[120px]">Home</button></Link>
            <Link to="/aboutus"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">About Us</button></Link>
            <Link to="/mobileapp"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">Mobile App</button></Link>
            <Link to="/premierplan"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">Premier plan</button></Link>
          </div>
          </div>
        
      </div>
      <div></div>
        {/*<img src={CircleGaps} alt=""  className="object-cover absolute flex mr-28"/>*/}
   <div className="flex relative flex-col items-start self-center pt-20 pr-12 pb-0 mt-0 mb-28 ml-24 max-w-full min-h-[503px] rounded-[202px] w-[568px] max-md:pt-24 max-md:pr-5">
   <div className="absolute -bottom-36 -left-44 w-56 h-56 bg-teal-600 rounded-full animate-pulse blur-2xl"></div>
   <div className="absolute -bottom-80 -left-44 w-56 h-56 bg-teal-600 rounded-full animate-pulse blur-2xl"></div>
 
   <img
                src={YogaBackgroundArt}
                alt=""
                className="object-cover absolute inset-0 size-full"
              />
              <div className="relative text-3xl md:text-4xl text-left font-bold text-white leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                Empowering Minds <br />
                to Achieve Stress-Free Living
                <br /> and Well-Being
              </div>
              <div className="relative mt-9 text-lg text-left leading-8 text-neutral-400 max-md:max-w-full">
                Our mission is to provide users with effective tools and resources
                to manage stress and enhance their overall mental well-being.
                Through guided relaxation techniques, personalized mindfulness
                exercises, <br />
              </div>
       
          <div className="flex gap-5 justify-between mt-12 ml-0 md:ml-36 max-w-full text-lg font-medium tracking-wider text-white w-[360px] max-md:mt-10 max-md:ml-2.5">
                <button
                  onClick={handleClick}
                  className="relative px-10 py-3 bg-teal-500 max-md:px-5 rounded-2xl"
                >
                  Try for free
                </button>
                <Link to="/contactus">
                  <button className="relative self-start px-10 py-3 bg-slate-600 border-spacing-0 max-md:px-5 rounded-2xl">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            

    
    </div>
      </div>



       

    </div>
</div>

<Footer />
</div>

  );
}