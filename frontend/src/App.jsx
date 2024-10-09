import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Home/Register';
import Login from './Components/Home/Login';
import AdminLogin from './Components/Home/Admin login';
import Home from './Components/Home/Home';
import AboutUsPage from './Components/Home/About Us';
import ContactUsPage from './Components/Home/Contact Us';
import PremierPlanPage from './Components/Home/Premier Plan';
import MobileAppPage from './Components/Home/Mobile App';
import Dashboard from './Components/Dashboard/Dashboard';
import StressChecker from './Components/Stress Checker/Stress Checker';
import MyDay from './Components/My Day/My Day';




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
   


      </Routes>
    </Router>
  );
}

export default App;
