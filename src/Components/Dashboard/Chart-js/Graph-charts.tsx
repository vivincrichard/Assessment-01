//
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
//
// ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);
//
// const LineChart = () => {
//     const data = {
//         labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
//         datasets: [
//             {
//                 data: [200, 300, 400, 300],
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 fill: true,
//                 tension: 0.4,
//             },
//             {
//                 data: [150, 250, 350, 450],
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 fill: true,
//                 tension: 0.4,
//             },
//         ],
//     };
//
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top' as const,
//             },
//             title: {
//                 display: true,
//                 text: 'Weekly Activities',
//             },
//         },
//     };
//
//     return <Line data={data} options={options} />;
// };
//
// export default LineChart;
