import { Cards, Chart, CountryPicker } from './Components';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { fetchData } from './Api';

const App = () => {
   const [data, setData] = useState({});

   useEffect(() => {
      fetchData().then((data) => setData(data));
   }, []);

   return (
      <section className={styles.container}>
         <Cards data={data} />
         <CountryPicker />
         <Chart />
      </section>
   );
};

export default App;
