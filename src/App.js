import { Cards, Chart, CountryPicker } from "./components/";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { fetchData } from "./api";
import coronaImg from "./images/image.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getData = async () => {
      country ? setData(await fetchData(country)) : setData(await fetchData());
    };
    getData();
  }, [country]);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImg} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker country={setCountry} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
