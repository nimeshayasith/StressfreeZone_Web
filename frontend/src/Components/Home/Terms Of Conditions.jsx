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
          <h1 className="text-3xl md:text-4xl font-bold mt-6">Terms & Conditions</h1>
          <p className="mt-3 text-neutral-300">Last Updated: [Insert Date]</p>
          <div className="mt-6 text-left leading-7 text-neutral-200">
            <p><strong>1. Acceptance of Terms</strong><br />By using Stress Free Zone, you agree to these Terms & Conditions. If you do not agree, please do not use the app.</p>
            <p><strong>2. Eligibility</strong><br />You must be at least [Insert Minimum Age] years old to use this app. By using the app, you confirm that you meet this requirement.</p>
            <p><strong>3. License to Use</strong><br />We grant you a limited, non-exclusive, and non-transferable license to use the app for personal, non-commercial purposes.</p>
            <p><strong>4. User Responsibilities</strong><br />You agree to: 
              <ul className="list-disc pl-6">
                <li>Provide accurate and complete information.</li>
                <li>Use the app only for lawful purposes.</li>
                <li>Not attempt to reverse-engineer, hack, or misuse the app.</li>
              </ul>
            </p>
            <p><strong>5. Intellectual Property</strong><br />All content, features, and functionality are owned by [Your App Name] and protected by copyright and intellectual property laws.</p>
            <p><strong>6. Disclaimer of Warranties</strong><br />The app is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free or meet your specific needs.</p>
            <p><strong>7. Limitation of Liability</strong><br />We are not liable for any indirect, incidental, or consequential damages arising from your use of the app.</p>
            <p><strong>8. Termination</strong><br />We reserve the right to suspend or terminate your access to the app at any time, with or without notice, for violations of these terms.</p>
            <p><strong>9. Governing Law</strong><br />These terms are governed by the laws of Sri Lanka. Any disputes will be resolved in the courts of [Your Jurisdiction].</p>
            <p><strong>10. Changes to Terms</strong><br />We may update these Terms & Conditions from time to time. Continued use of the app after changes constitutes acceptance of the updated terms.</p>
            <p><strong>11. Contact Us</strong><br />For questions about these Terms & Conditions, please contact us at <strong>calmmind.sfz@gmail.com</strong>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
