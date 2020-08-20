
import React from 'react';
import { Grid, Card, Typography, CardContent } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const CardItem = ({ itemClassName,itemTitle,itemDescription,itemValue,lastUpdate } ) => {

  return (
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,itemClassName)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{itemTitle}</Typography>
                <Typography variant="h5">
                <CountUp start={0} end={itemValue} duration={5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{itemDescription}</Typography>
            </CardContent>
        </Grid>   
  );
}

export default CardItem