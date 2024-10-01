import React from 'react'

import { Link } from 'react-router-dom'
import Widget2 from '../assets/Widget 2.svg'
import StressTracker from '../assets/BookOpen.svg'
import CalenderDots from '../assets/CalenderDots.svg'




const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/dashboard'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={Widget2} alt="" />
            <p>Dashboard</p>
        </div>
        </Link>
         <Link to={'/stresstracker'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={StressTracker} alt="" />
            <p>Stress Tracker</p>
        </div>
        </Link>
       <Link to={'/myday'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={CalenderDots} alt="" />
            <p>My Day</p>
        </div>
        </Link> 
    </div>
  )
}

export default Sidebar
