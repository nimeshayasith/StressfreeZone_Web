// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate,Link} from "react-router-dom"
import YogaBackgroundArt from '../../assets/Yoga background art.png'
import quickrelaxationRightSide from '../../assets/quick relaxation.png'
import logo_icon from '../../assets/logo1.svg'
import Footer from "./Footer";
import relaxingAudio from '../../assets/relaxing-audio.mp3';
import quickrelaxationaudio from '../../assets/quickrelaxationaudio.jpg'


export default function Home() {


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
           <Link to="/stresscheckerhome"> <button className="self-stretch my-auto  w-[150px] hover:text-teal-300 transition duration-300">Stress Checker</button></Link>
           <Link to="/quickrelaxation"><button className="self-stretch my-auto w-[150px] text-teal-500 transition duration-300">Quick Relaxation</button></Link>
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
        <div className="flex relative flex-col items-start self-center pt-20 pr-12 pb-0 mt-0 mb-28 ml-24 max-w-full min-h-[503px] rounded-[202px] w-[568px] max-md:pt-24 max-md:pr-5">

          <img src={YogaBackgroundArt} alt=""  className="object-cover absolute inset-0 size-full"/>

          <div className="relative text-4xl text-left font-bold text-white leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            In moments of stress,  <br />
            pause and breathe; <br />peace is just a breath way
            
          </div>
          <div className="relative mt-9 text-lg text-left leading-8 text-neutral-400 max-md:max-w-full">
          Access guided meditation tracks and calming audio sessions designed to help you unwind in just a few minutes. Our quick relaxation techniques are perfect for managing stress during a busy day. <br />
          </div>
       
       
        </div>

        <div className="w-2/5 text-right -mt-36">
      <img src={quickrelaxationRightSide} alt="" className="w-100 h-100  "/>
      </div>
    </div>
      </div>
       {/* New Audio and Image Section Before Footer */}
   <div className="flex justify-center items-center rounded-md  px-10 py-6 mt-8 mb-8 gap-10">
        {/* Audio Player Section */}
        <div className="w-3/5 text-center  p-8 bg-gray-900 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
  <h3 className="text-3xl font-semibold text-teal-400 tracking-wide">
    🌿 Calm Your Mind
  </h3>
  <p className="text-gray-400 mt-2 italic text-lg">
    A gentle audio journey to tranquility
  </p>

  <h2 className="text-3xl font-bold mt-6 text-white leading-relaxed">
    "Pause, inhale deeply, and let the tension fade away..."
  </h2>

  <div className="mt-6">
    <audio
      controls
      className="w-full rounded-lg shadow-md   "
    >
      <source src={relaxingAudio} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  </div>
</div>


        {/* Image Section */}
        <div className="w-2/5">
          <img
            src={quickrelaxationaudio}
            alt="Relaxing Exercise"
            className="rounded-lg shadow-lg w-96 h-auto  p-8"
          />
        </div>
      </div>
    </div>
    
</div>
  

<Footer />
</div>

  );
}