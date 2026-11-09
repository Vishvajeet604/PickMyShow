import React from 'react';
import {Routes , Route } from 'react-router-dom';
import Home from "./Home";
import Movies from './Movies';

import Cinemas from './Cinemas';
import Offers from './Offers';
import Signup from './Signup';
import Signin from './Signin';
import OTPVerify from './OTPVerify';
import Example1 from './Example1';
// import Welcome from './welcome';
function AppRoutes(){
    return(
        <>
        <Routes>
        <Route  path = "/" element ={<Home/>} > </Route>
        <Route path = "/Movies"  element ={<Movies/>}></Route>
        <Route path = "/Cinemas"  element ={<Cinemas/>}></Route>
        <Route path = "/Offers"  element ={<Offers/>}></Route>
        <Route path = "/Signup"  element ={<Signup/>}></Route>
        <Route path = "/Signin"  element ={<Signin/>}></Route>
        <Route path = "/OTPVerify"  element ={<OTPVerify/>}></Route>
        <Route path = "/Example1"  element ={<Example1/>}></Route>
        {/* <Route path = "/Welcome"  element ={<Welcome/>}></Route> */}
             
        </Routes>
        </>
    )
}

export default AppRoutes;