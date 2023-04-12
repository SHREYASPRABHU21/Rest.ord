import React from 'react';
import About from './About';
import Login from './Login';
import Features from './Features';
import features from './../data';


function createFeatures(features){
    return(
      <Features 
        key = {features.key}
        icon = {features.icon}
        headtext ={features.headtext}
        description = {features.description}
      />
    )
  }

function HomePage(){
    return(
        <div className="homepage">
            <About /> 
         <div className="feature">{features.map(createFeatures)}</div>
         <Login />
        </div>
    )
}

export default HomePage;
