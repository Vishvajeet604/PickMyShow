import { useState } from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css';
import NavBar from './Components/NavBar';
import MainPage from './Components/MainPage';
import Footer from './Components/Footer';
import Demo from './Components/Demo';
import {BrowserRouter} from "react-router-dom";
import UserProvider from './Components/UserProvider';
import ErrorBoundary from './Components/ErrorBoundary';
function App() {
  const [activepage,setActive]=useState("default");
  

  return (
    <>
    <BrowserRouter>
    <ErrorBoundary>
    <UserProvider> 
      
    <NavBar onLinkclick={setActive}/>
    <MainPage currentPage={activepage}/>
    <Footer/> 
    </UserProvider>
    </ErrorBoundary>
    </BrowserRouter>
    {/* <Demo/> */}
    </>
  );
}

export default App