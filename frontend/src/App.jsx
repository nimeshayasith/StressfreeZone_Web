import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Home/Register';
import Login from './Components/Home/Login';
import AdminLogin from './Components/Admin/Admin login';
import Home from './Components/Home/Home';
import AboutUsPage from './Components/Home/About Us';
import ContactUsPage from './Components/Home/Contact Us';
import PremierPlanPage from './Components/Home/Premier Plan';
import MobileAppPage from './Components/Home/Mobile App';
import Dashboard from './Components/Dashboard/Dashboard';
import StressChecker from './Components/Stress Checker/Stress Checker';
import MyDay from './Components/My Day/My Day';
import Meditation from './Components/Meditation/Meditation';
import DeepRelax from './Components/Meditation/Deep Relax';
import QuickRelax from './Components/Meditation/Quick Relax';
import Movements from './Components/Movements/Movements';
import WorkRelief from './Components/Work Relief/Work Relief';
import LearnMore from './Components/Learn More/Learn More';
import Soundscape from './Components/Soundscape/Soundscape';
import UserProfile from './Components/User Profile/User Profile';
import QuickRelaxation from './Components/Home/Quick Relaxation';
import LearnMoreHome from './Components/Home/Learn More Home';
import StressCheckerHome from './Components/Home/Stress Checker Home';
import MovementsHome from './Components/Home/MovementsHome';
import BreathingExercise from './Components/Home/Quick Breathing Exercise';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import AddVideos from './Components/Admin/Add Videos';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/login" element={< Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/premierplan" element={<PremierPlanPage />} />
        <Route path="/mobileapp" element={<MobileAppPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stresschecker" element={<StressChecker />} />
        <Route path="/myday" element={<MyDay />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/quickrelax" element={<QuickRelax />} />
        <Route path="/deeprelax" element={<DeepRelax />} />
        <Route path="/movements" element={<Movements />} />
        <Route path="/workrelief" element={<WorkRelief />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/soundscape" element={<Soundscape />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/quickrelaxation" element={<QuickRelaxation />} />
        <Route path="/learnmorehome" element={<LearnMoreHome />} />
        <Route path="/stresscheckerhome" element={<StressCheckerHome />} />
        <Route path="/movementshome" element={<MovementsHome />} />
        <Route path="/quickbreath" element={<BreathingExercise />} />
        <Route path="/video" element={<VideoPlayer />} />
        <Route path="/add-video" element={<AddVideos />} />
      </Routes>
    </Router>
  );
}

export default App;
