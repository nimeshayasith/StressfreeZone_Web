import React from "react";
import YogaBackgroundArt from '../assets/Yoga background art.png'
import YogaGirlRightSide from '../assets/Yoga girl right side.png'
import logo_icon from '../assets/logo1.svg'
import group4 from '../assets/Group 4.png'
import group7 from '../assets/Group 7.png'
import group8 from '../assets/Group 8.png'
import breathingword from '../assets/BREATHING.png'
import logocirclewithstyle from '../assets/logo with style.png'
import breath from '../assets/breath.png'
import base from '../assets/base.png'
import phoneSelection from '../assets/Phone Selection.png'
import frame2 from '../assets/Frame 2.png'



export default function Home() {
  const navigate = useNavigate();

const handleClick = () => {
  navigate('/login');
};

  return (

    <div>

      
    <div className="min-h-screen w-full flex items-center justify-center px-2 py-14 bg-gray-800">

      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 text-lg leading-8 text-center text-white">

      <div className="flex flex-wrap gap-0 justify-between items-center self-start min-h-[51px] max-md:max-w-full">
      <img src={logo_icon} alt="App Logo" className="object-contain w-44 max-w-full" />
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[623px] max-md:max-w-full">
        <div className="flex flex-wrap gap-px justify-center items-center min-h-[51px]">
          <button className="self-stretch my-auto text-teal-500 w-[150px]">Stress Checker</button>
          <button className="self-stretch my-auto w-[150px]">Quick Relaxation</button>
          <button className="self-stretch my-auto w-[150px]">Movements</button>
          <button className="self-stretch my-auto w-[154px]">Learn more</button>
          
        </div>
        </div>
        <div className="flex gap-0.5 justify-center items-center self-stretch my-auto min-h-[51px] min-w-[240px] w-[480px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[480px] max-md:max-w-full">
          <div className="flex justify-center items-center min-h-[51px]">
            <button className="self-stretch my-auto w-[120px]">Home</button>
            <button className="self-stretch my-auto w-[120px]">About Us</button>
            <button className="self-stretch my-auto w-[120px]">Mobile App</button>
            <button className="self-stretch my-auto w-[120px]">Premier plan</button>
          </div>
        </div>
      </div>
        {/*<img src={CircleGaps} alt=""  className="object-cover absolute flex mr-28"/>*/}
        <div className="flex relative flex-col items-start self-center pt-20 pr-12 pb-0 mt-0 mb-28 ml-24 max-w-full min-h-[503px] rounded-[202px] w-[568px] max-md:pt-24 max-md:pr-5">

          <img src={YogaBackgroundArt} alt=""  className="object-cover absolute inset-0 size-full"/>

          <div className="relative text-5xl text-left font-bold text-white leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
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
       
        <div className="flex gap-5 justify-between mt-16 ml-36 max-w-full text-lg font-medium tracking-wider text-white w-[360px] max-md:mt-10 max-md:ml-2.5">
          <button 
          onClick={handleClick} 
          className="relative px-14 py-5 bg-teal-500 max-md:px-5">Try for free</button>
          <button className="relative self-start px-3 py-5">Contact Us</button>
        </div>
        </div>

        <div className="w-1/2 text-right">
      <img src={YogaGirlRightSide} alt="" className="w-120 h-120 left-[100px] top-[100px] "/>
      </div>
    </div>
      </div>




    <div className="flex overflow-hidden flex-col items-center px-16 pb-36 bg-slate-700/50 bg-opacity-50 max-md:px-5 max-md:pb-24">
      <div className="ml-12 w-full max-w-[1407px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-010 max-md:max-w-full">
              <div className="max-w-full w-[550px]">
                <div className="flex gap-5 max-md:flex-col pl-10">
                <div className="flex flex-col mb-40 pl-0 w-[34%] max-md:ml-0 max-md:w-full">

                    <div className="flex relative flex-col  w-[200px] max-md:py-24 max-md:pr-5 max-md:mt-10 max-md:text-4xl">
                      <img src={group4} className="relative  inset-7 -mt-8 object-cover"/>
  
                    </div>
                  </div>
                  <div className="flex flex-col ml-0 pl-10 w-[34%] max-md:ml-0 max-md:w-full">

                    <div className="flex relative flex-col  w-[200px] max-md:py-24 max-md:pr-5 max-md:mt-10 max-md:text-4xl">
                      <img src={group7} className="absolute inset-7 -mt-8 object-cover"/>
                      
                    </div>
                  </div>
                  <div className="flex flex-col ml-0 pl-20 w-[34%] max-md:ml-0 max-md:w-full">

                    <div className="flex relative flex-col  w-[200px] max-md:py-24 max-md:pr-5 max-md:mt-10 max-md:text-4xl">
                      <img src={group8} className="absolute inset-7 -mt-8 object-cover"/>
  
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start pl-24 mt-0 max-md:max-w-full">
              <img src={breathingword} alt="" />
                <div className="self-stretch mt-8 text-2xl leading-loose uppercase text-slate-400 tracking-[6.4px] max-md:max-w-full">
                  QUICK RELAXATION for calm & focus{" "}
                </div>
                <button className="px-14 py-5 mt-16 max-w-full text-lg font-medium tracking-wider text-white bg-teal-600 w-[221px] max-md:px-5 max-md:mt-10">
                  Let’s Start
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full relative">
            <div className="flex justify-center items-center px-20 mt-64 rounded-full aspect-square max-md:px-5 max-md:py-24 max-md:mt-10 relative">
               <img src={base} alt="" className="absolute w-96 h-96 object-cover rounded-full" />
               <img src={breath} alt="" className="absolute w-64 h-64 object-cover rounded-full" />
               <img src={logocirclewithstyle} alt="" className="absolute inset-0 m-auto w-[100%] h-[100%] rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
 



    
      <div className="flex relative flex-col items-center px-0 pt-80 pb-0 mt-0 w-full min-h-[3973px] max-md:py-24 max-md:mt-0 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-20 py-14 -mt-80 font-bold bg-slate-800 bg-opacity-50 max-md:px-5 max-md:max-w-full">
          <div className="flex relative flex-col pt-5 pr-2.5 pl-10 w-full max-w-[1446px] min-h-[750px] pb-[0px] rounded-[202px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
           <img src={phoneSelection} alt="" /> 
          </div>
        </div>


        <div className="flex relative flex-col items-center px-0 pt-80 pb-0 mt-0 w-full min-h-[3973px] max-md:py-24 max-md:mt-0 max-md:max-w-full">
       <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-0 py-14 -mt-80 font-bold bg-slate-800 bg-opacity-50 max-md:px-5 max-md:max-w-full">
         <div className="flex relative flex-col pt-0 pr-0 pl-0 w-full max-w-[1446px] min-h-[[750]px] pb-[0px] rounded-[202px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
          <img src={frame2} alt="" />
         </div>
       </div>
       </div>


        <div className="flex relative flex-col mt-10 mb-0 w-full max-w-[1463px] max-md:mb-2.5 max-md:max-w-full">
         
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col px-7 pt-72 min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
                 
                  <div className="flex relative z-10 flex-col px-16 py-10 bg-slate-600 rounded-[50px] max-md:px-5">
                    <div className="self-center text-4xl font-medium text-center text-white leading-[50px] w-[367px]">
                      Body and Mind Relaxation
                    </div>
                    <div className="mt-6 text-lg leading-8 text-center text-white">
                      You can choose the both, Mind relaxation Techniques.....
                    </div>
                    <div className="self-start mt-5 ml-14 text-lg font-medium tracking-wider text-white max-md:ml-2.5">
                      Learn More
                    </div>
                    <div className="flex relative flex-col justify-center self-center px-5 py-px mt-3.5 max-w-full aspect-[87.5] w-[175px]">
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
               
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
               
              </div>
            </div>
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
                 
                  <div className="flex relative gap-0.5 self-end mr-28 max-md:mr-2.5">
                    
                  </div>
                  <div className="flex relative z-10 flex-col items-center px-16 pt-9 pb-4 mt-16 font-medium text-white bg-slate-600 max-md:px-5 max-md:mt-10">
                    <div className="text-4xl text-center leading-[50px] w-[329px]">
                      Stress Detection System
                    </div>
                    <div className="self-stretch mt-4 text-lg leading-8 text-center">
                      You can track your stress with this our product. This is
                      new technological Feature
                    </div>
                    <div className="mt-4 text-lg tracking-wider">
                      Learn More
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
                 
                  <div className="flex relative gap-0.5 self-end mr-28 max-md:mr-2.5">
                    
                    
                  </div>
                  <div className="flex relative z-10 flex-col items-center px-16 pt-9 pb-4 mt-16 text-white bg-slate-600 rounded-[50px] max-md:px-5 max-md:mt-10">
                    <div className="text-4xl text-center leading-[50px] w-[329px]">
                      Stress Detection System
                    </div>
                    <div className="self-stretch mt-4 text-lg leading-8 text-center">
                      You can track your stress with this our product. This is
                      new technological Feature
                    </div>
                    <div className="mt-4 text-lg font-medium tracking-wider">
                      Learn More
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow px-7 pt-56 text-white min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
                
                  <div className="flex relative z-10 flex-col items-center pt-9 mt-16 bg-slate-600 rounded-[50px] max-md:mt-10">
                    <div className="text-4xl text-center leading-[50px] w-[286px]">
                      Educational Content
                    </div>
                    <div className="mt-6 ml-4 text-lg leading-8 text-center">
                      You can learn how to control your stress level within some
                      guidance articles .
                    </div>
                    <div className="flex relative flex-col self-stretch px-20 pb-5 mt-5 w-full text-lg font-medium tracking-wider aspect-[9.465] rounded-[50px] max-md:px-5">
                     
                      <div className="relative z-10 self-center mt-0">
                        Learn More
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="flex flex-col items-center self-center px-16 py-24 ml-3 max-w-full mt-[817px] rounded-[50px] w-[1011px] max-md:px-5 max-md:mt-10">
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
              <div className="grow gap-2.5 self-stretch px-9 py-2 w-full text-base font-bold text-center text-white bg-teal-500 rounded min-h-[40px] max-md:px-5 max-md:mt-10">
                Signup for Free
              </div>
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

  );
}