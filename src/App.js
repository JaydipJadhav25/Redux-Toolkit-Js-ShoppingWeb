import React from 'react';
import './App.css';
import Product from './Components/Product';
import Cart from './Components/Cart';
import products from "./products.json"
import Shopping from './Components/Shopping';


function App() {
  // console.log(products)
  return (
    <div className="App">
      
        <Cart />
        <div className="products">
        {products.map((product) => (
          <Product {...product} />
        ))}
     
      </div>
      <hr/>
      
      <div >
        <Shopping/>
     
      </div>
      
    

    </div>
  );
}

export default App;
