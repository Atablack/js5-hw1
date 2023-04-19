import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Info from './components/Info';
import ForFun from './components/ForFun';
import Bank from './components/Bank';
import Username from './components/Username';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='bank' element={<Bank />}/>
        <Route path='info' element={<Info />}/>
        <Route path='forfun' element={<ForFun />}/>
        <Route path='username' element={<Username />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
