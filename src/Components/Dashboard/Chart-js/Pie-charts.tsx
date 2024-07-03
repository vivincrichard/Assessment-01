
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        datasets: [
            {
                label: 'Top Products',
                data: [14, 31, 55],
                backgroundColor: ['#EE8484','#F6DC7D','#98D89E'],
                borderColor: ['#EE8484','#F6DC7D','#98D89E'],
                borderWidth: 2,
            },
        ],
    };

    return <Pie data={data} />;
};

export default PieChart;
