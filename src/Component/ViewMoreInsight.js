import React from 'react'
import Grid from '@material-ui/core/Grid'
import trendingUp from '../Icon/trendingUp.svg'
import classes from './Component.module.css'

export default function ViewMoreInsight() {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      style={{ marginTop: '10px' }}
    >
      <img src={trendingUp} height="11px" width="18px" alt="trending up icon" />
      <p className={classes.viewMoreInsightText}>view more insights</p>
    </Grid>
  )
}
