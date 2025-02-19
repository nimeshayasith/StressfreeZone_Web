import React, { useState, useEffect } from 'react';
import YogaBackgroundArt from '../../assets/Yoga background art.png';
import dashboard from '../../assets/dashboard.png';
import stresschecker from '../../assets/stresschecker.png';
import myday from '../../assets/myday.png';
import movements from '../../assets/movements.png';
import meditation from '../../assets/meditation.png';
import soundscape from '../../assets/soundscape.png';
import workrelief from '../../assets/workrelief.png';
import learnmore from '../../assets/stresschecker.png';
import userprofile from '../../assets/userprofile.jpg';
import userprofileicon from '../../assets/userprofile.png';
import stressfreezoneicon from '../../assets/stressfreezoneicon.png';
import { Link , useNavigate} from 'react-router-dom';

const UserProfile = () => {
  
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
  
    // Mock function to simulate fetching user data
    useEffect(() => {
      // Fetch user details from localStorage
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('token');
  
      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        navigate('/login');
      }
    }, [navigate]);
  
    const handleLogout = () => {
      localStorage.removeItem('token'); 
      localStorage.removeItem('user');
      localStorage.removeItem("lists");
      navigate('/login');
      console.log("User logged out!");
      
    };
    const handleDeleteAccount = () => {
      if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
        // Perform account deletion logic here
        console.log("Account deleted.");
      }
    };
    
    
  
  return (
    
    <div className=" min-h-[1100px] w-full  px-4 py-10 bg-gray-800 relative">
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
      <div className='flex items-center space-x-3 lg:space-x-5 bg-teal-700 p-3 rounded-md'>
  <img src={userprofileicon} alt="" />
  <Link to="/userprofile"
    className="relative inline-block hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
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
            <div className="flex items-center space-x-3 lg:space-x-5">
              <img src={stressfreezoneicon} alt="" />
              <a href="#section1" className="relative font-bold text-3xl text-white">
                Stress Free Zone
              </a>
            </div>
          </div>

          {/* User Details */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-8 rounded-lg shadow-lg text-white max-w-md mx-auto">
  <h2 className="text-3xl font-extrabold mb-6 border-b-2 border-gray-500 pb-2">
    User Profile
  </h2>
  <div className="flex justify-center mb-6">
    <img
      src={userprofile} // You can replace this with any image URL or import
      alt="User Profile"
      className="w-32 h-32 rounded-full border-4 border-gray-300"
    />
  </div>
  <div className="mb-4">
  {user ? (
  <>
    <p className="text-lg mb-2">
      <span className="font-bold text-gray-300">Name      :-</span> {user.name}
    </p>
    <p className="text-lg">
      <span className="font-bold text-gray-300">Email     :-</span> {user.email}
    </p>
  </>
  ) : (
    <p className="text-gray-400 text-center">Loading user details...</p>
  )}
  </div>
  <p className="text-center text-sm text-gray-400 mb-6">
  "Your well-being is at the heart of everything we do. Take a moment to reflect on how far you've come, and use the tools here to continue your journey of self-care and growth."
</p>

  <div className="flex space-x-28">
  <button
    onClick={handleLogout}
    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
  >
    Logout
  </button>
  
  <button
  onClick={handleDeleteAccount}
  className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded-md transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
>
  Delete Account
</button>
</div>

</div>

        </main>
      </div>
    </div>
  );
};

export default UserProfile;