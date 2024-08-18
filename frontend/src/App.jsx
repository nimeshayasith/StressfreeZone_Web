import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import AdminLogin from './Components/Admin login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
