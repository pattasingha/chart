import React from 'react'
import Grid from '@material-ui/core/Grid'
import down from '../Icon/down.svg'
import classes from './Component.module.css'

export default function Dropdown() {
  return (
    <div className={classes.dropdownBox}>
      <Grid container direction="row" alignItems="center">
        <p className={classes.dropdownContent}>Week</p>
        <img src={down} height="6px" alt="arrow down icon" />
      </Grid>
    </div>
  )
}
