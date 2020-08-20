import React, { useState, useEffect } from 'react'
import { fetchDailyData } from './../../api'
import { Line, Bar } from "react-chartjs-2"
import LinearProgress from '@material-ui/core/LinearProgress';

import styles from "./Chart.module.css"

const Chart = ( { cardData : { confirmed , recovered, deaths } , country }) => {

  const [dailyData,setDailyData] = useState([])

  useEffect(() => {
     const fetchDailyDataAPI = async () => {
      setDailyData(await fetchDailyData())
    }
    fetchDailyDataAPI()
    return () => { }
  },[])

  const lineChart = (
    dailyData.length 
      ? (
        <Line 
          data= { {
              labels: dailyData.map(( { reportDate }) => reportDate),
              datasets: [{
                data: dailyData.map(({confirmed}) => confirmed ),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
              }, {
                data: dailyData.map(({deaths}) => deaths ),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true
              }]
            }
          }
        />
      ) : <LinearProgress />
  )


  const barChart = (
    confirmed 
      ? ( <Bar 
          data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [{
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                data: [confirmed.value, recovered.value, deaths.value]
              }]
          }}
          options = { {
            legend: { display : false },
            title: { display: true, text: `Current Country is ${country}`}
            }
          }
      /> 
      ) : <LinearProgress />
  )

  return (
    <>
     <div className={styles.container}>
       { country ? barChart : lineChart }
     </div>
    </>
  )
}

export default Chart
