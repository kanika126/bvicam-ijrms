import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home/Home";

function App() {

  return (
    <>
    
      <Navbar></Navbar>
       
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
