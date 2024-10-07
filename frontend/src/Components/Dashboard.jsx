import React from 'react';
import YogaBackgroundArt from '../assets/Yoga background art.png';
import dashboard from '../assets/dashboard.png';
import stresschecker from '../assets/stresschecker.png';
import myday from '../assets/myday.png';
import movements from '../assets/movements.png';
import meditation from '../assets/meditation.png';
import soundscape from '../assets/soundscape.png';
import workrelief from '../assets/workrelief.png';
import learnmore from '../assets/stresschecker.png';
import userprofile from '../assets/userprofile.png';
import stressfreezoneicon from '../assets/stressfreezoneicon.png';
import quickrelaxationbackground from '../assets/quickrelaxationbackground.png';
import progresscircle from '../assets/progresscircle.png'
import chefhat from '../assets/ChefHat.png'
import drop from '../assets/Drop.png'
import personsimplerun from '../assets/PersonSimpleRun.png'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'

const Dashboard = () => {
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
  <a
    href="#section1" 
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    DashBoard
  </a>
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={stresschecker} alt="" />
  <a
    href="#section1"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
   Stress Checker
  </a>
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={myday} alt=""  />
  <a
    href="#section1"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    My Day
  </a>
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={movements} alt=""  />
  <a
    href="#section1"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
   Movements
  </a>
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={meditation} alt=""  />
  <a
    href="#section1"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Meditation
  </a>
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={soundscape} alt=""  />
  <a
    href="#section1"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    Soundscape
  </a>
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={workrelief} alt=""  />
  <a
    href="#section1"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
   Work Relief
  </a>
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={learnmore} alt=""  />
  <a
    href="#section1"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
   Learn More
  </a>
</div>

      </li>
      <li>
      <div className='flex items-center space-x-3 lg:space-x-5'>
  <img src={userprofile} alt="" />
  <a
    href="#section1"
    className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    User Profile
  </a>
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

          {/* Username row */}
          <div className=" p-4 shadow-md rounded-md mb-6">
            <h3 className="text-2xl font-semibold text-white">Hi Kaweesha</h3>
          </div>

          {/* 2-column grid below username row */}
          <div className="grid grid-cols-2 grid-row-2 gap-4">
  {/* Left column */}
  <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
  <h2 className="gap-10 self-stretch max-w-full text-2xl leading-none text-white w-[370px]">
        Quick Relaxation
      </h2>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-14 -mr-8 h-12 text-neutral-300 max-md:mt-10">
            <h3 className="text-xl">Good vibes, good life</h3>
            <p className="text-base">Positive thinking | </p>
          min</div>
        </div>
        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col">
            <  img src={quickrelaxationbackground}
              className="object-contain w-48 h-48 opacity-100"
            />
             </div>
        </div>
      </div>
  </div>

  {/* Right column */}
  <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
  <h2 className="gap-10 self-stretch max-w-full text-2xl leading-none text-white w-[370px]">
        Daily Progress
      </h2>
      <div className="flex gap-5 items-start p-3 mt-6 bg-white rounded-[122.619px]">
      <img src={progresscircle} alt='' className="object-contain w-[181px]"
      />
    </div>
  </div>

    {/* Left column */}
    <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
  <h2 className="gap-10 self-stretch max-w-full text-2xl leading-none text-white w-[370px]">
        Quick Relaxation
      </h2>

      <article className="flex relative text-white  flex-col mt-6 w-full rounded-xl min-h-[78px] max-md:max-w-full">
      <div className="flex relative  flex-col mb-4 bg-slate-950 items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full">
        <h3 className="text-sm">Hard Plan</h3>
        <p className="text-xs font-light">Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.</p>
      </div>
      <div className="flex relative flex-col mb-4 bg-slate-950 items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full">
        <h3 className="text-sm">Hard Plan</h3>
        <p className="text-xs font-light">Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.</p>
      </div>
      <div className="flex relative flex-col bg-slate-950 items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full">
        <h3 className="text-sm">Hard Plan</h3>
        <p className="text-xs font-light">Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.</p>
      </div>
    </article> 
  </div>

  {/* Right column */}
  <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
  <h2 className="gap-10 self-stretch max-w-full text-2xl leading-none text-white w-[370px]">
        Quick Relaxation
      </h2>

      <article className="flex relative text-white  flex-col mt-6 w-full rounded-xl min-h-[78px] max-md:max-w-full">
      <div className="flex relative mb-4 bg-white/30 flex-col  items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex items-center space-x-4">
  <img src={personsimplerun} alt="Person running" />
  <div>
    <h3 className="text-sm">Morning Run</h3>
    <p className="text-xs font-light">07.00 am   Park   45 min</p>
  </div>
</div>
      </div>
      <div className="flex relative mb-4 bg-white/30 flex-col  items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex items-center space-x-4">
  <img src={drop} alt="Person running" />
  <div>
    <h3 className="text-sm">1.5L of water daily</h3>
    <p className="text-xs font-light">All day   Park </p>
  </div>
</div>
      </div>

      <div className="flex relative  bg-white/30 flex-col  items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full">
      <div className="flex items-center space-x-4">
  <img src={chefhat} alt="Person running" />
  <div>
    <h3 className="text-sm">Cooking mealpreps for 3 days</h3>
    <p className="text-xs font-light">11.00 am    Home   2h</p>
  </div>
</div>
      </div>
    </article>
  </div>
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
  </section>
</main>



<main className="flex flex-col mb-5 mt-20 p-7 bg-black bg-opacity-20">
  <header className="flex relative gap-10 items-start w-full font-bold text-white max-w-[1145px] pr-[807px] max-md:pr-5 max-md:max-w-full">
    <h1 className="z-0 text-2xl">Meditations</h1>
    <nav className="absolute top-2/4 left-2/4 gap-10 self-stretch pl-32 text-base uppercase -translate-x-2/4 -translate-y-2/4 min-w-[240px] w-[254px]">
      <a href="#" className="text-white">All Meditations &gt;</a>
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
  </section>
</main>



<main className="flex flex-col mb-5 mt-20 p-7 bg-black bg-opacity-20">
  <header className="flex relative gap-10 items-start w-full font-bold text-white max-w-[1145px] pr-[807px] max-md:pr-5 max-md:max-w-full">
    <h1 className="z-0 text-2xl">Soundscape</h1>
    <nav className="absolute top-2/4 left-2/4 gap-10 self-stretch pl-32 text-base uppercase -translate-x-2/4 -translate-y-2/4 min-w-[240px] w-[254px]">
      <a href="#" className="text-white">All Soundscape &gt;</a>
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
  </section>
</main>


<main className="flex flex-col mb-5 mt-20 p-7 bg-black bg-opacity-20">
  <header className="flex relative gap-10 items-start w-full font-bold text-white max-w-[1145px] pr-[807px] max-md:pr-5 max-md:max-w-full">
    <h1 className="z-0 text-2xl">Work Relief</h1>
    <nav className="absolute top-2/4 left-2/4 gap-10 self-stretch pl-32 text-base uppercase -translate-x-2/4 -translate-y-2/4 min-w-[240px] w-[254px]">
      <a href="#" className="text-white">All Work Releives &gt;</a>
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
  </section>
</main>



        </main>
      </div>
    </div>
  );
};

export default Dashboard;
