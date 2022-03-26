import { Cards, Chart, CountryPicker } from './Components';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { fetchData } from './Api';
import logo from './images/image.png';

const App = () => {
   const [data, setData] = useState({});
   const [country, setCountry] = useState('');

   const handleCountryChange = async (country) => {
      const data = await fetchData(country);
      setCountry(data);
   };

   useEffect(() => {
      fetchData().then((data) => setData(data));
   }, []);

   return (
      <section className={styles.container}>
         <img className={styles.image} src={logo} alt="COVID-19" />
         <Cards data={data} />
         <CountryPicker handleCountryChange={handleCountryChange} />
         <Chart data={data} country={country} />
      </section>
   );
};

export default App;
