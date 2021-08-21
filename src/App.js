import { Cards, Chart, CountryPicker } from "./components/";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { fetchData } from "./api";
import coronaImg from "./images/image.png";

function App() {
  const [data, setData] = useState({});
  const country = useState("");

  useEffect(
    () => {
      const getData = async () => {
        country[0]
          ? setData(await fetchData(country[0]))
          : setData(await fetchData());
      };
      getData();
    },
    country[0] ? [country[0]] : []
  );

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImg} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker country={country} />
      <Chart data={data} country={country[0]} />
    </div>
  );
}

export default App;
