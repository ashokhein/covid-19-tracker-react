
import React from 'react';
import { Grid  } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';

import styles from './Cards.module.css'
import Card from './Card'

const Cards = ({cardData: { confirmed,recovered,deaths,lastUpdate }}) => {
  if(!confirmed) return <LinearProgress />

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Card itemClassName={styles.infected} itemTitle="Infected" itemDescription="Number of active cases of COVID-19" itemValue={confirmed.value} lastUpdate={lastUpdate} />              
        <Card itemClassName={styles.recovered} itemTitle="Recovered" itemDescription="Number of recoveries from COVID-19" itemValue={recovered.value} lastUpdate={lastUpdate} />              
        <Card itemClassName={styles.deaths} itemTitle="Deaths" itemDescription="Number of deaths caused by COVID-19" itemValue={deaths.value} lastUpdate={lastUpdate} />              
      </Grid>
    </div>
  );
}

export default Cards