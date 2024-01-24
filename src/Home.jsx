import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import photo1 from './assets/photo1.png'; // Adjust the path based on your project structure


import "./App.css";

const Home = (props) => {

  return (
    <>
     <div className='mt-8 mx-8 sm:mx-28'>
     <img src={photo1} alt="Photo 1"  className='w-full h-auto'/>
     </div>
    </>
  );
}

export default Home;
