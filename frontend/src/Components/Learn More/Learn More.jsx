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
import { Link } from 'react-router-dom';
import FaBell from '../../assets/FaBell.png';
import FaLock from '../../assets/FaLock.png'; // Importing icons for alarm and lock buttons

const LearnMore = () => {
  // Mock data for articles and exercises
  const articles = [
    { 
        title: 'Managing Stress Through Breathing Techniques', 
        desc: 'Learn how deep breathing exercises, such as diaphragmatic breathing and the 4-7-8 technique, can help activate the body’s relaxation response, reduce cortisol levels, and improve mental clarity during stressful situations.' 
    },
    { 
        title: 'Healthy Eating Habits for Stress Relief', 
        desc: 'Discover how a balanced diet rich in whole foods, vitamins, and minerals can help regulate hormones, stabilize mood, and reduce anxiety, making it easier to manage stress on a daily basis.' 
    },
    { 
        title: 'Importance of Physical Activity in Stress Management', 
        desc: 'Explore how regular exercise, such as walking, yoga, or strength training, releases endorphins that boost mood, reduce anxiety, and improve overall well-being by combating the negative effects of stress.' 
    },
    { 
        title: 'Mindfulness and Meditation for Stress Reduction', 
        desc: 'Practice mindfulness techniques and guided meditation to stay present in the moment, reduce negative thoughts, enhance emotional regulation, and improve resilience against daily stressors.' 
    },
    { 
        title: 'The Role of Sleep in Stress Management', 
        desc: 'Understand how maintaining a consistent sleep schedule, creating a relaxing bedtime routine, and improving sleep quality can help the body recover, enhance cognitive function, and reduce stress-related fatigue.' 
    },
    { 
        title: 'How Music Can Help Reduce Stress', 
        desc: 'Discover the calming effects of music therapy and how listening to soothing sounds or relaxing melodies can lower heart rate, decrease blood pressure, and create a sense of inner peace during stressful moments.' 
    },
    { 
        title: 'Time Management Strategies to Reduce Stress', 
        desc: 'Learn effective time management techniques, such as prioritizing tasks, setting realistic goals, and avoiding procrastination, to prevent feeling overwhelmed and create a balanced and productive daily routine.' 
    },
    { 
        title: 'Aromatherapy and Essential Oils for Stress Relief', 
        desc: 'Find out how essential oils like lavender, peppermint, and chamomile can help promote relaxation, improve sleep quality, and alleviate anxiety through their therapeutic properties.' 
    },
    { 
        title: 'Journaling as a Tool for Stress Management', 
        desc: 'Discover how writing down your thoughts, emotions, and daily reflections in a journal can provide clarity, improve emotional regulation, and serve as a powerful outlet for releasing stress.' 
    },
    { 
        title: 'The Connection Between Social Support and Stress Reduction', 
        desc: 'Learn how building strong relationships, connecting with loved ones, and seeking emotional support from friends, family, or support groups can help reduce stress and provide a sense of belonging.' 
    },
    { 
        title: 'The Impact of Nature on Stress Levels', 
        desc: 'Understand how spending time outdoors, engaging in nature walks, and practicing eco-therapy can lower cortisol levels, improve mood, and restore mental well-being.' 
    },
    { 
        title: 'How Laughter and Humor Reduce Stress', 
        desc: 'Explore the science behind laughter and its ability to trigger the release of endorphins, reduce stress hormones, and enhance overall mood, making it a natural and fun stress-relief technique.' 
    },
    { 
        title: 'Guided Imagery and Visualization for Relaxation', 
        desc: 'Learn how using mental imagery, guided relaxation scripts, and visualization techniques can help transport your mind to a peaceful setting, easing tension and fostering a sense of tranquility.' 
    },
    { 
        title: 'How to Build Emotional Resilience Against Stress', 
        desc: 'Strengthen your ability to cope with life’s challenges by developing a positive mindset, practicing gratitude, and cultivating self-awareness to effectively handle stress and adversity.' 
    },
    { 
        title: 'The Link Between Hydration and Stress Management', 
        desc: 'Understand how staying properly hydrated can support brain function, regulate energy levels, and reduce physical symptoms of stress such as headaches, fatigue, and irritability.' 
    }
];



  return (
    <div className="min-h-[2970px] w-full px-4 py-10 bg-gray-800 relative">
      <img src={YogaBackgroundArt} alt="" className="object-cover opacity-40 absolute pl-44 pt-0 w-auto h-auto size-full bg-no-repeat bg-cover bg-fixed" />
      <div className="flex w-full">
        {/* Sidebar */}
        <div className='flex'>
          <aside className="fixed w-1/5 bg-gray-900 text-white p-9 rounded-md shadow-lg mt-5 ml-3 border-2 border-teal-400">
            <nav>
              <ul className="space-y-6 lg:space-y-8">
                <li>
                  <div className='flex items-center space-x-3 lg:space-x-5'>
                    <img src={dashboard} alt="" />
                    <Link to="/dashboard" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
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
                    <Link to="/stresschecker" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                      Stress Checker
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='flex items-center space-x-3 lg:space-x-5'>
                    <img src={myday} alt="" />
                    <Link to="/myday" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                      My Day
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='flex items-center space-x-3 lg:space-x-5'>
                    <img src={movements} alt="" />
                    <Link to="/movements" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                      Movements
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='flex items-center space-x-3 lg:space-x-5'>
                    <img src={meditation} alt="" />
                    <Link to="/meditation" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                      Meditation
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='flex items-center space-x-3 lg:space-x-5'>
                    <img src={soundscape} alt="" />
                    <Link to="/soundscape" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                      Soundscape
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='flex items-center space-x-3'>
                    <img src={workrelief} alt="" />
                    <Link to="/workrelief" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                      Work Relief
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='flex items-center space-x-3 bg-teal-700 p-3 rounded-md'>
                    <img src={learnmore} alt="" />
                    <Link to="/learnmore" className="relative inline-block hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                      Learn More
                    </Link>
                  </div>
                </li>
                <li>
                  <div className='flex items-center space-x-3'>
                    <img src={userprofile} alt="" />
                    <Link to="/userprofile" className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
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
              <img src={stressfreezoneicon} alt="" />
              <a href="#section1" className="relative font-bold text-3xl text-white ">
                Stress Free Zone
              </a>
            </div>
          </div>

          {/* Display articles */}
          <section className="flex flex-col mb-5 mt-5 p-7 bg-black bg-opacity-20">
            {articles.map((article, index) => (
              <div key={index} className="bg-emerald-300 bg-opacity-10 p-4 rounded-lg mb-6">
                <h3 className="text-white text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-white">{article.desc}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default LearnMore;
