import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div style={{ backgroundImage: 'url("../assets/bvi.jpg")', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Navbar></Navbar>
      </div>   
      <Footer></Footer>
    </>
  )
}

export default App
