import React from 'react'
import Grid from '@material-ui/core/Grid'
import ChartCard from './Component/ChartCard'
import MixChartCard from './Component/MixChartCard'

function App() {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} style={{ maxWidth: '640px' }}>
        <ChartCard />
      </Grid>
      <Grid item xs={12} style={{ maxWidth: '640px' }}>
        <MixChartCard />
      </Grid>
    </Grid>
  )
}

export default App
