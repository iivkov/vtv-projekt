import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeComponent from "./components/HomeComponent";
import AboutComponent from './components/AboutComponent';
import ServicesComponent from './components/ServicesComponent';
import EquipmentComponent from './components/EquipmentComponent';
import ContactComponent from './components/ContactComponent';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<HomeComponent/>} />
          <Route path="/o-nama" element={<AboutComponent/>} />
          <Route path="/usluge" element={<ServicesComponent/>} />
          <Route path="/prometna-oprema" element={<EquipmentComponent/>} />
          <Route path="/kontakt" element={<ContactComponent/>} />
        </Routes>
        <Footer/>
		  </BrowserRouter>
    </div>
  );
}

export default App;