import React from 'react'
import { useSelector } from 'react-redux'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Состояние пациента',
        },
    },
}

const Diagram = () => {
    const diagramBack = useSelector((state) => state.temperatureDiagram)
    const diagramPresure = useSelector((state) => state.presureDiagram)
    const pulseDiagram = useSelector((state) => state.pulseDiagram)
    const breetheDiagram = useSelector((state) => state.breetheDiagram)
    let labels = diagramBack === null ? ['loading'] : diagramBack[0]?.date_inspection

    const data = {
        labels,
        datasets: [
            {
                label: 'Утренний осмотр температуры',
                data: diagramBack === null ? ['loading'] : diagramBack[0]?.morning,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Вечерний осмотр температуры',
                data: diagramBack === null ? ['loading'] : diagramBack[0]?.evening,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Утренний осмотр давления',
                data: diagramPresure === null ? ['loading'] : diagramPresure[0]?.morning,
                borderColor: 'rgb(199, 147, 3)',
                backgroundColor: 'rgba(255, 187, 0, 0.5)',
            },
            {
                label: 'Вечерний осмотр давления',
                data: diagramPresure === null ? ['loading'] : diagramPresure[0]?.evening,
                borderColor: 'rgb(238, 1, 238)',
                backgroundColor: 'rgba(30, 85, 122, 0.5)',
            },
            {
                label: 'Утренний осмотр пульса',
                data: pulseDiagram === null ? ['loading'] : pulseDiagram[0]?.morning,
                borderColor: 'rgb(31, 30, 28)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
            },
            {
                label: 'Вечерний осмотр пульса',
                data: pulseDiagram === null ? ['loading'] : pulseDiagram[0]?.evening,
                borderColor: 'rgb(19, 117, 48)',
                backgroundColor: 'rgba(30, 122, 65, 0.5)',
            },

            {
                label: 'Утренний осмотр дыхания',
                data: breetheDiagram === null ? ['loading'] : breetheDiagram[0]?.morning,
                borderColor: 'rgb(56, 32, 77)',
                backgroundColor: 'rgba(75, 15, 15, 0.096)',
            },
            {
                label: 'Вечерний осмотр дыхания',
                data: breetheDiagram === null ? ['loading'] : breetheDiagram[0]?.evening,
                borderColor: 'rgb(124, 105, 155)',
                backgroundColor: 'rgba(134, 87, 156, 0.5)',
            },
        ],
    }
    return (
        <div style={{ background: 'white' }}>
            <Line options={options} data={data} />
        </div>
    )
}

export default Diagram
