



import "./index.css"
import React from "react";
// import {data} from "./Data"
// import {useState, useEffect} from 'react'
// import Header from "./Header";
// import Footer from "./Footer";
// import Search from "./Header";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NowIJ from "./NowIJ";
import Accomodation from "./Accomodation";
import Restaurant from "./Restaurant";
import Shopping from "./Shopping";
import Attraction from "./Attraction";
import Header from "./Header";
import Landing from "./Landing";
import Seeall from "./Seeall";
import Details from "./detail";
import Upcoming from "./Upcoming";
import Hospital from "./Hospital";
import Appartment from "./Appartment";
import Footer from "./Footer";
// import Nav from "./Nav";





const App = () => {
  return(
    <BrowserRouter>
    <Header/>

  <Routes>
    
    <Route path="/" element={<Landing />}/>
     <Route path="/see" element ={<Seeall/>}/>
    <Route path="/nowij" element={<NowIJ />} />
    <Route path="/shopping" element={<Shopping/>} />
    <Route path="/attraction" element={<Attraction/>} />
    <Route path="/accomodation" element={<Accomodation/>} />
    <Route path="/restaurant" element={<Restaurant/>} /> 
    <Route path="/details" element ={<Details/>}/>
    <Route path="/upcoming" element ={<Upcoming/>}/>
    <Route path="/hospital" element ={<Hospital/>}/>
    <Route path="/appartment" element ={<Appartment/>}/>

  </Routes>

</BrowserRouter>
  )
  
}

export default App;
