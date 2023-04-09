import React from 'react';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from './components/frontpage/About';
import Footer from './components/footer/Footer';
import Login from './components/frontpage/Login';
import Features from './components/frontpage/Features';
import features from './components/data';
import Card from './components/Card';
import Restaurant from './components/restaurantPage/Restaurant';
import Customer from './components/customerPage/Customer';




function createFeatures(features){
  return(
    <Features 
      icon = {features.icon}
      headtext ={features.headtext}
      description = {features.description}
    />
  )
}


function App() {
  return (
    
    <>
         <Navbar />
         {/*---------------------------------- home Page ------------------------------ */}
         {/* <About /> 
         <div className="feature">{features.map(createFeatures)}</div>
         <Login /> */}

         {/* ------------------------------------- Restaurant Page --------------------------- */}
         {/* <Restaurant /> */}

         {/* ----------------------------------- customer page ----------------------------- */}
         <Customer />

         <Footer />

    </>

  );
}

export default App;




// <BrowserRouter>
    //   <Routes>
    //     <Route></Route>
    //     </Routes>
    // </BrowserRouter>

/* front page
    <About /> 
    <div className="feature">{features.map(createFeatures)}</div>
    <Login />
    <Footer />
*/