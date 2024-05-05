import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home/Home";
import Editorial from "./pages/Editorial";
import Aim from './pages/Aim';
import Callforpaper from './pages/Callforpaper';
import Complaince from './pages/Complaince';
import Contactus from './pages/Contactus';
import Copyright from './pages/Copyright';
import Currentisssue from './pages/Currentissue';
import Downloads from './pages/Downloads';
import Paymentmodes from './pages/Paymentmodes';
import Plagiarism from './pages/Plagiarism';
import Review from './pages/Review';
import Subscription from './pages/Subsciption';
import Guidelines from './pages/Guidelines';
import Archive from './pages/Archive';

function App() {

  return (
    <> 
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/aim" element={<Aim></Aim>} />
        <Route path="/archive" element={<Archive></Archive>} />
        <Route path="/callforpaper" element={<Callforpaper></Callforpaper>} />
        <Route path="/complaince" element={<Complaince></Complaince>} />
        <Route path="/contactus" element={<Contactus></Contactus>} />
        <Route path="/copyright" element={<Copyright></Copyright>} />
        <Route path="/currentissue" element={<Currentisssue></Currentisssue>} />
        <Route path="/download" element={<Downloads></Downloads>} />
        <Route path="/guidelines" element={<Guidelines></Guidelines>} />
        <Route path="/paymentmodes" element={<Paymentmodes></Paymentmodes>} />
        <Route path="/plagiarism" element={<Plagiarism></Plagiarism>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/subscription" element={<Subscription></Subscription>} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
