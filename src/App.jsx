import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import "./App.css";





function App() {


  const [storeProducts, setStoreProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let url = 'https://fakestoreapi.com/products?limit=10';
        let response = await fetch(url);
        let data = await response.json();
        setStoreProducts(
          data.map((product) => {
            return { ...product, qty: 0 };
          })
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); 


  const changeQty = (id, addition) => {
    setStoreProducts(
      storeProducts.map((element) => {
        if (element.id === id) {
          addition ? (element.qty +=1) : (element.qty -=1);
        }
        return element;
      })
    );
 
  }






  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar products={storeProducts} />}>
          <Route index element={<Home />} />
          <Route
            path="/products"
            element={
              <Products changeQty={changeQty} products={storeProducts} />
            }
          />
          <Route path="/cart" element={
              <Cart changeQty={changeQty} products={storeProducts} />
            }/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
