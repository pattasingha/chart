import React from 'react'
import info from '../Icon/info.svg'
import Grid from '@material-ui/core/Grid'
import classes from './Component.module.css'

export default function DropdownList() {
  return (
    <Grid container direction="row" alignItems="center">
      <h1 className={classes.titleInfo}>Title</h1>
      <div className={classes.infoBox}>
        <img className={classes.infoImg} src={info} alt="info icon" />
      </div>
    </Grid>
  )
}
