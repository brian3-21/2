import './financial.css'
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { FinancialChartProps } from '../../utils/interfase';

Chart.register(...registerables);

const FinancialChart = ({dataChart}:FinancialChartProps ) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const numero = dataChart.long_term;


    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Corto plazo', 'Mediano plazo', 'Largo plazo'],
        datasets: [{
          label: 'pap',
          data: [dataChart.short_term, dataChart.medium_term, dataChart.long_term],
          borderWidth: .1,
          borderColor: '#000',
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          hoverOffset: 5,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default FinancialChart;
