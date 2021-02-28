import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import DoughnutChart from '../Component/DoughnutChart'
import DropdownList from './Dropdown'
import TitleWithInfoIcon from '../Component/TitleWithInfoIcon'
import ViewMoreInsight from '../Component/ViewMoreInsight'
import Option from '../Component/Option'
import classes from './Component.module.css'

export default function ChartCard() {
  return (
    <Card className={classes.card} style={{ borderRadius: '14px' }}>
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
      <Grid container direction="row" alignItems="center" justify="center">
        <div>
          <Grid
            className={classes.optionGroup}
            container
            direction="column"
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid>
              <Option colorCode="#2F69CC" side="left" />
            </Grid>
            <Grid>
              <Option colorCode="#129219" side="left" />
            </Grid>
            <Grid>
              <Option colorCode="#F99A02" side="left" />
            </Grid>
            <Grid>
              <Option colorCode="#DA3812" side="left" />
            </Grid>
            <Grid>
              <Option colorCode="#129219" side="left" />
            </Grid>
          </Grid>
        </div>
        <Grid>
          <DoughnutChart />
        </Grid>
        <div>
          <Grid
            className={classes.optionGroup}
            container
            direction="column"
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid>
              <Option colorCode="#09D5A4" side="right" />
            </Grid>
            <Grid>
              <Option colorCode="#9F0FEF" side="right" />
            </Grid>
            <Grid>
              <Option colorCode="#F99A02" side="right" />
            </Grid>
            <Grid>
              <Option colorCode="#DA3811" side="right" />
            </Grid>
            <Grid>
              <Option colorCode="#2F69CC" side="right" />
            </Grid>
          </Grid>
        </div>
      </Grid>
      <ViewMoreInsight />
    </Card>
  )
}
