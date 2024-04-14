import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './scss/main.css'
import Nav from './components/Home/Navbar/Nav';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Landing from './components/Landing_Page/LandingPage'
import Login from './components/Login/Login';
import Announce from './components/Home/CalAnce/Announce/Announce';
import Announcements from './components/Dashboard/Announcements/Announcements';
import Calendar from './components/Dashboard/Calendar/Calendar';
import Clubs from './components/Dashboard/Clubs/Clubs';
import LiveEvents from './components/Dashboard/LiveEvents/LiveEvents';
import Opportunities from './components/Dashboard/Opportunities/Opportunities';
import More from './components/Dashboard/More/More';
import Budget from './components/Dashboard/More/Budget/Budget';
import StaticData from './components/Dashboard/More/StaticData/StaticData';
import ProjectApproval from './components/Dashboard/More/ProjectApproval/ProjectApproval';

function App() {
  const [duration,setDuration] = useState(true)

  const [user,setUser]= useState({});

  useEffect(
    () => {
      setTimeout(() => {
        setDuration(false);
      },3000);
    },[]
  )

  return (
    // <div className='container btn' > Hello world </div>
    <Router>
      <Routes> 
        <Route path = "/" element={duration ? <Landing/>:<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route exact path = '/dashboard' element = {<Dashboard/>}/>
        <Route path="/announcements" element={<Announcements/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/clubs" element={<Clubs/>}/>
        <Route path="/live-events" element={<LiveEvents/>}/>
        <Route path="/opportunities" element={<Opportunities/>}/>
        <Route path="/more" element={<More/>}/>
        <Route path="/budget-tracking" element={<Budget/>}/>
        <Route path="/static-data" element={<StaticData/>}/>
        <Route path="/project-approval" element={<ProjectApproval/>}/>

      </Routes>
    </Router>
  );
}

export default App;
