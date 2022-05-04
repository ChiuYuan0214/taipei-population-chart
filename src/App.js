import { useState, useEffect } from "react";

import Filter from "./components/Filter/Filter";
import Chart from "./components/Chart/Chart";
import Logo from './components/Logo/Logo';

import { sumByGender } from "./util/data-filter";

import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [target, setTarget] = useState("信義區");

  const changeTargetHandler = (district) => {
    setTarget(district);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109?COUNTY=臺北市&TOWN=${target}`
        );
        const data = await response.json();
        const { responseData } = data;
        const list = sumByGender(responseData);
        setData(list);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [target]);

  return (
    <div className="App">
      <Logo />
      <main className="main">
        <Filter changeTarget={changeTargetHandler} target={target} />
        <Chart data={data} />
      </main>
    </div>
  );
}

export default App;
