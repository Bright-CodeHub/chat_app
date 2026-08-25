import React from 'react'
import { ArcElement, CategoryScale, Chart, Filler, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { getLast7Days } from '../../Lib/features';

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
        labels: labels,
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
        <Line data={data} options={lineChartOptions} >Charts</Line>
    )
}

const DoughnutChart = () => {

    return (
        <div>

        </div>
    )
}

export {
    LineChart,
    DoughnutChart
}