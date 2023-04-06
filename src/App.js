import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar } from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Primary } from './Primary';
import {Highschool} from './Highschool';
import {Facilities} from './Facilities';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/Primary" element={<Primary/>}></Route>
        <Route path ="/Highschool" element={<Highschool/>}></Route>
        <Route path ="/Facilities" element={<Facilities/>}></Route>


</Routes>


    
      </BrowserRouter>
    </div>
  );
}

export default App;
