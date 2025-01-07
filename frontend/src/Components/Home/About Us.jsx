import React from 'react';
import {Link} from "react-router-dom"
import YogaBackgroundArt from '../../assets/Yoga background art.png'
import TheGirl from '../../assets/Thegirl.png'
import logo_icon from '../../assets/logo1.svg'

const AboutUsPage = () => {
    return (
        
<div className="min-h-screen w-full flex items-center justify-center px-2 py-8 bg-gray-800">

<div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
<div className="flex flex-wrap gap-10 text-lg leading-8 text-center text-white">

<div className="flex flex-wrap gap-0 justify-between items-center self-start min-h-[51px] max-md:max-w-full">
<div className="animate-blink w-28 h-24  rounded-full bg-green-300 shadow-lg shadow-green-300/50   ">
      
     
      <img src={logo_icon} alt="App Logo" className="w-24  md:w-32 lg:w-40 object-contain" />
      </div>
<div className="flex flex-col self-stretch my-auto min-w-[240px] w-[623px] max-md:max-w-full">
  <div className="flex flex-wrap gap-px justify-center items-center min-h-[51px]">
  <Link to="/stresscheckerhome"> <button className="self-stretch my-auto w-[150px] hover:text-teal-300 transition duration-300">Stress Checker</button></Link>
          <Link to="/quickrelaxation"><button className="self-stretch my-auto w-[150px] hover:text-teal-300 transition duration-300">Quick Relaxation</button></Link>
          <Link to="/movementshome"><button className="self-stretch my-auto w-[150px] hover:text-teal-300 transition duration-300">Movements</button></Link>
          <Link to="/learnmorehome"><button className="self-stretch my-auto w-[154px] hover:text-teal-300 transition duration-300">Learn more</button></Link>
    
  </div>
  </div>
  <div className="flex gap-0.5 justify-center items-center self-stretch my-auto min-h-[51px] min-w-[240px] w-[480px] max-md:max-w-full">
  <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[480px] max-md:max-w-full">
    <div className="flex justify-center items-center min-h-[51px]">
      <Link to="/"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">Home</button></Link>
      <Link to="/aboutus"><button className="self-stretch my-auto  text-teal-500 w-[120px]">About Us</button></Link>
      <Link to="/mobileapp"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">Mobile App</button></Link>
      <Link to="/premierplan"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">Premier plan</button></Link>
    </div>
  </div>
</div>
  {/*<img src={CircleGaps} alt=""  className="object-cover absolute flex mr-28"/>*/}
  <div className="flex relative flex-col items-start self-center pt-20 pr-12 pb-0 mt-0 mb-28 ml-24 max-w-full min-h-[503px] rounded-[202px] w-[568px] max-md:pt-24 max-md:pr-5">

    <img src={YogaBackgroundArt} alt=""  className="object-cover absolute inset-0 size-full"/>

    <div className="relative text-4xl text-left font-bold text-white leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
      Happiness is a decision, <br />
      not adestination. 
      <br /> Realize it with us!
    </div>
    <div className="relative mt-9 text-lg text-left leading-8 text-neutral-400 max-md:max-w-full">
      Our mission is to provide users with effective tools and resources
      to manage stress and enhance their overall mental well-being.
      Through guided relaxation techniques, personalized mindfulness
      exercises, <br />
    </div>
    <div className="flex gap-5 justify-between mt-12 ml-36 max-w-full text-lg font-medium tracking-wider text-white w-[360px] max-md:mt-10 max-md:ml-2.5">
          <button className="relative px-10 py-3 bg-teal-500 max-md:px-5">View More</button>
         
        </div>
 
  </div>

  <div className="w-1/2 text-right">
<img src={TheGirl} alt="" className="w-120 h-120 left-[100px] top-[100px] "/>
</div>
</div>
</div>
            
        </div>
        </div>
    );
}

export default AboutUsPage;