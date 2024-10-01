import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import AdminLogin from './Components/Admin login';
import Home from './Components/Home';
import AboutUsPage from './Components/About Us';
import ContactUsPage from './Components/Contact Us';
import PremierPlanPage from './Components/Premier Plan';
import MobileAppPage from './Components/Mobile App';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';

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
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/stresstracker" element={<StressTracker />} />
        <Route path="/myday" element={<MyDay />} />
      </Routes>
    </Router>
  );
}

export default App;
