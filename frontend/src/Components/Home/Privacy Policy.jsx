import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import YogaBackgroundArt from "../../assets/Yoga background art.png";
import logo_icon from "../../assets/logo1.svg";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 bg-gray-800 relative"
        style={{
          backgroundImage: `url(${YogaBackgroundArt})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Back Arrow */}
        <IoIosArrowBack
          className="absolute top-6 left-6 text-white cursor-pointer text-3xl z-10"
          onClick={() => navigate(-1)} // Navigate to the previous page
        />

        {/* Content */}
        <div className="relative flex flex-col items-center text-white text-center max-w-4xl px-6 py-12 rounded-lg bg-black/50 shadow-lg">
         <div className="animate-blink w-28 h-24  rounded-full bg-green-300 shadow-lg shadow-green-300/50  ">
               <img src={logo_icon} alt="App Logo" className="relative w-24  md:w-32 lg:w-40 object-contain" />
               </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-6">Privacy Policy</h1>
          <p className="mt-3 text-neutral-300">Last Updated: [Insert Date]</p>
          <div className="text-left mt-6 leading-7 text-neutral-200">
  <p><strong>1. Introduction</strong><br />
    Welcome to <strong>Stress Free Zone!</strong> <br/>We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our app.
  </p>

  <br />
  <p><strong>2. Information We Collect</strong><br />
    We may collect the following types of information:
  </p>
  <ul className="list-disc pl-6">
    <li><strong>Personal Information:</strong> Name, email address, age, and other details you provide during registration or surveys.</li>
    <li><strong>Usage Data:</strong> Information about how you interact with the app, such as stress level inputs, meditation sessions, and feature usage.</li>
    <li><strong>Device Information:</strong> Device type, operating system, and IP address for technical support and analytics.</li>
  </ul>
  <br />
  <p><strong>3. How We Use Your Information</strong><br />
    We use your information to:
  </p>
  <ul className="list-disc pl-6">
    <li>Calculate and provide stress level insights.</li>
    <li>Personalize your experience, including recommendations for relaxation techniques and soundscapes.</li>
    <li>Improve our app’s features and functionality.</li>
    <li>Send you reminders, updates, and educational content (if you opt-in).</li>
  </ul>
  <br />
  <p><strong>4. Data Sharing</strong><br />
    We do not sell or share your personal information with third parties except:
  </p>
  <ul className="list-disc pl-6">
    <li>With your consent.</li>
    <li>To comply with legal obligations.</li>
    <li>To protect our rights or the safety of others.</li>
  </ul>
  <br />
  <p><strong>5. Data Security</strong><br />
    We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
  </p>
  <br />
  <p><strong>6. Your Rights</strong><br />
    You have the right to:
  </p>
  <ul className="list-disc pl-6">
    <li>Access, update, or delete your personal information.</li>
    <li>Opt-out of receiving promotional communications.</li>
    <li>Request a copy of your data.</li>
  </ul>
  <br />
  <p><strong>7. Changes to This Policy</strong><br />
    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of significant updates.
  </p>
  <br />
  <p><strong>8. Contact Us</strong><br />
    If you have questions about this Privacy Policy, please contact us at <strong>calmmind.sfz@gmail.com</strong>.
  </p>
</div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
