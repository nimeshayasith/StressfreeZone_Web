
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
import premier from '../../assets/premiere.png'
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [stressLevel, setStressLevel] = useState(null);
      
    
      // Mock function to simulate fetching user data
      useEffect(() => {
        // Fetch user details from localStorage
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
    
        if (token && storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);


  // Fetch upcoming tasks with due dates
  useEffect(() => {
    fetchUpcomingTasks();
  }, []);


  // Fetch stress level result from localStorage
  useEffect(() => {
    const storedStressLevel = localStorage.getItem('stressLevel');
    if (storedStressLevel) {
      setStressLevel(parseFloat(storedStressLevel));
    }
  }, []);

  const fetchUpcomingTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/lists/gettask', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) throw new Error('Error fetching tasks');
      const data = await response.json();

     // Filter tasks with due dates and exclude completed tasks
     const tasksWithDueDates = data
     .flatMap((list) =>
       list.tasks
         .filter((task) => task.dueDate && !task.completed) // Filter tasks with due dates and not completed
         .map((task) => ({
           ...task,
           listName: list.name, // Include the list name
         }))
     )
     .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)) // Sort by due date
     .slice(0, 3); // Only take the first 3 tasks

   setUpcomingTasks(tasksWithDueDates);
 } catch (error) {
   console.error('Error fetching upcoming tasks:', error);
 }
};

  // Format the due date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  // Determine stress level category
  const getStressLevelCategory = (stressLevel) => {
    if (stressLevel >= 0 && stressLevel <= 10) return "Low Stress";
    if (stressLevel > 10 && stressLevel <= 50) return "Moderate Stress";
    if (stressLevel > 50 && stressLevel <= 80) return "High Stress";
    if (stressLevel > 80 && stressLevel <= 100) return "Very High Stress";
    return "No Stress Data";
  };

  // Get color based on stress level
  const getStressLevelColor = (stressLevel) => {
    if (stressLevel >= 0 && stressLevel <= 10) return "bg-green-500"; // Green for low stress
    if (stressLevel > 10 && stressLevel <= 50) return "bg-yellow-500"; // Yellow for moderate stress
    if (stressLevel > 50 && stressLevel <= 80) return "bg-orange-500"; // Orange for high stress
    if (stressLevel > 80 && stressLevel <= 100) return "bg-red-500"; // Red for very high stress
    return "bg-gray-500"; // Default color
  };

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
 

  {/* Grid Layout */}
 
            {/* Left Column: Quick Relaxation */}
            <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
              <h2 className="text-2xl text-white mb-4">Quick Relaxation</h2>
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-14 -mr-8 h-12 text-neutral-300 max-md:mt-10">
                    <h3 className="text-xl">Good vibes, good life</h3>
                    <p className="text-base">Have a great day</p>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                  <img
                    src={quickrelaxationbackground}
                    className="object-contain w-48 h-48 opacity-100"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Stress Level Indicator */}
            <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
              <h2 className="text-2xl text-white mb-4">Your Current State</h2>
              {stressLevel !== null ? (
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full ${getStressLevelColor(stressLevel)}`}
                      style={{ width: `${stressLevel}%` }}
                    ></div>
                  </div>
                  {/* Friendly Message */}
                  <p className="text-xl text-slate-300 font-semibold text-center">
  {stressLevel <= 10
    ? "You're feeling calm and relaxed. Keep it up! 😊 Take a moment to enjoy this peaceful state. Practice gratitude or spend some time in nature to maintain this balance."
    : stressLevel <= 50
    ? "You're doing well, but take a moment to unwind. 🌿 Consider a short walk, deep breathing, or listening to calming music. Small breaks can make a big difference!"
    : stressLevel <= 80
    ? "You're feeling a bit stressed. Let's find ways to relax. 🧘‍♂️ Try a quick meditation session, journal your thoughts, or engage in a hobby you love. You've got this!"
    : "You're feeling very stressed. Take a deep breath and relax. 🌸 It's okay to feel this way. Reach out to a friend, practice mindfulness, or take a break to recharge. You're stronger than you think!"}
</p>
                </div>
              ) : (
                <p className="text-gray-400">No stress level data available.</p>
              )}
            </div>

    {/* Left column */}
    <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
  <h2 className="gap-10 self-stretch max-w-full text-2xl leading-none text-white w-[370px]">
        Quick Relaxation
      </h2>

      <article className="flex relative text-white flex-col mt-6 w-full rounded-xl min-h-[78px] max-md:max-w-full">
  <div className="flex relative flex-col mb-4 bg-slate-950 items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full">
    <h3 className="text-sm">Deep Breathing</h3>
    <p className="text-xs font-light">
      Take a deep breath in, hold for a few seconds, and slowly exhale. Repeat this process to calm your mind and body.
    </p>
  </div>
  <div className="flex relative flex-col mb-4 bg-slate-950 items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full">
    <h3 className="text-sm">Guided Meditation</h3>
    <p className="text-xs font-light">
      Listen to soothing guided meditations to clear your thoughts and bring a sense of peace and relaxation.
    </p>
  </div>
  <div className="flex relative flex-col bg-slate-950 items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full">
    <h3 className="text-sm">Soothing Sounds</h3>
    <p className="text-xs font-light">
      Immerse yourself in calming nature sounds, like ocean waves or rainfall, to reduce stress and enhance focus.
    </p>
  </div>
</article>

  </div>
 {/* Right Column: Upcoming Events */}
 <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
              <h2 className="text-2xl text-white mb-4">Upcoming Events</h2>
              {upcomingTasks.length > 0 ? (
                <div className="space-y-4">
                  {upcomingTasks.map((task, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-xl font-semibold">{task.name}</h3>
                      <p className="text-gray-400">
                        <span className="font-medium">Due:</span> {formatDate(task.dueDate)}
                      </p>
                      <p className="text-gray-400">
                        <span className="font-medium">List:</span> {task.listName}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No upcoming events found.</p>
              )}
            </div>
          </div>






        </main>
      </div>
    </div>
  );
};

export default Dashboard;


