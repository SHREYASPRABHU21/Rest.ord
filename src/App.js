import React from 'react';
import {Routes,Route, Link} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Card from './components/Card';
import Restaurant from './components/restaurantPage/Restaurant';
import Customer from './components/customerPage/Customer';
import HomePage from './components/frontpage/HomePage';






function App() {
  return (
    
    <>
         <Navbar />
         <Routes>
         <Route exact path='/' element={<HomePage />}/>
         <Route exact path='/restaurant' element={<Restaurant />}/>
         <Route exact path='/customer' element={<Customer />}/>
         </Routes>
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