import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Central_page from "./CentralPage"
import Game from './Rock_Paper_Scissor_Components/game';
import Superhero from './Superheroapp_Components/superhero';
import Fight from './Fighting_Game_Components/Fight';

function App() {
    return (
      <div className="routing">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Central_page />}/>
          <Route exact path="/game" element={<Game />}/>
          <Route exact path="/superhero" element={<Superhero />}/>
          <Route exact path="/fighting" element={<Fight />}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
