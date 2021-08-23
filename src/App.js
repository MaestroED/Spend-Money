import './App.css';
import Header from './components/Header';
import products from "./products.json";
import { useState, useEffect } from "react"
import Product from "./components/Product"
import Assets from "./components/Assets"

function App() {
  const [money, setMoney] = useState(50000000000)
  const [assets, setAssets] = useState([])
  const [allAssets, setAllAssets] = useState(0)
  
  const resetAssets = () => {
    setAssets([])
  }


  useEffect(() => {
    setAllAssets(
      assets.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0)
    )
  }, [assets])

  return (
    <>
      <Header allAssets={allAssets} money={money} />

      <div className="container products">
        {products.map(product => (
          <Product key={product.id} product={product} assets={assets} setAssets={setAssets} allAssets={allAssets} money={money} 
          />
        ))}
      </div>
      {allAssets > 0 && (
        <Assets resetAssets={resetAssets} products={products} allAssets={allAssets} assets={assets} />
      )}




    </>

  );
}

export default App;
