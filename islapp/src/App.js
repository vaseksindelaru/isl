import React from 'react';

import './App.css';
import Isl from "./componentes/Isl.js";
import Projecto from"./componentes/Projecto.js";
import Formulario from "./componentes/Formulario.js";
import Web3 from "./componentes/Web3.js";

function App() {
  return (
   <div className = "App">
     <Isl />
     <Projecto />
     <Formulario />
     <Web3 />
    </div>
    );
    
}

export default App;
