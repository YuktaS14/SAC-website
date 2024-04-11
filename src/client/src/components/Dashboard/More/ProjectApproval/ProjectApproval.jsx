import React,  {useState, useEffect} from 'react'
import LayoutLeft from '../../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../../Layout/LayoutRight/LayoutRight'
import { Profiler } from 'react'
import ProjectApproveComponent from './ProjectApproveComponent'
import axios from 'axios'
// import LiveEventComponent from './LiveEventComponent'

const ProjectApproval = () => {

    const [ProjAppr , setProjAppr] = useState([])
    const [nodisplay,setnodisplay] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/projectApproval')
        .then((response)=>{
            setProjAppr(response.data)
        })
        .catch((error)=>{
            setnodisplay(true)
        })
    })
  return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='proj' />
            </div>
            <div className='d-flex justify-content-center' style={{width:'calc(100% - 42rem)'}}>
            <div className='' style={{ width: '43rem', margin: '3rem 1rem', textAlign: 'justify'}}>
                <div className='projecthead' style={{paddingLeft: "2rem"}}>
                    <h1>Project Approval</h1>
                </div>
                <div className="projectapprovecont container">
                    {ProjAppr.map((element,index)=>{
                                return <ProjectApproveComponent name = {element.name} clubName= {element.clubName} logo_image={element.logo_image} member_num={element.member_num} time = {element.time} date={element.date} venue={element.venue} Skill1={element.Skill1} Skill2={element.Skill2} eventTitle = {element.eventTitle} content = {element.content}/>
                            })}

                    {nodisplay && 
                        <div className=" container d-flex mt-5">
                            <div className="card lgcard border-0 rounded-0 w-200 mb-3" style={{ backgroundColor: 'rgb(250 199 170)' }}>
                                <div class="card-body">
                                    <p>No Projects to show .............................</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            </div>
            <div style={{ width: '22rem' }}>
                <LayoutRight />
            </div>
        </div>
    )
}

export default ProjectApproval
