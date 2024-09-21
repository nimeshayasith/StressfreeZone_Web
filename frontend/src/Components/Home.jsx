// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate} from "react-router-dom"
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


        <div className="flex relative flex-col items-center px-0 pt-80 pb-0 mt-0 w-full min-h-[200px] max-md:py-24 max-md:mt-0 max-md:max-w-full">
       <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-0 py-14 -mt-80 font-bold bg-slate-800 bg-opacity-50 max-md:px-5 max-md:max-w-full">
         <div className="flex relative flex-col pt-0 pr-0 pl-0 w-full max-w-[1446px] min-h-[[750]px] pb-[0px] rounded-[202px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
          <img src={frame2} alt="" />
         </div>
       </div>
       </div>


        <div className="flex relative flex-col mt-0 mb-0 w-full max-w-[1463px] max-md:mb-2.5 max-md:max-w-full">
         
          <div className="mt-0 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col px-7 pt-0 min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
                 

                

              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/633eda11d41fb908cbf1a7d371e3778a86febcb1159c6abd43bc360c6fa1006c?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/633eda11d41fb908cbf1a7d371e3778a86febcb1159c6abd43bc360c6fa1006c?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/633eda11d41fb908cbf1a7d371e3778a86febcb1159c6abd43bc360c6fa1006c?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/633eda11d41fb908cbf1a7d371e3778a86febcb1159c6abd43bc360c6fa1006c?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/633eda11d41fb908cbf1a7d371e3778a86febcb1159c6abd43bc360c6fa1006c?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/633eda11d41fb908cbf1a7d371e3778a86febcb1159c6abd43bc360c6fa1006c?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/633eda11d41fb908cbf1a7d371e3778a86febcb1159c6abd43bc360c6fa1006c?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/633eda11d41fb908cbf1a7d371e3778a86febcb1159c6abd43bc360c6fa1006c?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                className="object-cover absolute inset-0 size-full"
              />
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
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e08067244a55a5f94a8accaf39010d97f5c7e98054014b8ebe7379c46450da?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65c732432b32db78f7696e7a7aad3ab43a02b5b6db2a05ac7839d9665ece605e?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                    className="object-contain w-full aspect-[142.86]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/780e209c-e35b-4e37-a899-284604a025af?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/780e209c-e35b-4e37-a899-284604a025af?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/780e209c-e35b-4e37-a899-284604a025af?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/780e209c-e35b-4e37-a899-284604a025af?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/780e209c-e35b-4e37-a899-284604a025af?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/780e209c-e35b-4e37-a899-284604a025af?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/780e209c-e35b-4e37-a899-284604a025af?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/780e209c-e35b-4e37-a899-284604a025af?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
              className="object-contain w-full aspect-[0.82] rounded-[50px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2a18a5f4-dfa0-4e9f-b0ef-203af28c8b66?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a18a5f4-dfa0-4e9f-b0ef-203af28c8b66?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a18a5f4-dfa0-4e9f-b0ef-203af28c8b66?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a18a5f4-dfa0-4e9f-b0ef-203af28c8b66?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a18a5f4-dfa0-4e9f-b0ef-203af28c8b66?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a18a5f4-dfa0-4e9f-b0ef-203af28c8b66?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a18a5f4-dfa0-4e9f-b0ef-203af28c8b66?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a18a5f4-dfa0-4e9f-b0ef-203af28c8b66?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
              className="object-contain grow w-full aspect-[0.81] rounded-[50px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/edd57564f8d6c02c7530bddcf4d6c3ff91e99722071072fa8ff66606f316456a?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/edd57564f8d6c02c7530bddcf4d6c3ff91e99722071072fa8ff66606f316456a?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edd57564f8d6c02c7530bddcf4d6c3ff91e99722071072fa8ff66606f316456a?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/edd57564f8d6c02c7530bddcf4d6c3ff91e99722071072fa8ff66606f316456a?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/edd57564f8d6c02c7530bddcf4d6c3ff91e99722071072fa8ff66606f316456a?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edd57564f8d6c02c7530bddcf4d6c3ff91e99722071072fa8ff66606f316456a?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/edd57564f8d6c02c7530bddcf4d6c3ff91e99722071072fa8ff66606f316456a?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/edd57564f8d6c02c7530bddcf4d6c3ff91e99722071072fa8ff66606f316456a?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                className="object-cover absolute inset-0 size-full"
              />
<div className="flex relative gap-0.5 self-end mr-28 max-md:mr-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/785146d6a3a43f3e0309b81a05e0999ce33b1afc8fdd0cdc3f78c1ded3e6ed54?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                  className="object-contain shrink-0 w-full aspect-[1.5]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff766470818b161cd2cb2de19d6b4ebdd519e8842256e326e62529552203c6ae?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                  className="object-contain shrink-0 w-full aspect-[1.88]"
                />
              </div>
              <div className="flex relative z-10 flex-col items-center px-16 pt-9 pb-4 mt-16 font-medium text-white bg-slate-600 max-md:px-5 max-md:mt-10">
                <div className="text-4xl text-center leading-[50px] w-[329px]">
                  Stress Detection System
                </div>
                <div className="self-stretch mt-4 text-lg leading-8 text-center">
                  You can track your stress with this our product. This is new
                  technological Feature
                </div>
                <div className="mt-4 text-lg tracking-wider">Learn More</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/439136ebfe2356d65f462da3c3005291ff4c5930498bfe5256dad6162b1f3fb6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                  className="object-contain mt-3 w-32 max-w-full aspect-[62.5]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-6 pt-56 w-full min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2af8cabef6df2137fb05768e3959e9423fa51a54e232506c4c80e328f35bd8ab?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af8cabef6df2137fb05768e3959e9423fa51a54e232506c4c80e328f35bd8ab?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af8cabef6df2137fb05768e3959e9423fa51a54e232506c4c80e328f35bd8ab?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af8cabef6df2137fb05768e3959e9423fa51a54e232506c4c80e328f35bd8ab?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af8cabef6df2137fb05768e3959e9423fa51a54e232506c4c80e328f35bd8ab?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af8cabef6df2137fb05768e3959e9423fa51a54e232506c4c80e328f35bd8ab?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af8cabef6df2137fb05768e3959e9423fa51a54e232506c4c80e328f35bd8ab?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2af8cabef6df2137fb05768e3959e9423fa51a54e232506c4c80e328f35bd8ab?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative gap-0.5 self-end mr-28 max-md:mr-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe50e46d2f68310eee4e7560cc4c1089dda15f0a074d58bf3c5343a44a7ad864?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                  className="object-contain shrink-0 w-full aspect-[1.5]"
                />
 <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7a8ce625454134059542c700292fef50560e3f6d46fb5219615ecea0627514c?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                  className="object-contain shrink-0 w-full aspect-[1.88]"
                />
              </div>
              <div className="flex relative z-10 flex-col items-center px-16 pt-9 pb-4 mt-16 text-white bg-slate-600 rounded-[50px] max-md:px-5 max-md:mt-10">
                <div className="text-4xl text-center leading-[50px] w-[329px]">
                  Stress Detection System
                </div>
                <div className="self-stretch mt-4 text-lg leading-8 text-center">
                  You can track your stress with this our product. This is new
                  technological Feature
                </div>
                <div className="mt-4 text-lg font-medium tracking-wider">
                  Learn More
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/751116a8765d14cb885a6549e4363e4d5c1143842c4793bd7a8b13bc1c6868ae?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                  className="object-contain mt-3 w-32 max-w-full aspect-[62.5]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow px-7 pt-56 text-white min-h-[439px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d6e33aa6536459b03687206416e18fad97385fac4a7eb3b4a38e97174da6a6a6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e33aa6536459b03687206416e18fad97385fac4a7eb3b4a38e97174da6a6a6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e33aa6536459b03687206416e18fad97385fac4a7eb3b4a38e97174da6a6a6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e33aa6536459b03687206416e18fad97385fac4a7eb3b4a38e97174da6a6a6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e33aa6536459b03687206416e18fad97385fac4a7eb3b4a38e97174da6a6a6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e33aa6536459b03687206416e18fad97385fac4a7eb3b4a38e97174da6a6a6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e33aa6536459b03687206416e18fad97385fac4a7eb3b4a38e97174da6a6a6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d6e33aa6536459b03687206416e18fad97385fac4a7eb3b4a38e97174da6a6a6?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                className="object-cover absolute inset-0 size-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/869679aa44d39ed7c40e9b5828b777d29ea6c105a14eb20bcc15b5ba0e4d621f?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                className="object-contain self-end mr-24 w-3.5 aspect-[1.75] max-md:mr-2.5"
              />
              <div className="flex relative z-10 flex-col items-center pt-9 mt-16 bg-slate-600 rounded-[50px] max-md:mt-10">
                <div className="text-4xl text-center leading-[50px] w-[286px]">
                  Educational Content
                </div>
                <div className="mt-6 ml-4 text-lg leading-8 text-center">
                  You can learn how to control your stress level within some
                  guidance articles .
                </div>
                <div className="flex relative flex-col self-stretch px-20 pb-5 mt-5 w-full text-lg font-medium tracking-wider aspect-[9.465] rounded-[50px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/22b70e0f95ac676681456f470a15085c1cc4189be3894a1fd2328c5d9d0a2613?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative z-10 self-center mt-0">
                    Learn More
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/12aa8f53ef7f9370185dc6bff76fe4feee239825b1dad27ec73d40e5ddc4e512?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
                    className="object-contain self-end mt-3.5 max-w-full aspect-[250] w-[225px]"
                  />
                </div>
            
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b7efb277e508c7a90a67fe92cd5d974064ad4d2c0a5a4817f33b22364ba9b68?placeholderIfAbsent=true&apiKey=594a3f9e0e4b48d680109c1d93406c29"
        className="object-contain mt-56 ml-72 w-3 aspect-[1.5] max-md:mt-10 max-md:ml-2.5"
      />
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