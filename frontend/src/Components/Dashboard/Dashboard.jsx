
import React ,{useState, useEffect} from 'react';
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
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png'
import premier from '../../assets/premiere.png'
import { Link } from 'react-router-dom';
import FaBell from '../../assets/FaBell.png';
import FaLock from '../../assets/FaLock.png' ; // Importing icons for alarm and lock buttons
import ScrollToTop from '../../Components/ScrollToTop';

const Dashboard = () => {
  const [playingVideo, setPlayingVideo] = useState(null); // Track the currently playing video
  const [user, setUser] = useState(null);
      
    
      // Mock function to simulate fetching user data
      useEffect(() => {
        // Fetch user details from localStorage
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
    
        if (token && storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);


  const videos = [
    { src: video1, thumbnail:pic1, title: 'Morning Calm', desc: 'A peaceful start to your day', time: '10:30' },
    { src: video2, thumbnail:pic2, title: 'Evening Relaxation', desc: 'Unwind and recharge', time: '8:45' },
    { src: video3, thumbnail:pic3, title: 'Mindful Moments', desc: 'Practice mindfulness daily', time: '12:00' },
    { src: video1, thumbnail:pic1, title: 'Morning Calm', desc: 'A peaceful start to your day', time: '10:30' },
    { src: video2, thumbnail:pic2, title: 'Evening Relaxation', desc: 'Unwind and recharge', time: '8:45' },
    { src: video3, thumbnail:pic3, title: 'Mindful Moments', desc: 'Practice mindfulness daily', time: '12:00' }
  ];


  return (
    
    <div className=" min-h-[1098px] w-full  px-4 py-10 bg-gray-800 relative">
          <img src={YogaBackgroundArt} alt=""  className="object-cover opacity-40 absolute pl-44 pt-0 w-auto h-auto size-full bg-no-repeat bg-cover bg-fixed "/>
      <div className="flex w-full">
       
   {/* Sidebar */}
   <div className='flex'>
  <aside className="fixed  w-1/5 bg-gray-900 text-white p-9 rounded-md shadow-lg mt-5 ml-3 border-2 border-teal-400">
  <nav>
    <ul className="space-y-6 lg:space-y-7"> {/* Adds gap between the list items */}
    <li>
      <div className='flex items-center space-x-3 lg:space-x-5  bg-teal-700 p-3 rounded-md'>
  <img src={dashboard} alt=""  />
  <Link to="/dashboard"
    className="relative inline-block  hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
    DashBoard
    </Link> 
</div>

      </li>
<li>
  <div className='flex items-center space-x-3 lg:space-x-5'>
    <img src={premier} alt="" />
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
      <div className='flex items-center space-x-3 lg:space-x-5 '>
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
</div>
       
        <main className="flex-1 p-6 rounded-md shadow-lg ml-80">
          
          <div className="bg-teal-800 p-4 shadow-md rounded-md mb-6">

            <div className="flex items-center space-x-3 lg:space-x-5">
              <img src={stressfreezoneicon} alt="Stress Free Zone Icon" />
              <a href="#section1" className="relative font-bold text-3xl text-white">
                Stress Free Zone
              </a>
            </div>
           
          </div>


          {/* Username row */}
          <div className=" p-4 shadow-md rounded-md mb-6">
          <h3 className="text-2xl font-semibold text-white"><span>Hello! </span>{user?.name || 'Guest'}</h3>

          </div>


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






        </main>
      </div>
    </div>
  );
};

export default Dashboard;


