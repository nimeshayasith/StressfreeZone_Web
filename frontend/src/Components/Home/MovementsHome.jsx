// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate,Link} from "react-router-dom"
import YogaBackgroundArt from '../../assets/Yoga background art.png'
import movementshomeRightSide from '../../assets/movements home.png'
import logo_icon from '../../assets/logo1.svg'
import Footer from "./Footer";
import sampleVideo from '../../assets/sample-video.mp4'; 



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
           <Link to="/quickrelaxation"><button className="self-stretch my-auto w-[150px] hover:text-teal-300 transition duration-300">Quick Relaxation</button></Link>
           <Link to="/movementshome"><button className="self-stretch my-auto w-[150px] text-teal-500 transition duration-300">Movements</button></Link>
           <Link to="/learnmorehome"><button className="self-stretch my-auto w-[154px] hover:text-teal-300 transition duration-300">Learn more</button></Link>
           
         </div>
         </div>
         <div className="flex gap-0.5 justify-center items-center self-stretch my-auto min-h-[51px] min-w-[240px] w-[480px] max-md:max-w-full">
         <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[480px] max-md:max-w-full">
           <div className="flex justify-center items-center min-h-[51px]">
            <Link to="/"><button className="self-stretch my-auto  w-[120px] hover:text-teal-300 transition duration-300">Home</button></Link>
            <Link to="/aboutus"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">About Us</button></Link>
            <Link to="/mobileapp"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">Mobile App</button></Link>
            <Link to="/premierplan"><button className="self-stretch my-auto w-[120px] hover:text-teal-300 transition duration-300">Premier plan</button></Link>
          </div>
        </div>
      </div>
        {/*<img src={CircleGaps} alt=""  className="object-cover absolute flex mr-28"/>*/}
        <div className="flex relative flex-col items-start self-center pt-20 pr-12 pb-0 mt-0 mb-28 ml-24 max-w-full min-h-[503px] rounded-[202px] w-[568px] max-md:pt-24 max-md:pr-5">

          <img src={YogaBackgroundArt} alt=""  className="object-cover absolute inset-0 size-full"/>

          <div className="relative text-4xl text-left font-bold text-white leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          Your body holds the key to releasing the mind’s tension-move with purpose, breathe with intent<br />
            
            
          </div>
          <div className="relative mt-9 text-lg text-left leading-8 text-neutral-400 max-md:max-w-full">
          Engage in guided movement sessions designed to release tension in your body. Whether you're at your desk or in a calm space, our movements will help you stay physically and mentally balanced. From yoga stretches to gentle exercises, find a session that suits you.<br />
          </div>
       
       
        </div>

        <div className="w-1/2 text-right -mt-12">
      <img src={movementshomeRightSide} alt="" className="w-120 h-120 left-[100px] top-[100px] "/>
      </div>
    </div>
      </div>


      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-14 bg-gray-900 max-md:px-5 mb-16">
      <section className="flex flex-col items-center text-center max-w-[677px]">
      <h1 className="text-5xl font-bold text-violet-600 max-md:max-w-full max-md:text-4xl">
        30 days for <span className="text-violet-600">$55</span>
      </h1>
      <p className="mt-5 mb-8 w-full text-lg text-neutral-500 max-md:max-w-full">
        All students are eligible to try our{" "}
        <span className="text-violet-600">30 Day UNLIMITED</span> Intro Special
        once. Take as many classes as you want, either in studio or online, for 30
        days straight.
      </p>
    </section>
      <video
        className="w-full max-w-5xl rounded-lg shadow-lg"
        controls
        autoPlay
        loop
        muted
      >
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


      <div className=" bg-slate-800">
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
              <Link to='/register'><button className="grow gap-2.5 self-stretch px-9 py-2 w-full text-base font-bold text-center text-white bg-teal-500 rounded min-h-[40px] max-md:px-5 max-md:mt-10">
                Signup for Free 
              </button></Link>
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