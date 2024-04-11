import React, {useState, useEffect} from 'react'
import LayoutLeft from '../Layout/LayoutLeft/LayoutLeft'
import LayoutRight from '../Layout/LayoutRight/LayoutRight'
import LiveEventComponent from './LiveEventComponent'
import axios from 'axios'

const LiveEvents = () => {
    const [livEvnt , setlivEvnt] = useState([])
    const [nodisplay,setnodisplay] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/liveEvent')
        .then((response)=>{
            setlivEvnt(response.data)
        })
        .catch((error)=>{
            setnodisplay(true)
        })
    })
  return (
        <div className='d-flex flex-row'>
            <div style={{ width: '20rem' }}>
                <LayoutLeft ele='live' />
            </div>
            <div className='d-flex justify-content-center' style={{width:'calc(100% - 42rem)'}}>
            <div className='ml-2' style={{maxwidth: '42rem', width: 'auto', margin: '3rem 1rem', textAlign: 'justify'}}>
                <div className='liveHead' style={{paddingLeft: "2rem"}}>
                    <h1>LiveEvents</h1>
                </div>
                <div className="liveCont container">

                    {livEvnt.map((element,index)=>{
                            return <LiveEventComponent clubName= {element.clubName} logo_image={element.logo_image} time = {element.time} date={element.date} venue={element.venue} eventTitle = {element.eventTitle} content = {element.content} poster_img= {element.poster_img}/>
                        })}

                    {nodisplay && 
                        <div className="container d-flex mt-5">
                            <div className="card lgcard border-0 rounded-0 w-200 mb-3" style={{ backgroundColor: 'rgb(250 199 170)' }}>
                                <div class="card-body">
                                    <p>No Live Events to show .............................</p>
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

export default LiveEvents
