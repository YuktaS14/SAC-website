import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  // Data for the pie chart
  const [expend, Setexpand] = useState({
    "Travel": 300,
    "Merch": 100,
    "Workshop": 100
  })

  const [color, Setcolor] = useState({
    "Red": "Travel",
    "Blue": "Merch",
    "Yellow": "Workshop"
  })

  const [data, setData] = useState({
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 100, 100],
        backgroundColor: ['Red', 'Blue', 'Yellow'],
        hoverBackgroundColor: ['Red', 'Blue', 'Yellow'],
      },
    ],
  })

  useEffect(() => {

    axios.get('http://localhost:8000/Pie')
      .then(res => {
        console.log(res.data.Expenditure)
        Setexpand(res.data.Expenditure)
        Setcolor(res.data.Color)
      })
      .catch(er => console.log(er))

  }, [])

  useEffect(() => {
    setData({
      labels: Object.keys(color),
      datasets: [
        {
          data: Object.values(expend),
          backgroundColor: Object.keys(color),
          hoverBackgroundColor: Object.keys(color),
        },
      ],
    })
  }, [color, expend])

  return (
    <div>
      <h4>Your Spending Summary</h4>
      <div className='d-flex justify-content-center'>
        <div style={{ width: '12rem', height: '12rem' }}>
          <Pie data={data} />
        </div>
      </div>
      <div className='d-flex flex-row flex-wrap justify-content-center' style={{ padding: '1rem 0rem', gap: '2rem' }}>
        {data.labels.map((clr) => {
          return <div className='d-flex flex-row align-items-center gap-2'>
            <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', backgroundColor: clr.toLowerCase() }}>
            </div>
            <div><p style={{ margin: '0' }}>{color[clr]}</p></div>
          </div>
        })}
      </div>
    </div>
  );
};

export default PieChart;
