import React ,{useState} from 'react';
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
import { Link } from 'react-router-dom';
import FaBell from '../../assets/FaBell.png';
import FaLock from '../../assets/FaLock.png' ; // Importing icons for alarm and lock buttons


const Dashboard = () => {
  const [playingVideo, setPlayingVideo] = useState(null); // Track the currently playing video

  const videos = [
    { src: video1, thumbnail:pic1, title: 'Morning Calm', desc: 'A peaceful start to your day', time: '10:30' },
    { src: video2, thumbnail:pic2, title: 'Evening Relaxation', desc: 'Unwind and recharge', time: '8:45' },
    { src: video3, thumbnail:pic3, title: 'Mindful Moments', desc: 'Practice mindfulness daily', time: '12:00' },
    { src: video1, thumbnail:pic1, title: 'Morning Calm', desc: 'A peaceful start to your day', time: '10:30' },
    { src: video2, thumbnail:pic2, title: 'Evening Relaxation', desc: 'Unwind and recharge', time: '8:45' },
    { src: video3, thumbnail:pic3, title: 'Mindful Moments', desc: 'Practice mindfulness daily', time: '12:00' }
  ];


  return (
    <div className="min-h-[2970px] w-full px-4 py-10 bg-gray-800 relative">
      <img
        src={YogaBackgroundArt}
        alt="Yoga Background"
        className="object-cover opacity-40 absolute pl-44 pt-0 w-auto h-auto size-full bg-no-repeat bg-cover bg-fixed"
      />
      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-900 text-white p-9 rounded-md shadow-lg mt-5">
          <nav>
            <ul className="space-y-6 lg:space-y-10">
              {[
                { src: dashboard, to: "/dashboard", label: "Dashboard" },
                { src: stresschecker, to: "/stresschecker", label: "Stress Checker" },
                { src: myday, to: "/myday", label: "My Day" },
                { src: movements, to: "/movements", label: "Movements" },
                { src: meditation, to: "/meditation", label: "Meditation" },
                { src: soundscape, to: "/soundscape", label: "Soundscape" },
                { src: workrelief, to: "/workrelief", label: "Work Relief" },
                { src: learnmore, to: "/learnmore", label: "Learn More" },
                { src: userprofile, to: "/userprofile", label: "User Profile" },
              ].map((item, index) => (
                <li key={index}>
                  <div className="flex items-center space-x-3 lg:space-x-5">
                    <img src={item.src} alt={item.label} />
                    <Link
                      to={item.to}
                      className="relative inline-block text-gray-400 hover:text-gray-300 transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-gray-300 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
                    >
                      {item.label}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-6 rounded-md shadow-lg ml-6">
          {/* Top row */}
          <div className="bg-teal-800 p-4 shadow-md rounded-md mb-6">
            <div className="flex items-center space-x-3 lg:space-x-5">
              <img src={stressfreezoneicon} alt="Stress Free Zone Icon" />
              <a href="#section1" className="relative font-bold text-3xl text-white">
                Stress Free Zone
              </a>
            </div>
          </div>

          {/* Username row */}
          <div className="p-4 shadow-md rounded-md mb-6">
            <h3 className="text-2xl font-semibold text-white">Hi Kaweesha</h3>
          </div>

          {/* 2-column grid below username row */}
          <div className="grid grid-cols-2 grid-row-2 gap-4">
            {/* Left column */}
            <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
              <h2 className="text-2xl text-white w-[370px]">Quick Relaxation</h2>
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-14 -mr-8 h-12 text-neutral-300 max-md:mt-10">
                    <h3 className="text-xl">Good vibes, good life</h3>
                    <p className="text-base">Positive thinking | min</p>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col">
                    <img
                      src={quickrelaxationbackground}
                      className="object-contain w-48 h-48 opacity-100"
                      alt="Quick Relaxation Background"
                    />
                  </div>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Right column */}
            <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
              <h2 className="text-2xl text-white w-[370px]">Daily Progress</h2>
              <div className="flex gap-5 items-start p-3 mt-6 bg-white rounded-[122.619px]">
                <img
                  src={progresscircle}
                  alt="Progress Circle"
                  className="object-contain w-[181px]"
                />
              </div>
            </div>
=======
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

<main className="flex flex-col mb-5 mt-10 p-7 bg-black bg-opacity-20">
  <header className="flex relative gap-10 items-start w-full font-bold text-white max-w-[1145px] pr-[807px] max-md:pr-5 max-md:max-w-full">
    <h1 className="z-0 text-2xl">Movements</h1>
  </header>

  <div className="min-h-screen w-full px-4 py-10  mt-0 relative">
      <div className="grid grid-cols-3 gap-6 mt-0 max-md:grid-cols-1">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
            {/* Conditional rendering for video and thumbnail */}
            {playingVideo === index ? (
              <video
                src={video.src}
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



<main className="flex flex-col mb-5 mt-10 p-7 bg-black bg-opacity-20">
  <header className="flex relative gap-10 items-start w-full font-bold text-white max-w-[1145px] pr-[807px] max-md:pr-5 max-md:max-w-full">
    <h1 className="z-0 text-2xl">Meditations</h1>
  </header>

  <div className="min-h-screen w-full px-4 py-10  mt-0 relative">
      <div className="grid grid-cols-3 gap-6 mt-0 max-md:grid-cols-1">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
            {/* Conditional rendering for video and thumbnail */}
            {playingVideo === index ? (
              <video
                src={video.src}
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



<main className="flex flex-col mb-5 mt-20 p-7 bg-black bg-opacity-20">
  <header className="flex relative gap-10 items-start w-full font-bold text-white max-w-[1145px] pr-[807px] max-md:pr-5 max-md:max-w-full">
    <h1 className="z-0 text-2xl">Soundscape</h1>
  </header>

  <div className="min-h-screen w-full px-4 py-10  mt-0 relative">
      <div className="grid grid-cols-3 gap-6 mt-0 max-md:grid-cols-1">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
            {/* Conditional rendering for video and thumbnail */}
            {playingVideo === index ? (
              <video
                src={video.src}
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


<main className="flex flex-col mb-5 mt-20 p-7 bg-black bg-opacity-20">
  <header className="flex relative gap-10 items-start w-full font-bold text-white max-w-[1145px] pr-[807px] max-md:pr-5 max-md:max-w-full">
    <h1 className="z-0 text-2xl">Work Relief</h1>
  </header>

  <div className="min-h-screen w-full px-4 py-10  mt-0 relative">
      <div className="grid grid-cols-3 gap-6 mt-0 max-md:grid-cols-1">
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg">
            {/* Conditional rendering for video and thumbnail */}
            {playingVideo === index ? (
              <video
                src={video.src}
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
>>>>>>> 9bd8c65651e9b0e4e78da66934cd1c3ec53d9026

            {/* Left column */}
            <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
              <h2 className="text-2xl text-white w-[370px]">Quick Relaxation</h2>
              <article className="flex flex-col mt-6 w-full rounded-xl min-h-[78px] max-md:max-w-full">
                {["Hard Plan", "Hard Plan", "Hard Plan"].map((plan, index) => (
                  <div
                    key={index}
                    className="flex flex-col mb-4 bg-slate-950 items-start py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full"
                  >
                    <h3 className="text-sm">{plan}</h3>
                    <p className="text-xs font-light">
                      Lorem ipsum dolor sit amet consectetur. Id amet orci viverra id.
                    </p>
                  </div>
                ))}
              </article>
            </div>

            {/* Right column */}
            <div className="bg-black/30 p-4 shadow-md rounded-md border border-gray-300">
              <h2 className="text-2xl text-white w-[370px]">Quick Relaxation</h2>
              <article className="flex flex-col mt-6 w-full rounded-xl min-h-[78px] max-md:max-w-full">
                {[
                  {
                    src: personsimplerun,
                    title: "Morning Run",
                    description: "07.00 am Park 45 min",
                  },
                  {
                    src: drop,
                    title: "1.5L of water daily",
                    description: "All day Park",
                  },
                  {
                    src: chefhat,
                    title: "Cooking mealpreps for 3 days",
                    description: "11.00 am Home 2h",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 mb-4 bg-white/30 py-6 pr-20 pl-6 rounded-xl max-md:px-5 max-md:max-w-full"
                  >
                    <img src={item.src} alt={item.title} />
                    <div>
                      <h3 className="text-sm">{item.title}</h3>
                      <p className="text-xs font-light">{item.description}</p>
                    </div>
                  </div>
                ))}
              </article>
            </div>
          </div>

          {[
            { title: "Movements", link: "All Movements >", cards: [pic1, pic2, pic3] },
            { title: "Meditations", link: "All Meditations >", cards: [pic1, pic2, pic3] },
            { title: "Soundscape", link: "All Soundscape >", cards: [pic1, pic2, pic3] },
            { title: "Work Relief", link: "All Work Releives >", cards: [pic1, pic2, pic3] },
          ].map((section, index) => (
            <main key={index} className="flex flex-col mb-5 mt-20 p-7 bg-black bg-opacity-20">
              <header className="flex relative gap-10 items-start w-full font-bold text-white max-w-[1145px] pr-[807px] max-md:pr-5 max-md:max-w-full">
                <h1 className="z-0 text-2xl">{section.title}</h1>
                <nav className="absolute top-2/4 left-2/4 gap-10 self-stretch pl-32 text-base uppercase -translate-x-2/4 -translate-y-2/4 min-w-[240px] w-[254px]">
                  <a href="#" className="text-white">
                    {section.link}
                  </a>
                </nav>
              </header>
              <section className="grid grid-cols-3 gap-6 mt-10 max-md:grid-cols-1">
                {section.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="flex flex-col items-center bg-white bg-opacity-10 p-4 rounded-lg"
                  >
                    <img src={card} alt={`${section.title} ${cardIndex + 1}`} className="w-full h-auto rounded" />
                    <h3 className="text-white text-lg mt-3">Title {cardIndex + 1}</h3>
                    <p className="text-white text-sm font-light">Description {cardIndex + 1}</p>
                  </div>
                ))}
              </section>
            </main>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
