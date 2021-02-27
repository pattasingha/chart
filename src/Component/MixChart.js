import React, { useEffect } from 'react'
import Chart from 'chart.js'
import classes from './Component.module.css'

export default function MixChart() {
  const chartRef = React.createRef()
  Chart.defaults.global.legend.display = false
  useEffect(() => {
    const mixChartRef = chartRef.current.getContext('2d')
    let lineChartFill = mixChartRef.createLinearGradient(500, 0, 100, 0)
    lineChartFill.addColorStop(1, '#4288FF')
    lineChartFill.addColorStop(0, '#26FF97')
    const data = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      datasets: [
        {
          backgroundColor: '#FFC02E',
          data: [
            { x: 2, y: 80, r: 4.5 },
            { x: 4, y: 40, r: 4.5 },
            { x: 6, y: 27, r: 4.5 },
            { x: 8, y: 35, r: 4.5 },
            { x: 10, y: 100, r: 4.5 },
          ],
          type: 'bubble',
        },
        {
          data: [20, 80, 38, 40, 55, 27, 63, 35, 34, 100, 20],
          pointRadius: 0,
          borderWidth: 0,
          backgroundColor: lineChartFill,
          type: 'line',
        },
      ],
    }
    const options = {
      scales: {
        tooltips: {
          enabled: false,
        },
        hover: false,
        maintainAspectRatio: false,
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            ticks: {
              callback: function (value) {
                return value + '%'
              },
              stepSize: 20,
            },
          },
        ],
      },
    }
    new Chart(mixChartRef, {
      type: 'bar',
      data: data,
      options: options,
    })
  })

  return (
    <canvas id="mixChart" ref={chartRef} className={classes.mixChart}></canvas>
  )
}
