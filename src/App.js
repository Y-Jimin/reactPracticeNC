import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  }
  const onChange = (event) => {
    setMoney(event.target.value)
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then(json => {
        setCoins(json)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <div>
          <form onSubmit={onSubmit}>
            <input value={money} type="text" placeholder="$" onChange={onChange}/>
            <button>Enter</button>
          </form>
          <hr />
          <select>
            {coins.map((item) => <option>{item.name} ({item.symbol}): ${item.quotes.USD.price}USD -{'>'} 
              {money/item.quotes.USD.price}개 구매가능
            </option>)}
          </select>
        </div>
      }

    </div>
  )
}

export default App;