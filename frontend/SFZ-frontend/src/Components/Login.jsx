
import React from 'react'
import Meditation_1 from '../assets/Meditation image with frame.svg'
import logo_icon from '../assets/logo1.svg'
import tik_icon from '../assets/tik_icon.svg'
import mdi_eye from '../assets/mdi_eye.svg'

export default function login  ()  {

    return (
      <div className="flex overflow-hidden flex-wrap gap-10 px-20 py-14  bg-slate-700 max-md:px-5 justify-between ">
        <div className="flex flex-col self-start max-md:max-w-1/2">
          <div className="flex gap-2.5 self-start font-semibold text-white">
          
            <img src={logo_icon} alt="" className='w-24 h-24'/>

            <div className="flex flex-col my-auto">
              <div className="text-2xl">CALM MIND</div>
              <div className="mt-1.5 text-base">Stress Free Zone</div>
            </div>
          </div>
          <div className="flex flex-col items-start pl-20 mt-12 w-full text-base font-medium text-slate-400 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div className=" text-3xl font-semibold text-white">
              Create an Account 👋
            </div>
            <div className="mt-5 text-lg leading-loose">
              Kindly fill in your details to create an account
            </div>
            <div className="mt-12 text-gray-500 max-md:mt-10">Your fullname*</div>
            <div className="px-8 py-6 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5">
              Enter your name
            </div>
            <div className="mt-5 text-gray-500">Email address*</div>
            <div className="px-8 py-5 mt-3 max-w-full rounded-md border border-solid bg-zinc-800 border-slate-400 w-[426px] max-md:px-5">
              Enter email address
            </div>
            <div className="mt-5 text-gray-500">Create password*</div>
            <div className="flex gap-10 px-6 py-5 mt-3 rounded-md border border-solid bg-zinc-800 border-slate-400 max-md:pl-5 max-md:max-w-full">
              <div>Create a password</div>
             <img src={mdi_eye} alt="" />
            </div>
            <div className="flex gap-3.5 mt-5 text-gray-500">
          
              <img src={tik_icon} alt="" />
              <div className="basis-auto">I agree to terms & conditions</div>
            </div>
            <div className="px-16 py-6 mt-9 text-center text-white bg-teal-500 rounded-md max-md:px-5 max-md:max-w-full">
              Register Account
            </div>
          </div>
        </div>
        <div className="w-1/2 text-right">
        <img src={Meditation_1} alt="" className="w-200 h-200 left-[71px] top-[83px] "/>
        </div>

      </div>
    );
    }


