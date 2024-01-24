import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css"; // Import the CSS file


import "./App.css";

const Navbar = (props) => {
  const products = props.products;

  console.log(products);


  const sum = products.reduce((accumulator, currentValue) => {

    if (currentValue.qty > 0) {
    return accumulator + 1;
    }

    return accumulator


  }, 0);



  return (
    <>
      <div className="flex flex-col items-left mx-8 mt-6 pb-8 gap-2 border-b border-black sm:mx-28 sm:flex-row">
        <h2 className="text-xl pr-22 border-r border-gray-500">Simple Shop</h2>

        <div className="flex flex-col sm:flex-row sm:gap-20 sm:ml-20">
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/products" className='nav-link' >Products</Link>
        </div>
        <div className='flex   sm:ml-auto nav-link'   >
          <div className='logo-container flex shrink items-center gap-2 cart-link' value={sum}>
          <Link className="" to="/cart">
            Cart
          </Link>
          <ShoppingCartIcon/>

          </div>

        </div>
      </div>

      <Outlet/>
    </>
  );
};

export default Navbar;
