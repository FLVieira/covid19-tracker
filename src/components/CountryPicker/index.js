import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../services/api';

export default function CountryPicker({ handleCountryChange, actualCountryName }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    async function fetchingCountries() {
      setFetchedCountries(await fetchCountries());
    }
    fetchingCountries();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">{actualCountryName ? `${actualCountryName}` : 'Global' }</option>
        {fetchedCountries.map((country) => <option key={Math.random()} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
}
