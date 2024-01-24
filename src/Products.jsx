import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Products.css"; // Import the CSS file
import "./App.css";
import Card from "./Card";

const Products = (props) => {
  const products = [...props.products];

  let cards = products.map((product) => (
    <Card 
    key={product.id} 
    changeQty={props.changeQty}
    product = {product}
     />
  ));

  return (
    <>
      <div className="card-container mx-8 sm:mx-28 mb-28">
        {cards}
      </div>
    </>
  );
};

export default Products;

