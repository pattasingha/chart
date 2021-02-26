import React, { useEffect } from 'react'
import Chart from 'chart.js'

export default function DoughnutChart() {
  const chartRef = React.createRef()
  useEffect(() => {
    const doughnutChartRef = chartRef.current.getContext('2d')
    doughnutChartRef.height = 250
    const data = {
      datasets: [
        {
          data: [3, 9, 4, 3, 11, 6, 10, 19, 8, 5],
          backgroundColor: [
            '#2F69CC',
            '#09D5A4',
            '#9F0FEF',
            '#F99A02',
            '#DA3811',
            '#2F69CC',
            '#129219',
            '#DA3812',
            '#F99A02',
            '#129219',
          ],
          borderWidth: 3,
        },
      ],
    }
    const options = {
      tooltips: {
        enabled: false,
      },
      hover: false,
      legend: {
        display: false,
      },
      cutoutPercentage: 40,
      maintainAspectRatio: false,
    }
    new Chart(doughnutChartRef, {
      type: 'doughnut',
      data: data,
      options: options,
    })
  })

  return (
    <canvas id="doughnutChart" ref={chartRef} width="250" height="250"></canvas>
  )
}
