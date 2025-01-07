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
/*import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png'*/
import { Link } from 'react-router-dom';
import FaBell from '../../assets/FaBell.png';
import FaLock from '../../assets/FaLock.png' ; // Importing icons for alarm and lock buttons


const Soundscape = () => {
  const [videos, setVideos] = useState([]); // Store fetched videos
  const [playingVideo, setPlayingVideo] = useState(null); // Track the currently playing video

  useEffect(() => {
    // Fetch videos from the database by category 'Soundscape'
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/videos/Soundscape'); // Replace with your backend URL
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data); // Update videos state with fetched data
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    
    <div className=" min-h-[1170px] w-full  px-4 py-10 bg-gray-800 relative">
          <img src={YogaBackgroundArt} alt=""  className="object-cover opacity-40 absolute pl-44 pt-0 w-auto h-auto size-full bg-no-repeat bg-cover bg-fixed "/>
      <div className="flex w-full">
       
   {/* Sidebar */}
  <div className='flex'>
  <aside className=" fixed w-1/5 bg-gray-900 text-white p-9 rounded-md shadow-lg mt-5 ml-3 border-2 border-teal-400">
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
      <div className='flex items-center space-x-3 lg:space-x-5 bg-teal-700 p-3 rounded-md'>
  <img src={soundscape} alt=""  />
  <Link to="/soundscape"
    className="relative inline-block  hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
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


        {/* Main content area */}
        <main className="flex-1 p-6 rounded-md shadow-lg ml-80">
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

         


          

<main className="flex flex-col mb-5 mt-5 p-7 bg-black bg-opacity-20">

<div className="min-h-screen w-full px-4 py-10  mt-0 relative">
      <div className="grid grid-cols-3 gap-6 mt-0 max-md:grid-cols-1">
        {videos.map((video, index) => (
          <div key={video._id} className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
            {/* Conditional rendering for video and thumbnail */}
            {playingVideo === index ? (
              <video
                src={video.url}
                controls
                className="w-full h-auto rounded"
                onClick={() => setPlayingVideo(null)} // Stop playing on click
                autoPlay
              />
            ) : (
              <img
                src={video.thumbnail} // Thumbnail image
                alt={`${video.title} Thumbnail`}
                className="w-full h-auto rounded cursor-pointer"
                onClick={() => setPlayingVideo(index)} // Play on click
              />
            )}
            <h3 className="text-white text-lg mt-3">{video.title}</h3>
            <p className="text-white text-sm font-light mb-2">{video.desc}</p>
            <div className="flex items-center justify-between w-full mt-4">
              <span className="text-gray-300 text-xs font-semibold">{video.time}</span>
              <div className="flex space-x-3">
                <img src={FaBell} alt="Alarm" className="w-4 h-4 cursor-pointer" />
                <img src={FaLock} alt="Lock" className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</main>
        </main>
      </div>
    </div>
  );
};

export default Soundscape;
