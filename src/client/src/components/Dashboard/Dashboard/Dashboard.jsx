import React, { useState, useEffect } from 'react';
import LayoutLeft from '../Layout/LayoutLeft/LayoutLeft';
import LayoutRight from '../Layout/LayoutRight/LayoutRight';
import Post from './Post/Post';
import { Link } from 'react-router-dom';
import { BiSolidBookReader } from 'react-icons/bi';
import axios from 'axios';
import Clubcard from './Clubcard/Clubcard';
import ClubPage from '../Clubs/components/ClubPage';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const { userObject } = location.state;

    const [nodisplay, setnodisplay] = useState(false);
    const [activeclub, setactiveclub] = useState(false);
    const [clubname, setclubname] = useState('');
    const [myclubs, setmyclubs] = useState([]);
    const [dashAnct, setdashAnct] = useState([]);
    const [status, setstatus] = useState([]);

    const onclicked = (element) => {
        setactiveclub(true);
        setclubname(element);
    };

    useEffect(() => {
        axios.get('http://localhost:8000/clubs')
            .then((response) => {
                setmyclubs(response.data);
            })
            .catch((error) => {
                setnodisplay(true);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/DashAnct')
            .then((response) => {
                setdashAnct(response.data);
            })
            .catch((error) => {
                setnodisplay(true);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/status')
            .then((response) => {
                setstatus(response.data);
            })
            .catch(() => {
                setstatus({ "clubs": "0", "events": "0", "ongoingProjects": "0", "hourlearning": "0" });
            });
    }, []);

    return (
        <>
            {!activeclub && <div className='d-flex flex-row'>
                <div style={{ width: '20rem' }}>
                    <LayoutLeft ele='dashboard' userObject={userObject} />
                </div>
                <div className='d-flex justify-content-center' style={{ width: 'calc(100% - 42rem)' }}>
                    <div className='container' style={{ width: '45rem', margin: '3rem 4rem', textAlign: 'justify' }}>

                        <div className='container'>
                            <h1>Dashboard</h1>
                        </div>

                        <div className="container my-5" style={{ border: "2px solid #ced4da", borderRadius: "10px" }}>
                            <div className='container my-3'>
                                <h3 style={{ display: "inline" }}>Announcements</h3>
                                <Link to="/announcements">
                                    <button type="button" className="btn btn-primary" style={{ backgroundColor: 'rgb(243 130 33) ', borderStyle: 'none', color: "white", float: 'right' }}>View All</button>
                                </Link>
                            </div>

                            {dashAnct.map((element, index) => {
                                return <Post key={index} img={element.img} heading={element.heading} time={element.time} />;
                            })}
                            {nodisplay && <div style={{ fontSize: "1.3rem", marginLeft: "1rem", marginBottom: "1rem" }}> No Announcement to display </div>}
                        </div>

                        <div className="container my-5" >
                            <div>
                                <h3>Status</h3>
                            </div>
                            <div className="container d-flex flex-row my-3" style={{ border: "2px solid #ced4da", borderRadius: "10px" }}>
                                <div className="d-flex flex-column my-3 mr-3 px-3 py-4" style={{ width: "14rem", height: "6rem", justifyContent: "center", alignItems: "center" }}>
                                    <div>
                                        <BiSolidBookReader style={{ color: "rgb(243 130 33)", fontSize: "2rem" }} />
                                    </div>
                                    <div>
                                        {status.clubs} Clubs
                                    </div>
                                </div>
                                <div className='vr my-3 mx-3' style={{ border: "1px solid" }}></div>
                                <div className="d-flex flex-column my-3 mr-3 px-3 py-4" style={{ width: "14rem", height: "6rem", justifyContent: "center", alignItems: "center" }}>
                                    <div>
                                        <BiSolidBookReader style={{ color: "rgb(243 130 33)", fontSize: "2rem" }} />
                                    </div>
                                    <div>
                                        {status.events} Events
                                    </div>
                                </div>
                                <div className='vr my-3 mx-3' style={{ border: "1px solid" }}></div>
                                <div className="d-flex flex-column my-3 mr-3 px-3 py-4" style={{ width: "14rem", height: "6rem", justifyContent: "center", alignItems: "center" }}>
                                    <div className="mt-4">
                                        <BiSolidBookReader style={{ color: "rgb(243 130 33)", fontSize: "2rem" }} />
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        {status.ongoingProjects} Ongoing projects
                                    </div>
                                </div>
                                <div className='vr my-3 mx-3' style={{ border: "1px solid" }}></div>
                                <div className="d-flex flex-column my-3 mr-3 px-3 py-4" style={{ width: "14rem", height: "6rem", justifyContent: "center", alignItems: "center" }}>
                                    <div className='mt-4'>
                                        <BiSolidBookReader style={{ color: "rgb(243 130 33)", fontSize: "2rem" }} />
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        {status.hourlearning} hours learning
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex flex-column container my-5' >
                            <div className='container'>
                                <h3>My Clubs</h3>
                            </div>
                            <div className='container row flex-row flex-nowrap overflow-auto'>
                                {myclubs.map((element, index) => {
                                    if (element.Joined === "yes") {
                                        return <Clubcard key={index} obj={element} onclick={onclicked} />;
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                            {nodisplay && <div style={{ fontSize: "1.3rem", marginLeft: "1rem", marginBottom: "1rem" }}> No Clubs Joined </div>}
                        </div>
                    </div>
                </div>

                <div style={{ width: '20rem' }}>
                    <LayoutRight userObject={userObject} />
                </div>

            </div>}

            {activeclub && myclubs.map((item, index) => {
                if (item.name === clubname) {
                    return <ClubPage key={index} setactiveclub={setactiveclub} name={item.name} description={item.description} ClubHeads={item.ClubHeads} ClubLeads={item.ClubLeads} Clubemail={item.Clubemail} ContactNo={item.ContactNo} Joined={item.Joined} image={item.image} />;
                } else {
                    return null;
                }
            })}
        </>
    );
};

export default Dashboard;