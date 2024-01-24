import { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Import the CSS file
import "./App.css";

const Card = (props) => {
  let product = props.product;


  let id = product.id
  let title = product.title;
  let price = product.price;
  let quantity = product.qty;
  let imgURL = product.image;


  return (
    <>
      <div className="card p-6 border border-black" key={id}>
        <div className="image border-b border-black pb-4 flex justify-center">
          <img src={imgURL} alt="Product Image"className="h-60"/>
        </div>

        <h2 className="truncate mt-3">{title}</h2>
        <p className="border-b border-black pb-4">£{price}</p>

        {quantity == 0 && (
          <div className="buy-button flex justify-center ">
            <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 mt-4 " onClick={() => props.changeQty(id, true)}>
              Purchase
            </button>
          </div>
        )}

        {quantity > 0 && (
          <>
          <div className="flex items-center mt-4">
            <button className="bg-gray-500 hover:bg-gray-700 text-white  w-10 h-10" onClick={() => props.changeQty(id, false)}>
              -
            </button>
            <h2 className="grow text-center bg-gray-200 h-10 flex items-center justify-center" >{quantity}</h2>
            <button className="bg-gray-500 hover:bg-gray-700 text-white w-10 h-10 " onClick={() => props.changeQty(id, true)}>
              +
            </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
