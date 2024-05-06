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
import Currentisssue11 from './pages/Currentissue11';
import Currentisssue12 from './pages/Currentissue12';
import Currentisssue21 from './pages/Currentissue21';
import Feedback from './pages/Feedback';
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
  const user = localStorage.getItem("token");
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
        <Route path="/currentissue1-1" element={<Currentisssue11></Currentisssue11>} />
        <Route path="/currentissue1-2" element={<Currentisssue12></Currentisssue12>} />
        <Route path="/currentissue2-1" element={<Currentisssue21></Currentisssue21>} />
        <Route path="/feedback" element={<Feedback></Feedback>} />
        {user && <Route path="/home" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/home" element={<Navigate replace to="/login" />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
