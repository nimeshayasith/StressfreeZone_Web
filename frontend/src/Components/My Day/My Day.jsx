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
import plus from '../../assets/plus.png';

import Greeting from './Greeting';
import AddNewList from './Add New List';

import { Link } from 'react-router-dom';

const MyDay = () => {
  return (
    <div className="min-h-auto w-full px-4 py-10 bg-gray-800 relative">
      {/* Background Image */}
      <img
        src={YogaBackgroundArt}
        alt=""
        className="object-cover opacity-40 absolute w-full h-full bg-no-repeat bg-cover bg-fixed"
      />
      
      {/* Main Layout */}
      <div className="relative flex w-full z-10"> {/* Added z-10 and relative here */}
        {/* Sidebar */}
        <div className='flex'>
  <aside className=" fixed w-1/5 bg-gray-900 text-white p-9 rounded-md shadow-lg mt-5 ml-3 border-2 border-teal-400">
          <nav>
            <ul className="space-y-6 lg:space-y-7">
              {/* Sidebar Items */}
              <li>
                <div className='flex items-center space-x-3 lg:space-x-5'>
                  <img src={dashboard} alt="" />
                  <Link to="/dashboard" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 hover:before:scale-x-100">
                    Dashboard
                  </Link>
                </div>
              </li>
<li>
  <div className='flex items-center space-x-3 lg:space-x-5'>
    <img src={dashboard} alt="" />
    <Link to="/billing"
      className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 
        before:content-[''] before:absolute before:left-0 before:bottom-0 
        before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 
        before:origin-left before:transition-transform before:duration-300 
        hover:before:scale-x-100"> 
      Premier Plan
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
      <div className='flex items-center space-x-3 lg:space-x-5 bg-teal-700 p-3 rounded-md'>
  <img src={myday} alt=""  />
  <Link to="/myday"
    className="relative inline-block  hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
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
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 rounded-md shadow-lg ml-80 relative">
          {/* Top Row with Greeting */}
          <div className="bg-teal-800 p-4 shadow-md rounded-md mb-6">
            <div className='flex items-center space-x-3 lg:space-x-5'>
              <img src={stressfreezoneicon} alt="" />
              <a href="#section1" className="relative font-bold text-3xl text-white">
                Stress Free Zone
              </a>
            </div>
          </div>

          {/* Greeting and AddNewList */}
          <div className="bg-black/30 p-4 mb-10 shadow-md rounded-md border border-gray-300 relative z-20">
            <header className="p-4 mt-2 text-2xl text-white">
              <Greeting />
            </header>
            
            {/* Add New List Section */}
            <div className="p-4 mb-5 shadow-md rounded-md border border-gray-300">
              <li>
                <div className='flex items-center space-x-3 lg:space-x-5'>
                  <img src={myday} alt="lll" />
                  <Link to="/myday" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 hover:before:scale-x-100">
                    My Day
                  </Link>
                </div>
              </li>

              {/* AddNewList Component */}
              <AddNewList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyDay;
