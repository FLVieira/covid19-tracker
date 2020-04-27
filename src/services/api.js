import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export async function fetchData(choosedCountry) {
  let changeableUrl = url;

  if (choosedCountry) {
    changeableUrl = `${url}/countries/${choosedCountry}`;
  }

  try {
    const { data } = await axios.get(changeableUrl);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifiedData;
  } catch (err) {
    return err;
  }
}

export async function fetchDailyData() {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (err) {
    return err;
  }
}

export async function fetchCountries() {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (err) {
    return err;
  }
}
