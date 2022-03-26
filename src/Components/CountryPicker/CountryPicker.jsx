import { FormControl, NativeSelect } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { fetchCountries } from '../../Api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
   const [countries, setCountries] = useState([]);

   useEffect(() => {
      const fetchAPI = async () => {
         setCountries(await fetchCountries());
      };

      fetchAPI();
   }, []);

   return (
      <FormControl className={styles.formControl}>
         <NativeSelect
            defaultValue=""
            onChange={(e) => handleCountryChange(e.target.value)}
         >
            <option value="">United States</option>
            {countries.map((country, i) => (
               <option key={i} value={country}>
                  {country}
               </option>
            ))}
         </NativeSelect>
      </FormControl>
   );
};

export default CountryPicker;
