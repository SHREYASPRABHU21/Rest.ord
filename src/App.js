import React from 'react';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from './components/frontpage/About';
import Footer from './components/footer/Footer';
import Login from './components/frontpage/Login';
import Features from './components/frontpage/Features';
import features from './components/data';

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
    <About /> 
    <div className="feature">{features.map(createFeatures)}</div>
    <Login />
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