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
            

        <div className="w-full md:w-1/2 text-right -mt-7">
              <img
                src={YogaGirlRightSide}
                alt=""
                className="w-full md:w-120 h-auto md:h-120"
              />
      </div>
    </div>
      </div>




      <div className="flex overflow-hidden flex-col items-center px-8 pb-18 bg-slate-700/50 bg-opacity-50 max-md:px-2 max-md:pb-12">
      
  <div className="ml-6 w-full max-w-[1300px] max-md:max-w-full">
    <div className="flex gap-3 max-md:flex-col">
      <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:mt-4 max-md:max-w-full">
          <div className="max-w-full w-[400px]">
            <div className="flex gap-3 max-md:flex-col pl-6">
              <div className="flex flex-col mb-20 pl-0 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col w-[150px] max-md:py-12 max-md:pr-3 max-md:mt-6 max-md:text-2xl">
                  <img src={group4} className="relative inset-5 -mt-4 object-cover" />
                </div>
              </div>
              <div className="flex flex-col ml-0 pl-6 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col w-[150px] max-md:py-12 max-md:pr-3 max-md:mt-6 max-md:text-2xl">
                  <img src={group7} className="absolute inset-5 -mt-4 object-cover" />
                </div>
              </div>
              <div className="flex flex-col ml-0 pl-12 w-[30%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col w-[150px] max-md:py-12 max-md:pr-3 max-md:mt-6 max-md:text-2xl">
                  <img src={group8} className="absolute inset-5 -mt-4 object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start pl-16 mt-0 mb-7 max-md:max-w-full">
            <img src={breathingword} alt="" />
            <div className="self-stretch mt-4 text-xl leading-loose uppercase text-slate-400 tracking-[4.8px] max-md:max-w-full">
              QUICK RELAXATION for calm & focus
            </div>
            <Link to="quickbreath">
              <button className="px-10 py-3 mt-8 max-w-full text-base font-medium tracking-wider text-white bg-teal-600 w-[160px] max-md:px-4 max-md:mt-6">
                Let’s Start
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-3 w-[45%] max-md:ml-0 max-md:w-full relative">
      <div className="absolute -bottom-32 -left-44 w-56 h-56 bg-teal-600 rounded-full animate-pulse blur-2xl"></div>
      <div className="absolute -bottom-80 -left-44 w-56 h-56 bg-teal-600 rounded-full animate-pulse blur-2xl"></div>
        <div className="flex justify-center items-center px-12 mt-32 rounded-full aspect-square max-md:px-2 max-md:py-12 max-md:mt-6 relative">
          <img src={base} alt="" className="absolute w-72 h-72 object-cover rounded-full" />
          <img src={breath} alt="" className="absolute w-48 h-48 object-cover rounded-full" />
          <img src={logocirclewithstyle} alt="" className="absolute inset-0 m-auto w-[80%] h-[80%] rounded-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</div>

 

    
      <div className="flex relative flex-col items-center px-0 pt-96 pb-0 mt-6 w-full min-h-[900px] max-md:py-24 max-md:mt-0 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-20 py-14 -mt-80 font-bold bg-slate-800 bg-opacity-50 max-md:px-5 max-md:max-w-full">
          <div className="flex relative flex-col pt-5 pr-2.5 pl-10 w-full max-w-[1446px] min-h-[650px] pb-[0px] rounded-[202px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
           <img src={phoneSelection} alt="" /> 
          </div>
        </div>
        </div>

        <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center p-6 relative overflow-hidden border-8 border-transparent shadow-[0_0_0_8px_rgba(0,0,0,0.1)]">
      {/* Quotes in Circle Shapes */}
      {quotes.map((quote, index) => (
        <div
          key={index}
          className="absolute w-52 h-52 bg-teal-500 rounded-full flex items-center justify-center text-center text-white font-semibold p-4 shadow-lg transform hover:scale-110 transition-transform duration-300"
          style={{
            top: `${positions[index].top}%`,
            left: `${positions[index].left}%`,
          }}
        >
          "{quote}"
        </div>
      ))}

      {/* Button to Show Relaxation Tip */}
      
      <button
        className="fixed bottom-10 right-10 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
        onClick={showRelaxationTip}
      >
        Get a Relaxation Tip
      </button>
      
      {/* Toast Container */}
      <ToastContainer />
    </div>
       
      
       <div className="text-center text-white mb-0 mt-12">
 <hr />OUR CONTENT
  </div>
       <div className="text-center text-white text-3xl font-bold mb-10 mt-2">
    Let go of stress and anxiety with us <hr />
  </div>
    <div className="flex relative flex-col items-center px-0 pt-24 pb-0 mt-6 w-full min-h-[1300px] max-md:py-24 max-md:mt-0 max-md:max-w-full">
    
  
      <div className="mt-10 w-full max-md:max-w-full">
      
        <div className="flex gap-5 -mt-36 pr-16 max-md:flex-col">


          <div className="flex flex-col w-[33%]  max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
            <img src={placeholder1} alt="placeholder" className="object-cover absolute inset-0 size-full rounded-3xl" />
              <div className="flex relative z-10 flex-col items-center px-16 pt-9 pb-4 mt-16 font-medium text-white bg-slate-600 max-md:px-5 max-md:mt-10 rounded-xl">
                <div className="text-4xl text-center leading-[50px] w-[329px]">
                  Body and Mined Relaxation
                </div>
                <div className="self-stretch mt-4 text-lg leading-8 text-center">
                  You can choose the both Mind relaxation 
                  techniques from here
                </div>
                <div className="mt-4 text-lg tracking-wider">
                <button>Learn More</button>
                <hr />
                </div>
              </div>
            </div>
          </div>
          
        

             

          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              <img src={placeholder1}  alt="" className="rounded-3xl object-cover absolute inset-0 size-full"/>
     
              <div className="flex relative  rounded-xl z-10 flex-col items-center px-16 pt-9 pb-4 mt-16 font-medium text-white bg-slate-600 max-md:px-5 max-md:mt-10">
                <div className="text-4xl text-center leading-[50px] w-[329px]">
                  Schedule Reminder Service
                </div>
                <div className="self-stretch mt-4 text-lg leading-8 text-center">
                You can schedule your exercises reminders through this... 
                </div>
                <div className="mt-4 text-lg tracking-wider">
                <button>Learn More</button>
                <hr />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col ml-5  w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              <img src={placeholder3} alt="" className="rounded-3xl object-cover absolute inset-0 size-full"
              />
       
              <div className="flex relative rounded-xl z-10 flex-col items-center px-16 pt-9 pb-4 mt-16 font-medium text-white bg-slate-600 max-md:px-5 max-md:mt-10">
                <div className="text-4xl text-center leading-[50px] w-[329px]">
                  Meditation and Soundscape
                </div>
                <div className="self-stretch mt-4 text-lg leading-8 text-center">
                You can learn more about the meditation and soundscape from here
                 
                </div>
                <div className="mt-4 text-lg tracking-wider">
                <button>Learn More</button>
                <hr />
                </div>
              </div>
            </div>
          </div>
            </div>

            <div className="flex gap-5 pr-16  max-md:flex-col">
            <div className="flex flex-col mt-10 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              <img src={placeholder3} alt="" className="rounded-3xl object-cover absolute inset-0 size-full"
              />
       
              <div className="flex relative z-10 rounded-xl flex-col items-center px-16 pt-9 pb-4 mt-16 font-medium text-white bg-slate-600 max-md:px-5 max-md:mt-10">
                <div className="text-4xl text-center leading-[50px] w-[329px]">
                  Stress Detection System
                </div>
                <div className="self-stretch mt-4 text-lg leading-8 text-center">
                  You can track your stress with this our product. This is new
                  technological Feature
                </div>
                <div className="mt-4 text-lg tracking-wider">
                <button>Learn More</button>
                <hr />
                </div>
              </div>
            </div>
          </div>
          
        

             

          <div className="flex flex-col ml-5 mt-10 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              <img src={placeholder4} alt="" className="rounded-3xl object-cover absolute inset-0 size-full"
              />
       
              <div className="flex relative z-10 rounded-xl flex-col items-center px-16 pt-9 pb-4 mt-16 font-medium text-white bg-slate-600 max-md:px-5 max-md:mt-10">
                <div className="text-4xl text-center leading-[50px] w-[329px]">
                  Stress Detection System
                </div>
                <div className="self-stretch mt-4 text-lg leading-8 text-center">
                  You can track your stress with this our product. This is new
                  technological Feature
                </div>
                <div className="mt-4 text-lg tracking-wider">
                <button>Learn More</button>
                <hr />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-10 ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              <img src={placeholder6} alt="" className="rounded-3xl object-cover absolute inset-0 size-full"
              />
       
              <div className="flex relative z-10 flex-col rounded-xl items-center px-16 pt-9 pb-4 mt-16 font-medium text-white bg-slate-600 max-md:px-5 max-md:mt-10">
                <div className="text-4xl text-center leading-[50px] w-[329px]">
                  Educational Content
                </div>
                <div className="self-stretch mt-4 text-lg leading-8 text-center">
                  You can learn how to control your stress level within some guidance articles
                </div>
                <div className="mt-4 text-lg tracking-wider">
                <button>Learn More</button>
                <hr />
                </div>
              </div>
            </div>
          </div>


            </div>
          </div>
        </div>
       

       
<div className="relative flex overflow-hidden flex-col mb-16 items-center justify-center px-16 pb-52 bg-slate-700/50 bg-opacity-50 max-md:px-5 max-md:pb-24">
  {/* Meditation Image with Text Overlay */}
  <div className="w-full max-w-[1407px] max-md:max-w-full flex justify-center relative">
    <div>
      <img src={MeditationBackground} alt="" className="flex items-center" />
      {/* Text overlaying the image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Sweet Review from our clients</h1>
      </div>
    </div>
  </div>

  {/* Section for three columns, immediately after the text */}
  <div className="w-full flex justify-center -mt-20">
    <div className="flex gap-5 w-full max-w-[1407px] max-md:flex-col">
      
      {/* Column 1 */}
      <div className="flex flex-col w-[33%] max-md:w-full">
        <div className="flex flex-col px-6 pt-10 pb-10 min-h-[260px] bg-slate-950 text-center">
          <p className="text-white text-2xl">Jane Froster <hr /></p>
          <p className="text-white">“Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. Fusce tempus tellus sed.”</p>
        </div>
      </div>
      
      {/* Column 2 */}
      <div className="flex flex-col w-[33%] max-md:w-full">
        <div className="flex flex-col px-6 pt-10 pb-10 min-h-[260px] bg-slate-950 text-center">
          <p className="text-white text-2xl">Ninna Aguero <hr /></p>
          <p className="text-white">“Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. Fusce tempus tellus sed.”</p>
        </div>
      </div>
      
      {/* Column 3 */}
      <div className="flex flex-col w-[33%] max-md:w-full">
        <div className="flex flex-col px-6 pt-10 pb-10 min-h-[260px] bg-slate-950 text-center">
          <p className="text-white text-2xl">Samantha Krik <hr /></p>
          <p className="text-white">“Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. Fusce tempus tellus sed.”</p>
        </div>
      </div>
      
    </div>
  </div>
</div>




 
      

      <div className=" bg-slate-600">
      <div className="flex flex-col items-center self-center px-10 py-10 ml-36 max-w-full mt-[36px] w-[1011px] max-md:px-5 max-md:mt-10">
        <div className="text-5xl font-bold tracking-tight leading-tight text-center text-white max-md:max-w-full max-md:text-4xl">
          Try our 100% free Plan 7 days
        </div>
        <div className="self-stretch px-12 py-8 mt-6 w-full rounded-xl border-blue-900 border-solid bg-zinc-800 border-[3px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto text-base leading-7 text-center text-white max-md:mt-10 max-md:max-w-full">
                Get started with our free plan and make 10 lookups per month
                absolutely free!
                <br />
                <br />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <button className="grow gap-2.5 self-stretch px-9 py-2 w-full text-base font-bold text-center text-white bg-teal-500 rounded min-h-[40px] max-md:px-5 max-md:mt-10">
                Signup for Free 
              </button>
            </div>
          </div>
        </div>
        <div className="mt-14 text-2xl leading-none text-center text-white max-md:mt-10">
          Payment Methods
        </div>
       
        <div className="mt-5 text-base leading-loose text-center text-white">
          We accept Visa, Credit Card, Mastercard and Debit Card
        </div>
      </div>
      </div>
    </div>
</div>

<Footer />
</div>

  );
}