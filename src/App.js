import React, { useEffect, useState } from 'react';

import Cards from './components/Cards';
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
import { fetchData } from './services/api';
import styles from './App.module.css';
import coronaImage from './images/image.png';

export default function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');


  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    getData();
  }, []);

  async function handleCountryChange(choosedCountry) {
    const fetchedData = await fetchData(choosedCountry);
    setData(fetchedData);
    setCountry(choosedCountry);
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} actualCountryName={country} />
      <Chart data={data} country={country} />
    </div>
  );
}
