import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { Coin } from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=10";

  useEffect(() => {
    Axios.get(url).then((response) => setListOfCoins(response.data.coins));
  }, []);

  return (
    <div className="App">
      <div className="cryptoHeader"></div>
      <div className="cryptoDisplay">
        {listOfCoins.map((coin) => {
          return <h1>{coin.name}</h1>;
          // return <Coin coins={coin} />;
        })}
      </div>
    </div>
  );
}

export default App;
