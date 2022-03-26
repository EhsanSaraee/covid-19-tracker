import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../Api';
import styles from './Chart.module.css';

const Chart = () => {
   const [dailyData, setDailyData] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         setDailyData(await fetchDailyData());
      };
      fetchApi();
   }, []);

   const data = {
      labels: dailyData.map(({ date }) => date),
      datasets: [
         {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
         },
         {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
         },
      ],
   };

   return (
      <section className={styles.container}>
         {dailyData.length ? <Line data={data} /> : null}
      </section>
   );
};

export default Chart;
