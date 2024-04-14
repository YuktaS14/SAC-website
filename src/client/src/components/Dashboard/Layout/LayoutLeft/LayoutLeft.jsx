import React, { useState, useEffect } from 'react'
import { FaHome, FaRegCalendar, FaBars } from 'react-icons/fa'
import { HiAnnotation, HiDotsHorizontal } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { GiAerialSignal } from "react-icons/gi";
import './LayoutLeft.css'
import { Link ,useLocation} from 'react-router-dom';

const Layout = (props) => {
    var location = useLocation();
    var userObject = location.state?.userObject;

    let bclrdash = props.ele === 'dashboard' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';
    let bclrannounce = props.ele === 'announce' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';
    let bclrclubs = props.ele === 'clubs' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';
    let bclrcalendar = props.ele === 'cal' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';
    let bclrlive = props.ele === 'live' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';
    let bclropportunities = props.ele === 'oppor' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';
    let bclrmore = props.ele === 'more' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';
    let bclrstatdat = props.ele === 'statdat' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';
    let bclrbudge = props.ele === 'budge' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';
    let bclrproj = props.ele === 'proj' ? 'rgb(243 130 33)' : 'rgb(250 199 170)';

    let isLeftVis = false;

    const displayLeftMenu = () => {
        if (!isLeftVis) {
            document.querySelector('.dash-left').style.display = 'inline-flex'
            let lftmnu = document.querySelector('.leftMenu')
            lftmnu.style.backgroundColor = 'rgb(250 199 170)'
            lftmnu.style.height = '100%'
            lftmnu.style.width = '20rem'
            document.querySelector('.leftMenu').style.backgroundColor = 'rgb(250 199 170)'
            isLeftVis = true
        }
        else {
            let lftmnu = document.querySelector('.leftMenu')
            lftmnu.style.backgroundColor = 'white'
            lftmnu.style.height = '5rem'
            lftmnu.style.width = '5rem'
            document.querySelector('.dash-left').style.display = 'none'
            isLeftVis = false
        }
    }

    const changeDisplay = () => {
        if (window.innerWidth < 1440) {
            let lftmnu = document.querySelector('.leftMenu')
            lftmnu.style.backgroundColor = 'white'
            lftmnu.style.height = '5rem'
            lftmnu.style.width = '5rem'
            document.querySelector('.leftHamburg').style.display = 'inline-flex'
            document.querySelector('.dash-left').style.display = 'none'
            document.querySelector('.dash-left').style.marginTop = '1rem'
        } else {
            let lftmnu = document.querySelector('.leftMenu')
            lftmnu.style.backgroundColor = 'white'
            lftmnu.style.height = '100%'
            lftmnu.style.width = '20rem'
            document.querySelector('.leftHamburg').style.display = 'none'
            document.querySelector('.dash-left').style.display = 'inline-flex'
            document.querySelector('.dash-left').style.marginTop = '0rem'
        }
    }

    useEffect(() => {

        changeDisplay()

        let prevWidth = window.innerWidth;

        const handleResize = () => {
            let currwidth = window.innerWidth;

            if (currwidth !== prevWidth) {
                changeDisplay()
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <div className='leftMenu' style={{ position: 'fixed', overflowY: 'auto', top: 0, bottom: 0, left: 0, right: 0, zIndex: '999', overflowY: 'scroll', scrollbarWidth: 'none', '-ms-overflow-style': 'none', overflow: '-moz-scrollbars-none' }}>
            <div className='leftHamburg' onClick={() => displayLeftMenu()} style={{ position: 'absolute', top: 5, zIndex: '999' }} >
                <FaBars size={40} />
            </div>
            <div className='dash-left' style={{ width: '20rem', left: '0' }}>

                <div className='d-flex flex-row align-items-center' id="navbarText" style={{ paddingBottom: '1rem', width: 'inherit', marginTop: '3rem' }}>
                    <div style={{ backgroundImage: 'url(/iitlogo.jpg)', backgroundSize: 'contain', backgroundPosition: 'center', height: '5rem', width: '5rem', backgroundRepeat: 'no-repeat' }}>
                    </div>
                    <span class="navbar-text active" style={{ color: 'black', fontSize: '140%' }}>
                        <p style={{ margin: '0' }}>Student Affairs Council</p>
                        <p style={{ fontSize: '58%', color: 'Orange' }}>
                            Indian Institute of Technology Palakkad
                            hiiiiiiiiiiii 
                        </p>
                    </span>

                </div>

                <div className='d-inline-flex' style={{ backgroundColor: 'rgb(250 199 170)', width: 'inherit' }}>

                    <ul className='nav flex-column' style={{ width: 'inherit', paddingLeft: '0rem' }}>

                        <Link className="dropdown-item" to="/dashboard">
                            <li className='dash-dashboard lylist lylistmid nav-item' style={{ backgroundColor: `${bclrdash}`, borderTop: '1px solid #e2dbdb' }}>
                                <FaHome size={35} style={{ margin: '0rem 0.8rem' }} />
                                Dashboard
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/clubs">
                            <li className='dash-clubs lylist lylistmid nav-item' style={{ backgroundColor: `${bclrclubs}` }}>
                                <IoPeopleSharp size={35} style={{ margin: '0rem 0.8rem' }} />
                                Clubs
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/announcements">
                            <li className='dash-Announcements lylist lylistmid nav-item' style={{ backgroundColor: `${bclrannounce}` }}>
                                <HiAnnotation size={35} style={{ margin: '0rem 0.8rem' }} />
                                Announcements
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/calendar" >
                            <li className='dash-calendar lylist lylistmid nav-item' style={{ backgroundColor: `${bclrcalendar}` }}>
                                <FaRegCalendar size={35} style={{ margin: '0rem 0.8rem' }} />
                                Calendar
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/live-events">
                            <li className='dash-live-events lylist lylistmid nav-item' style={{ backgroundColor: `${bclrlive}` }}>
                                <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />
                                Live Events
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/opportunities">
                            <li className='dash-opporunities lylist lylistmid nav-item' style={{ backgroundColor: `${bclropportunities}` }}>
                                <GiAerialSignal size={35} style={{ margin: '0rem 0.8rem' }} />
                                Opportunities
                            </li>
                        </Link>

                        <Link className="dropdown-item" to="/static-data" style={{ backgroundColor: `${bclrstatdat}` }}>
                            <li className="dash-more lylist lylistmid nav-item" >
                                Static Data
                            </li>
                        </Link>
                        <Link className="dropdown-item" to="/budget-tracking" style={{ backgroundColor: `${bclrbudge}` }}>
                            <li className="dash-more lylist lylistmid nav-item" >
                                Budget Tracking
                            </li>
                        </Link>
                        <Link className="dropdown-item" to="/project-approval" style={{ backgroundColor: `${bclrproj}` }}>
                            <li className="dash-more lylist nav-item" >
                                Project Approval
                            </li>
                        </Link>



                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Layout





