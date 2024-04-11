import React , {useState , useEffect} from 'react'
import LayoutLeft from '../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../Layout/LayoutRight/LayoutRight'
import AnncmtComponent from './AnncmtComponent'
import axios from 'axios'

const Announcements = () => {
    const [ancts , setancts] =  useState([])
    const [nodisplay,setnodisplay] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/announcement')
        .then((response)=>{
            setancts(response.data)
        })
        .catch((error)=>{
            setnodisplay(true)
        })
    })
    return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='announce' />
            </div>
            <div className='d-flex justify-content-center' style={{width:'calc(100% - 42rem)'}}>
            <div className='ml-2 flex-column' style={{maxWidth: '45rem', width: 'auto', margin: '3rem 1rem', textAlign: 'justify' }}>
                <div className='anncHead' style={{paddingLeft: "2rem"}}>
                    <h1>Announcements</h1>
                </div>
                <div className="anncCont container">
                    {ancts.map((element,index)=>{
                        return <AnncmtComponent clubName= {element.clubName} logo_image={element.logo_image} time = {element.time} eventTitle = {element.eventTitle} content = {element.content}/>
                    })}
                    {nodisplay && 
                        <div className="anncCont c container d-flex mt-5">
                            <div className="card lgcard border-0 rounded-0 w-200 mb-3" style={{ backgroundColor: 'rgb(250 199 170)' }}>
                                <div class="card-body">
                                    <p>No Announcement to show .............................</p>
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

export default Announcements


