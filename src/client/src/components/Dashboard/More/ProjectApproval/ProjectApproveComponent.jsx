import React from 'react'
import './ProjectApprStyle.css'

export default function ProjectApproveComponent(props) {
  return (
    <>
        <div className="projectApproval c container d-flex mt-5">
                <div className="cc card lgcard border-0 w-200 mb-3">
                    <div className="row p-0" style={{ backgroundColor: 'rgb(250 199 170)'}}>
                        {/* First column (Announcement)*/}
                        <div className="col-md-8 border-primary">
                            {/* <!-- Content for the first part of the card --> */}
                            <div className="container d-flex flex-row my-3 mx-0">
                                {/* logo of club */}
                                <div className='logo'>
                                    <img src={props.logo_image} className="rounded-circle" alt="..." style={{ width: '3.5rem', height: '3.5rem' }} />
                                </div>
                                <div className="container d-flex flex-column">
                                    {/* club name */}
                                    <div className='clubName container d-flex align-items-center m-0'style={{fontSize:'0.8rem',paddingTop:'0.5rem'}} >
                                        <strong>{props.name}</strong>
                                    </div>
                                    <div className='clubName container d-flex align-items-center m-0 gap-1'style={{fontSize:'1rem'}} >
                                        <p>FROM <strong> {props.clubName}</strong></p>
                                        <p style={{color:'rgb(104,104,104)', fontSize:'0.8rem', paddingLeft: "1rem"}}>{props.time}</p>
                                    </div>
                                    {/* content of announcement */}
                                    <div className="container m-0 p-0" >
                                        <h5 className="card-title">{props.eventTitle}</h5>
                                        <p className="card-text ">
                                            {props.content}
                                        </p>
                                    </div>
                                    <div className='skill container d-flex px-0 py-2'>
                                        <div className='skill1 container mx-0' style={{backgroundColor:"white" , width:"auto" , textAlign:"center", padding:'0.5rem'}}>{props.Skill1}</div>
                                        <div className='skill2 container mx-3' style={{backgroundColor:"white" , width:"auto" , textAlign:"center", padding:'0.5rem'}}>{props.Skill2}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second column (POSTER)*/}
                        
                        <div className="col-md-4">
                            <div className="card border-0 rounded-0 my-4"style={{height:'13rem', backgroundColor:'rgb(250 199 170)'}}>
                                <div className="card-body d-flex justify-content-center align-items-center text-center">
                                    {/* content of poster */}
                                <p className="card-text">
                                        <p className='mb-4' style={{fontSize:'1.3rem'}}>Member : {props.member_num}</p>
                                        <p className='mb-2' style={{fontSize:'1.3rem'}}><button type="button" class="btn btn-light border-0" style={{color: '#e67300'}}><strong>APPROVE</strong></button></p>
                                </p>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
    </>
  )
}
