import React, { useState, useEffect } from 'react'
import { fetchCountries } from '../../api'
import { FormControl, NativeSelect } from '@material-ui/core'

import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {

  const [countries,setCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries())
    }
    fetchAPI()
    return () => {}
  },[])


  return (
    <>
        <FormControl className={styles.formControl}>
          <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countries.map(((country,key) => <option key={key} value={country}>{country}</option>))}
          </NativeSelect>
        </FormControl>
    </>
  )
}

export default CountryPicker
