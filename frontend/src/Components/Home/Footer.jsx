import React from 'react';
import logo_icon from '../../assets/logo.png';
import facebook from '../../assets/facebook_icon.png';
import instagram from '../../assets/instagram_icon.png';
import linkedin from '../../assets/linkedin_icon.png';
import youtube from '../../assets/youtube_icon.png';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-18 px-5">
      <div className="container mx-auto flex flex-col items-center ">
        {/* Footer Content with Three Columns */}
        <header className="flex gap-10 items-start justify-between w-full max-w-6xl font-semibold text-white">
          
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col gap-5 mt-5 w-1/3 mr-10">
            <div className="flex items-center gap-3">
              <img src={logo_icon} alt="App Logo" className="w-16 h-16" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">CALM MIND</h1>
                <p className="mt-1.5 text-base">STRESS FREE ZONE</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">Our mission is to provide users with effective tools and resources to manage stress and enhance their overall mental well-being.</p>
          </div>
  
          {/* Column 2: Footer Links */}
          <div className="flex flex-col gap-5 pl-16 mt-24 w-1/3">
            <div className="flex flex-col gap-y-2">
{            /*  <a href="/aboutus" className="hover:underline">About Us</a>*/}
              <a href="/contactus" className="hover:underline">Contact</a>
              <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
              <a href="/termsofconditions" className="hover:underline">Terms of Service</a>
            </div>
          </div>
  
          {/* Column 3: Social Media Icons */}
          <div className="flex flex-col gap-5 w-1/3">
            <div className="flex gap-4">
            <div className="bg-slate-900 p-8 rounded-lg max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="border border-gray-400 rounded-lg p-2 w-full mb-2"
        required
      />
      <button className="bg-slate-700 text-white rounded-lg px-4 py-2 w-full">
        Subscribe
      </button>
    </div>
            </div>
          </div>
        </header>

        {/* Bottom Row for Copyright Statement and Social Media Icons */}
        <div className="flex justify-between items-center w-full max-w-6xl mt-5 mb-3">
          <div className="text-gray-400 text-center">
            <p>&copy; 2024 SFZ. All Rights Reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/@stressfreezone-u4v?si=jFGVw_LuZWaI7w3e" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
