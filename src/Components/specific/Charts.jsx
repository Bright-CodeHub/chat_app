import React from 'react'
import { ArcElement, CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { getLast7Days } from '../../Lib/features';
import { black, orange } from '../constants/color';

Chart.register(
    CategoryScale,
    Tooltip,
    LinearScale,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    Legend
)

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            },
            beginAtZero: true
        }
    }
}

const labels = getLast7Days()

const LineChart = ({ value = [] }) => {

    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: 'Revenue',
                backgroundColor: 'rgba(93, 69, 255, 0.87)',
                borderColor: 'rgba(93, 69, 255, 0.87)',
            },
        ]
    }

    return (
        <Line data={data} options={lineChartOptions} />
    )
}

const doughnutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    },
    cutout: 90
}


const DoughnutChart = ({ value = [], labels }) => {

    const data = {
        labels,
        datasets: [
            {
                data: value,
                backgroundColor: ['rgba(94, 69, 255, 0.85)', 'rgba(250, 30, 30, 0.75)'],
                borderColor: 'rgba(210, 210, 210, 0.60)',
                offset: 5
            },
        ]
    }

    return (
        <Doughnut style={{ zIndex: 1 }} data={data} options={doughnutChartOptions} />
    )
}

export {
    LineChart,
    DoughnutChart
}