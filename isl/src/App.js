

import Formulario from "./componentes/Formulario.js";
import React ,{useState} from "react";

const notes = [
    {
        id:1, 
        theme:'formularios', 
        description: 'midu vs  bluuWeb, doble monitor'
    },
    {
        id:2, 
        theme: 'isl',
        description:'machine learning, copilot'
    },
    {
        id: 3, 
        theme: 'web 3', 
        description:'rmrk-kusama, smart contract, apuesta, polkadot'
    },
    {
        id:4,
        theme: 'irgc',
        description:'menu Netflix vs tailwind'
    }]

function App () {
const[numero,setNumero] = useState('?')

  const getRandom = () => {
    console.log('click')
    setNumero(Math.floor(Math.random(numero)*(4)+1))}
    
  
  return (
   
  <div className="App">
    
      <h2>{numero}</h2>
      <button onClick={getRandom}>theme to learn today</button>
      
     
      <Formulario note={notes} /> 
      
  </div>)
  
}

export default App;  
