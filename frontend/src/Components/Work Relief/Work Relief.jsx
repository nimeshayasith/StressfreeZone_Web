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
import { Link } from 'react-router-dom';
import FaBell from '../../assets/FaBell.png';
import FaLock from '../../assets/FaLock.png' ; // Importing icons for alarm and lock buttons


const WorkRelief = () => {
  const [videos, setVideos] = useState([]);
  const [playingVideo, setPlayingVideo] = useState(null); // Track the currently playing video
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [showPremiumPrompt, setShowPremiumPrompt] = useState(false); // Control the premium prompt visibility

  useEffect(() => {
    // Fetch videos from the database by category 'Soundscape'
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/videos/WorkRelief'); // Replace with your backend URL
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

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleVideoPlay = (index) => {
    if (index >= 3) {
      // Show premium prompt if the video is beyond the first 3
      setShowPremiumPrompt(true);
      setPlayingVideo(null); // Stop the video from playing
    } else {
      // Allow the video to play
      setPlayingVideo(index);
    }
  };

  const closePremiumPrompt = () => {
    setShowPremiumPrompt(false);
  };

  const redirectToPremium = () => {
    window.location.href = '/premierplan'; // Redirect to premium subscription page
  };

  return (
    
    <div className=" min-h-[1100px] w-full  px-4 py-10 bg-gray-800 relative">
          <img src={YogaBackgroundArt} alt=""  className="object-cover opacity-40 absolute pl-44 pt-0 w-auto h-auto size-full bg-no-repeat bg-cover bg-fixed "/>
      <div className="flex w-full">
       
   {/* Sidebar */}
  <div className='flex'>
  <aside className=" fixed w-1/5 bg-gray-900 text-white p-9 rounded-md shadow-lg mt-5 ml-3 border-2 border-teal-400">
  <nav>
    <ul className="space-y-6 lg:space-y-7"> {/* Adds gap between the list items */}
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
      <div className='flex items-center space-x-3 lg:space-x-5 bg-teal-700 p-3 rounded-md'>
  <img src={workrelief} alt=""  />
  <Link to="/workrelief"
    className="relative inline-block hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
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
                src={video.thumbnailUrl} // Thumbnail image
                alt={`${video.title} Thumbnail`}
                className="w-full h-auto rounded cursor-pointer"
                onClick={() => handleVideoPlay(index)} // Play on click
              />
            )}
            <h3 className="text-white text-lg mt-3">{video.title}</h3>
            <p className="text-white text-sm font-light mb-2">
                    {expandedDescriptions[index] || video.description.length <= 100
                      ? video.description
                      : `${video.description.slice(0, 100)}...`}
                  </p>
                  {video.description.length > 100 && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-green-600 text-xs underline mt-1"
                    >
                      {expandedDescriptions[index] ? 'See Less' : 'See More'}
                    </button>
                  )}
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
      {showPremiumPrompt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Upgrade to Premium</h2>
            <p className="mb-4">You need a premium subscription to access this video.</p>
            <button
              onClick={redirectToPremium}
              className="bg-teal-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-teal-700 transition-colors duration-300"
            >
              Get Premium
            </button>
            <button
              onClick={closePremiumPrompt}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
          </div>
      )}
    </div>
  );
};

export default WorkRelief;
