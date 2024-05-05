import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { YearlyData } from '../types/ProductType';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function Chart({ data }: { data: YearlyData[] }) {
  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        borderColor: 'rgb(255, 99, 132)',
        data: [] as number[],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });

  console.log('Chart data:', chartData);

  useEffect(() => {
    setChartData((prevData) => ({
      ...prevData,
      labels: data.map((item) => `${item._id.month}`),
      datasets: [
        {
          ...prevData.datasets[0],
          data: data.map((item) => item.Ortalama),
        },
      ],
    }));
  }, [data]);

  return <Line options={options} data={chartData} />;
}

export default Chart;
