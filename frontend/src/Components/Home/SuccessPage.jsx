import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo_icon from "../../assets/logo1.svg"; // Update the path accordingly
import Meditation_2 from "../../assets/Meditation_2.svg"; // Update the path accordingly

export default function SuccessPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-20 py-14 bg-gray-800">
      <ToastContainer />
      <div className="flex flex-col self-start max-md:max-w-full w-1/2 ml-20">
        {/* Logo and Heading */}
        <div className="flex gap-2.5 mt-5 self-start font-semibold text-white">
          <img src={logo_icon} alt="App Logo" className="w-16 h-16" />
          <div className="flex flex-col my-auto">
            <h1 className="text-2xl font-bold">CALM MIND</h1>
            <p className="mt-1.5 text-base">STRESS FREE ZONE</p>
          </div>
        </div>

        {/* Success Message */}
        <div className="flex flex-col items-start text-base font-medium max-w-[426px] text-slate-400 mt-10">
          <h1 className="text-3xl font-semibold text-white">Your Premier Plan is Ready!</h1>
          <p className="mt-4 text-lg leading-loose">
            Congratulations! Your card has been successfully added, and your Premier Plan is now active.
          </p>
          <p className="mt-4 text-lg leading-loose">
            You can now enjoy all the exclusive features and benefits of the Premier Plan.
          </p>

          {/* Back to Home Button */}
          <Link to="/login">
            <button className="w-full p-4 bg-teal-500 text-white py-3 rounded mt-6">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-1/2 text-right">
        <img src={Meditation_2} alt="Meditation" className="w-2/3 h-2/3 top-[100px]" />
      </div>
    </div>
  );
}