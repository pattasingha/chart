import React, { useEffect } from 'react'
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import classes from './Component.module.css'

const bubbleData = [
  { x: 2, y: 80, r: 4.5 },
  { x: 4, y: 40, r: 4.5 },
  { x: 6, y: 27, r: 4.5 },
  { x: 8, y: 35, r: 4.5 },
  { x: 10, y: 100, r: 4.5 },
]

const redBubbleData = bubbleData.map((item) => {
  const container = {}
  container.x = item.x
  container.y = item.y + 15
  container.r = 9.5
  return container
})

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
          data: bubbleData,
          type: 'bubble',
          datalabels: {
            color: '#000000',
            align: 'top',
            formatter: function () {
              return 'Title'
            },
            font: {
              size: 14,
              family: "'Sarala', sans-serif",
            },
          },
        },
        {
          backgroundColor: '#FF0000',
          data: redBubbleData,
          type: 'bubble',
          datalabels: {
            display: false,
          },
        },
        {
          data: [20, 80, 38, 40, 55, 27, 63, 35, 34, 100, 20],
          pointRadius: 0,
          borderWidth: 0,
          backgroundColor: lineChartFill,
          type: 'line',
          datalabels: {
            display: false,
          },
        },
      ],
    }
    const options = {
      animation: {
        duration: 0,
      },
      responsiveAnimationDuration: 0,
      tooltips: {
        enabled: false,
      },
      hover: false,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 50,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: ['rgba(255, 0, 0, 0.0)'],
            },
            ticks: {
              callback: function (value) {
                if (value <= 100) {
                  return value + '%'
                }
                return ''
              },
              stepSize: 20,
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: 12,
              mirror: true,
              padding: 50,
            },
          },
        ],
      },
    }
    new Chart(mixChartRef, {
      plugins: [ChartDataLabels],
      type: 'bar',
      data: data,
      options: options,
    })
  })

  return (
    <canvas id="mixChart" ref={chartRef} className={classes.mixChart}></canvas>
  )
}
