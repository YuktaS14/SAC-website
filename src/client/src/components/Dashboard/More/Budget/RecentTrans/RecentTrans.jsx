import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RecentTrans = (props) => {
    const [colHead, setColHead] = useState(['Name', 'Mode', 'Date', 'Amount'])
    const [objs, setObjs] = useState([
        {
            Name: 'Figma',
            Mode: 'Cash',
            Date: '26-06-2023',
            Amount: -1850
        },
        {
            Name: 'Figma',
            Mode: 'Cash',
            Date: '26-06-2023',
            Amount: -1850
        },
        {
            Name: 'Figma',
            Mode: 'Cash',
            Date: '26-06-2023',
            Amount: 1850
        },
    ])

    useEffect(()=>{
        axios.get('http://localhost:8000/Recent')
        .then(res => {
            setColHead(res.data.colHead)
            setObjs(res.data.objs)
        })
        .catch(er => console.log(er))
    },[])

    return (
        <div className='d-flex flex-column' style={{ padding: '1rem 0rem', border: '2px dashed white', borderRadius: '1rem' }}>
            <div className='d-flex align-items-center' style={{ padding: '0rem 3rem', borderBottom: '2px dashed black' }}>
                <p className='' style={{ fontWeight: '600', fontSize: '115%' }}>Recent Transactions</p>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center pt-2'>
                {colHead.map((data) => (
                    <div className='d-flex justify-content-center' style={{ width: '10rem' }}>
                        <p style={{ fontWeight: 'bold', color: 'gray' }}>{data}</p>
                    </div>
                ))}
            </div>
            {objs.map((obj) => (
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    {colHead.map((data) => (
                        <div className='d-flex justify-content-center' style={{ width: '10rem' }}>
                            {
                                data == 'Amount' ? obj[data] > 0 ? <p style={{ fontWeight: 'bold', color: 'green' }}>{obj[data]} <span>👎🏿</span></p> : <p style={{ fontWeight: 'bold', color: 'rgb(224, 64, 251)' }}>{obj[data]} ₹</p> : <p style={{ fontWeight: 'bold' }}>{obj[data]}</p>
                            }
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default RecentTrans
