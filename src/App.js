import React from 'react'
import Grid from '@material-ui/core/Grid'
import ChartCard from './Component/ChartCard'

function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <ChartCard />
    </Grid>
  )
}

export default App
