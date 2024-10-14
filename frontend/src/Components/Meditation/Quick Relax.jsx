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

const QuickRelax = () => {
  return (
    
    <div className=" min-h-[2970px] w-full  px-4 py-10 bg-gray-800 relative">
          <img src={YogaBackgroundArt} alt=""  className="object-cover opacity-40 absolute pl-44 pt-0 w-auto h-auto size-full bg-no-repeat bg-cover bg-fixed "/>
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

         
 <div className="flex space-x-4 mt-4 relative z-10">

 
  <Link to="/deeprelax">
  <button className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
    Deep Relax
  </button>
  </Link>
</div>

          

<main className="flex flex-col mb-5 mt-20 p-7 bg-black bg-opacity-20">
  <header className="flex relative gap-10 items-start w-full font-bold text-white max-w-[1145px] pr-[807px] max-md:pr-5 max-md:max-w-full">
    <h1 className="z-0 text-2xl">Movements</h1>
    <nav className="absolute top-2/4 left-2/4 gap-10 self-stretch pl-32 text-base uppercase -translate-x-2/4 -translate-y-2/4 min-w-[240px] w-[254px]">
      <a href="#" className="text-white">All Movements &gt;</a>
    </nav>
  </header>

  <section className="grid grid-cols-3 gap-6 mt-10 max-md:grid-cols-1">
    {/* Card 1 */}
    <div className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
      <img src={pic1} alt="Meditation 1" className="w-full h-auto rounded" />
      <h3 className="text-white text-lg mt-3">Morning Calm</h3>
      <p className="text-white text-sm font-light">A peaceful start to your day</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
      <img src={pic2} alt="Meditation 2" className="w-full h-auto rounded" />
      <h3 className="text-white text-lg mt-3">Evening Relaxation</h3>
      <p className="text-white text-sm font-light">Unwind and recharge</p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
      <img src={pic3} alt="Meditation 3" className="w-full h-auto rounded" />
      <h3 className="text-white text-lg mt-3">Mindful Moments</h3>
      <p className="text-white text-sm font-light">Practice mindfulness daily</p>
    </div>

        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
      <img src={pic1} alt="Meditation 1" className="w-full h-auto rounded" />
      <h3 className="text-white text-lg mt-3">Morning Calm</h3>
      <p className="text-white text-sm font-light">A peaceful start to your day</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
      <img src={pic2} alt="Meditation 2" className="w-full h-auto rounded" />
      <h3 className="text-white text-lg mt-3">Evening Relaxation</h3>
      <p className="text-white text-sm font-light">Unwind and recharge</p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
      <img src={pic3} alt="Meditation 3" className="w-full h-auto rounded" />
      <h3 className="text-white text-lg mt-3">Mindful Moments</h3>
      <p className="text-white text-sm font-light">Practice mindfulness daily</p>
    </div>
  </section>
</main>
        </main>
      </div>
    </div>
  );
};

export default QuickRelax;
