import React, { useEffect, useState } from 'react';
import { Cards, Chart, CountryPicker } from './components'
 
import styles  from './App.module.css'
import coranaImage from './images/coranaImage.png'

import { fetchData } from './api'

export default function App() {

  const [cardData, setCardData] = useState({})
  const [country,setCountry] = useState('')

  useEffect(() => {
    async function fecthAPI() {
        const data = await fetchData(country)
        setCardData(data)  
    }
    fecthAPI()
    
  }, [country])
  
  const handleCountryChange = async(country) => {
     setCountry(country)
  }

  return (
    <>
        <div className={styles.container}>
            <img src={coranaImage} alt='CoronaLogo' className={styles.image} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Cards cardData={cardData} />
            <Chart cardData={cardData} country={country} />
        </div>
    </>
  );
}