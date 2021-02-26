import React from 'react'
import Grid from '@material-ui/core/Grid'
import classes from './Component.module.css'

export default function Option(props) {
  const OptionImg = (props) => (
    <svg
      height="11"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.03055 0.212387C4.75703 2.77439 3.08739 5.58559 0.0187988 8.64319L3.93076 11.8128C9.50951 8.36878 13.014 4.52719 14.4443 0.287987C14.4529 0.262787 14.4614 0.237587 14.47 0.212387H5.03055Z"
        fill={props.colorCode}
      />
    </svg>
  )

  const optionSide = (props) => {
    if (props.side === 'right') {
      return (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ marginLeft: '20px' }}
        >
          <Grid>
            <div className={classes.optionPercentBox}>
              <p className={classes.optionPercentText}>100%</p>
              <div className={classes.optionImg}>
                <OptionImg colorCode={props.colorCode} />
              </div>
            </div>
          </Grid>
          <Grid>
            <p className={classes.optionText}>Option</p>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ marginRight: '20px' }}
        >
          <Grid>
            <p className={classes.optionText}>Option</p>
          </Grid>
          <Grid>
            <div className={classes.optionPercentBox}>
              <p className={classes.optionPercentText}>100%</p>
              <div className={classes.optionImg}>
                <OptionImg colorCode={props.colorCode} />
              </div>
            </div>
          </Grid>
        </Grid>
      )
    }
  }

  return optionSide(props)
}
