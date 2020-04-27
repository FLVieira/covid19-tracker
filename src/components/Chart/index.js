import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../services/api';
import styles from './Chart.module.css';

export default function Chart({ data, country }) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setDailyData(await fetchDailyData());
    }
    fetchData();
  }, []);

  const lineChart = (
    dailyData.length ? (
      <Line data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true,
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.5)',
          fill: true,
        }],
      }}
      />
    )
      : null
  );

  const barChart = (
    data.confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
          }],
        }}
        option={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    )
      : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart }
    </div>
  );
}
