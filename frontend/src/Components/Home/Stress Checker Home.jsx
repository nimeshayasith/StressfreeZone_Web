// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate,Link} from "react-router-dom"
import YogaBackgroundArt from '../../assets/Yoga background art.png'
import YogaGirlRightSide from '../../assets/Yoga girl right side.png'
import logo_icon from '../../assets/logo1.svg'
import Footer from "./Footer";



export default function Home() {


  return (

    <div>

      
    <div className="min-h-screen w-full flex items-center justify-center px-2 py-14 bg-gray-800">

      <div className="flex flex-col px-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 text-lg leading-8 text-center text-white">

      <div className="flex flex-wrap gap-0 justify-between items-center self-start min-h-[51px] max-md:max-w-full">
      <img src={logo_icon} alt="App Logo" className="object-contain w-44 max-w-full" />
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[623px] max-md:max-w-full">
        <div className="flex flex-wrap gap-px justify-center items-center min-h-[51px]">
 
          <Link to="/stresscheckerhome"> <button className="self-stretch my-auto text-teal-500  w-[150px]">Stress Checker</button></Link>
          <Link to="/quickrelaxation"><button className="self-stretch my-auto w-[150px]">Quick Relaxation</button></Link>
          <Link to="/movementshome"><button className="self-stretch my-auto w-[150px]">Movements</button></Link>
          <Link to="/learnmorehome"><button className="self-stretch my-auto w-[154px]">Learn more</button></Link>
          
        </div>
        </div>
        <div className="flex gap-0.5 justify-center items-center self-stretch my-auto min-h-[51px] min-w-[240px] w-[480px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[480px] max-md:max-w-full">
          <div className="flex justify-center items-center min-h-[51px]">
            <Link to="/"><button className="self-stretch my-auto  w-[120px]">Home</button></Link>
            <Link to="/aboutus"><button className="self-stretch my-auto w-[120px]">About Us</button></Link>
            <Link to="/mobileapp"><button className="self-stretch my-auto w-[120px]">Mobile App</button></Link>
            <Link to="/premierplan"><button className="self-stretch my-auto  w-[120px]">Premier plan</button></Link>
          </div>
        </div>
      </div>
        {/*<img src={CircleGaps} alt=""  className="object-cover absolute flex mr-28"/>*/}
        <div className="flex relative flex-col items-start self-center pt-20 pr-12 pb-0 mt-0 mb-28 ml-24 max-w-full min-h-[503px] rounded-[202px] w-[568px] max-md:pt-24 max-md:pr-5">

          <img src={YogaBackgroundArt} alt=""  className="object-cover absolute inset-0 size-full"/>

          <div className="relative text-5xl text-left font-bold text-white leading-[55px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
         kk <br />
            nn
            <br /> mm
          </div>
          <div className="relative mt-9 text-lg text-left leading-8 text-neutral-400 max-md:max-w-full">
            Our mission is to provide users with effective tools and resources
            to manage stress and enhance their overall mental well-being.
            Through guided relaxation techniques, personalized mindfulness
            exercises, <br />
          </div>
       
       
        </div>

        <div className="w-1/2 text-right">
      <img src={YogaGirlRightSide} alt="" className="w-120 h-120 left-[100px] top-[100px] "/>
      </div>
    </div>
      </div>


      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-14 bg-gray-900 max-md:px-5 mb-16">
      <div className="flex flex-col items-center w-full max-w-[1455px] max-md:max-w-full">
        <h1 className="text-5xl font-bold text-center text-white leading-[58px] max-md:text-4xl max-md:leading-[54px]">
          Pick a plan that's <br /> right for you
        </h1>
        <p className="mt-12 text-base leading-7 text-center text-white max-md:mt-10">
          Pricing plans for businesses at every stage of growth. <br /> Try our risk-free for 14 days. No credit card required.
        </p>
        <div className="flex mt-24 max-w-full text-xl leading-normal text-center w-[612px] max-md:mt-10">
      <button className="flex-auto gap-3.5 self-stretch px-24 py-4 text-white whitespace-nowrap bg-emerald-400 rounded-md min-h-[66px] max-md:px-5">
        Monthly
      </button>
      <div className="flex flex-auto gap-4 items-center py-4 pr-14 pl-24 text-emerald-400 bg-white rounded-md border border-emerald-400 border-solid min-h-[66px] max-md:px-5">
        <span className="self-stretch my-auto">Yearly</span>
        <span className="gap-3.5 self-stretch pr-2.5 pl-2.5 my-auto h-8 bg-amber-200 rounded-md w-[110px]">
          Save 20%
        </span>
      </div>
    </div>
        <div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
        <div className="grid grid-cols-3 gap-4 p-5">
      <div className="bg-white h-auto rounded ">
        <div className="p-4">
          <button className="bg-gray-200 rounded p-2 font-semibold">Monthly</button>
          <div className="p-2 mb-1 text-blue-300">For all individuals and starters who
          want to start with domaining.</div>
          <hr />
<h1 className="font-bold text-5xl mt-2 p-2  ">$5</h1>
<p className="text-blue-300 font-semibold mb-2 p-2">Per member,Per month</p>
          <hr />
          <ul class="list-disc list-inside text-md text-blue-300 p-2 mb-2">
    <li >Access to All content</li>
    <li >1k lookups / per month</li>
    <li >No API credits</li>
    <li >10 Monitoring Quota</li>
    <li >60 minutes Monitoring interval</li>
    <li >20% discount on backorders</li>
  </ul>
  <button className="bg-blue-400 p-2 rounded font-semibold mt-3"> Start free 7-day trial</button>
  <p className="text-sm items-center text-zinc-500 mt-2">No credit card required</p>
     </div>
      </div>

      <div className="bg-purple-500 h-auto rounded">
      <div className="p-4">
          <button className="bg-gray-200 rounded p-2 font-semibold">Yearly</button>
          <div className="p-2 mb-1 text-white">For professional domain names
          investors with a big portfolio.</div>
          <hr />
<h1 className="font-bold text-5xl mt-2 p-2">$50</h1>
<p className="text-white font-semibold mb-2 p-2">Per member,Per month</p>
          <hr />
          <ul class="list-disc list-inside text-md text-white p-2 mb-2">
    <li >Access to All content</li>
    <li >1k lookups / per month</li>
    <li >Access both Sinhala and English content</li>
    <li >30K API credits / per month</li>
    <li >60 minutes Monitoring interval</li>
  </ul>
  <button className="bg-orange-200 p-2 font-semibold rounded mt-3"> Start free 7-day trial</button>
  <p className="text-sm items-center text-white mt-2">No credit card required</p>
        </div>
        </div>

      <div className="bg-white h-auto rounded">
      <div className="p-4">
          <button className="bg-gray-200 rounded p-2 font-semibold">Unlimited</button>
          <div className="p-2 mb-1 text-blue-300">For all individuals and starters who
          want to start with domaining.</div>
          <hr />
          
<h1 className="font-bold text-5xl p-2 mt-2">$150</h1>
<p className="text-blue-300 font-semibold mb-2 p-2">Per member,Per month</p>
          <hr />
          <ul class="list-disc list-inside text-md text-blue-300 p-2 mb-2">
    <li >Access to All features</li>
    <li >1k lookups </li>
    <li >30K API credits</li>
    <li >10 Monitoring Quota</li>
    <li >60 minutes Monitoring interval</li>
    <li >20% discount on backorders</li>
    <li >Domain Name Appraisal</li>
    <li >1p Monitoring</li>
    <li >Backlink Monitoring</li>
  </ul>

  <button className="bg-blue-400 p-2 rounded font-semibold mt-3"> Start free 7-day trial</button>
  <p className="text-sm items-center text-zinc-500 mt-y">No credit card required</p>
        </div>
      </div>
    </div>
        </div>
      </div>
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