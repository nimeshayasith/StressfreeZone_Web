import React from 'react';
import YogaBackgroundArt from '../../assets/Yoga background art.png';
import dashboard from '../../assets/dashboard.png';
import stresschecker from '../../assets/stresschecker.png';
import myday from '../../assets/myday.png';
import movements from '../../assets/movements.png';
import meditation from '../../assets/meditation.png';
import soundscape from '../../assets/soundscape.png';
import workrelief from '../../assets/workrelief.png';
import learnmore from '../../assets/stresschecker.png';
import userprofile from '../../assets/userprofile.png';
import stressfreezoneicon from '../../assets/stressfreezoneicon.png';
import quickrelaxationbackground from '../../assets/quickrelaxationbackground.png';
import progresscircle from '../../assets/progresscircle.png'
import chefhat from '../../assets/ChefHat.png'
import drop from '../../assets/Drop.png'
import personsimplerun from '../../assets/PersonSimpleRun.png'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import { Link } from 'react-router-dom';

const StressChecker = () => {
  return (
    
    <div className=" min-h-[1100px] w-full  px-4 py-10 bg-gray-800 relative">
          <img src={YogaBackgroundArt} alt=""  className="object-cover opacity-40 absolute pl-72 pt-8 w-auto h-auto size-full bg-no-repeat bg-cover bg-fixed "/>
      <div className="flex w-full">
       
   {/* Sidebar */}
  <aside className="w-1/5 bg-gray-900 text-white p-9 rounded-md shadow-lg mt-5">
  <nav>
    <ul className="space-y-6 lg:space-y-10"> {/* Adds gap between the list items */}
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={dashboard} alt=""  />
  <Link to="/dashboard"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    DashBoard
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={stresschecker} alt="" />
  <Link to="/stresschecker"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Stress Checker
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={myday} alt=""  />
  <Link to="/myday"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    My Day
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={movements} alt=""  />
  <Link to="/movements"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Movements
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={meditation} alt=""  />
  <Link to="/meditation"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Meditation
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={soundscape} alt=""  />
  <Link to="/soundscape"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Soundscape
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={workrelief} alt=""  />
  <Link to="/workrelief"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Work Relief
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={learnmore} alt=""  />
  <Link to="/learnmore"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Learn More
    </Link> 
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={userprofile} alt="" />
  <Link to="/userprofile"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
   User Profile
    </Link>
</div>

      </li>
    </ul>
  </nav>
</aside>


        {/* Main content area */}
        <main className="flex-1 p-6 rounded-md shadow-lg ml-6">
          {/* Top row */}
          <div className="bg-teal-800 p-4 shadow-md rounded-md mb-6">
          <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={stressfreezoneicon} alt=""  />
  <a
    href="#section1" 
    className="relative  font-bold text-3xl text-white ">
    Stress Free Zone
  </a>
</div>

          </div>

        
       
  {/* above */}
  <div className="bg-black/30 p-4 mb-10  shadow-md rounded-md border border-gray-300">
 
    <main className="w-full max-w-[800px] mx-auto text-center">
    <header className="py-px mt-8 text-base leading-6">
      <h1>
        <span className="text-3xl font-bold text-white">Find Your Path to Calm with </span>
        <span className="text-3xl font-bold text-green-500">Stress-Free Zone</span>
      </h1>
    </header>
    <section className="mt-6">
      <p className="italic text-white">
        Discover your stress levels with our personalized stress checker. Answer a few questions and gain insights into your current mental state, helping you navigate towards a calmer and more balanced life.
      </p>
    </section>
    </main>
    <div className="flex mt-8 mb-8 justify-center items-center h-auto">

    <div>
      <div className="flex rounded-3xl mb-5 bg-zinc-400 p-4 bg-opacity-90 max-w-[575px] min-h-[20px]" role="region" aria-label="Content area">
        What type of therapy are you looking for?
      </div>
      <div className="flex flex-col rounded-3xl space-y-3 bg-zinc-500 p-4 bg-opacity-90 max-w-[575px] min-h-[51px]">
        <div className="flex rounded-3xl bg-zinc-400 p-4 bg-opacity-90 max-w-[575px] min-h-[51px]">
          Individual (for self)
        </div>
        <div className="flex rounded-3xl bg-zinc-400 p-4 bg-opacity-90 max-w-[575px] min-h-[51px]">
          Individual (for self)
        </div>
        <div className="flex rounded-3xl bg-zinc-400 p-4 bg-opacity-90 max-w-[575px] min-h-[51px]">
          Individual (for self)
        </div>
        <div className="flex rounded-3xl bg-zinc-400 p-4 bg-opacity-90 max-w-[575px] min-h-[51px]">
          Individual (for self)
        </div>
      </div>
    
  </div>
</div>

  </div>

 

    {/* below */}
    
    <div className="relative flex p-4 shadow-md rounded-md border border-gray-300 overflow-hidden flex-col mb-0 items-center justify-center px-16 pb-12 bg-black/50 bg-opacity-50 max-md:px-5 max-md:pb-24">
  {/* Meditation Image with Text Overlay */}
  <div className="w-full max-w-[1407px] max-md:max-w-full flex justify-center relative">
    <div>

      {/* Text overlaying the image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl mt-16 font-bold">Sweet Review from our clients</h1>
      </div>
    </div>
  </div>

  {/* Section for three columns, immediately after the text */}
  <div className="w-full flex justify-center mt-20 ">
    <div className="flex gap-5 w-full max-w-[1407px]  max-md:flex-col">
      
      {/* Column 1 */}
      <div className="flex flex-col w-[50%] max-md:w-full">
        <div className="flex flex-col px-6 pt-10 pb-10 min-h-[260px] rounded-2xl bg-teal-950 text-center">
          <p className="text-white text-2xl">Jane Froster <hr /></p>
          <p className="text-white">“Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. Fusce tempus tellus sed.”</p>
        </div>
      </div>
      
      {/* Column 2 */}
      <div className="flex flex-col w-[50%] max-md:w-full">
        <div className="flex flex-col px-6 pt-10 pb-10 min-h-[260px] rounded-2xl bg-teal-950 text-center">
          <p className="text-white text-2xl">Ninna Aguero <hr /></p>
          <p className="text-white">“Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum id varius risus. Fusce tempus tellus sed.”</p>
        </div>
      </div>
      
    </div>
  </div>
</div>
  

        </main>
      </div>
    </div>
  );
};

export default StressChecker;
