import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import DropdownList from './Dropdown'
import TitleWithInfoIcon from '../Component/TitleWithInfoIcon'
import ViewMoreInsight from '../Component/ViewMoreInsight'
import MixChart from '../Component/MixChart'
import classes from './Component.module.css'

export default function MixChartCard() {
  return (
    <Card className={classes.card}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid>
          <TitleWithInfoIcon />
        </Grid>
        <Grid>
          <DropdownList />
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <MixChart />
      </Grid>
      <ViewMoreInsight />
    </Card>
  )
}
