import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Products.css"; // Import the CSS file
import "./App.css";
import CheckCard from "./CheckCard";

const Cart = (props) => {
  const products = [...props.products];

  let total = 0;

  let cards = products.map((product) => {
    if (product.qty > 0) {
        total += product.qty * product.price; // Update the total

      return (
        <CheckCard
        key = {product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          qty={product.qty}
          image={product.image}
          changeQty={props.changeQty}
        />
      );
    } else {
      return null;
    }
  });

  total = parseFloat(total.toFixed(2));


  return (
    <>
      <div className="cart-container  mx-8 sm:mx-28 mt-8 flex gap-x-8 flex-col sm:flex-row">
        <div className="check-container grow flex flex-col gap-y-8 pb-8">{cards}</div>

        <div className="total-container flex flex-col sm:border-l border-black sm:pl-8 flex-grow-2">
          <div className="payment flex justify-between ">
            <h2 className="text-2xl font-bold">Total</h2>
            <p className="text-xl">£{total}</p>
          </div>

          <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 mt-4 ">
            Proceed to Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

