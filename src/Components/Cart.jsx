import React from "react";
import {useSelector} from "react-redux"



const Cart = () => {
  const items = useSelector(state => state.cart);

  const countofProduct = useSelector((s) => s.countCart);

  console.log("item : " , items)
  console.log("count of Cart : "  ,countofProduct)
  
  
  // const total = items.reduce((a, b) => a + b.name, 0);

// console.log("total : " , total)
  return (
    <div className="alert alert-success">
      
      <h3 className="text-center">
        
        Total Items: {countofProduct.length}  (Rs. {items}  )/-
      </h3>
    </div>
  );
};

export default Cart;
