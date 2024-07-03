import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend} from 'chart.js';

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend
);

const LineChartsTsx = () => {
    const data = {
        labels: ['0', 'Week 1', 'Week 2', 'Week 3', 'Week 4','Week 5'],
        datasets: [
            {
                label: 'Guest',
                data: [200, 390, 200, 300, 210, 450],
                borderColor: '#E9A0A0',
                tension: 0.4
            },
            {
                label: 'User',
                data: [100, 400, 150, 450, 190, 290],
                borderColor: '#9BDD7C',
                tension: 0.3
            }
        ]
    };

    const options = {
        scales: {
            x: {
                type: 'category',
                labels: ['0', 'Week 1', 'Week 2', 'Week 3', 'Week 4','week 5'],
                grid: {
                    display: false
                },
                // ticks: {
                //     display: false
                // }
            },
            y: {
                type: 'linear',
                beginAtZero: true,
                min: 0,
                max: 500,
            }
        }
    };

    return


    <div  style={{width: '100px', height: '70px'}}>
        <Line data={data} options={options}/>
    </div>
};

export default LineChartsTsx;
