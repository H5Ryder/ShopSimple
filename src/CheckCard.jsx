import { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Import the CSS file
import "./App.css";

const CheckCard = ({ id, title, price, qty, image, changeQty }) => {
 
    
  return (
    <>
      <div className="card p-6 border border-black flex gap-8" key={id}>
        <div className="image  pb-2 flex justify-center items-center">
          <img src={image} alt="Product Image"className="h-20"/>
        </div>

    <div className="grow text-right">
        <h2 className="overflow-hidden  mt-3">{title}</h2>
        <p className="border-b border-black pb-4">£{price}</p>

        {qty == 0 && (
          <div className="buy-button flex justify-center ">
            <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 mt-4 " onClick={() => changeQty(id, true)}>
              Purchase
            </button>
          </div>
        )}

        {qty > 0 && (
          <>
          <div className="flex items-center mt-4"> 
            <button className="bg-gray-500 hover:bg-gray-700 text-white  w-10 h-10" onClick={() => changeQty(id, false)}>
              -
            </button>
            <h2 className="grow text-center bg-gray-200 h-10 flex items-center justify-center" >{qty}</h2>
            <button className="bg-gray-500 hover:bg-gray-700 text-white w-10 h-10 " onClick={() => changeQty(id, true)}>
              +
            </button>
            </div>
          </>
        )}
        </div>
      </div>
    </>
  );
};

export default CheckCard;
