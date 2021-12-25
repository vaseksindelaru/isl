
import Isl from "./componentes/Isl.js";
import Irgc from "./componentes/Irgc.js";
import Web3 from "./componentes/Web3.js";
import Formulario from "./componentes/Formulario.js";
import React ,{useState} from "react";

function App () {
const[numero,setNumero] = useState()
const notes = [
  {
      id:1, 
      content:'formularios', 
      description: 'midu vs  bluuWeb, doble monitor'
  },
  {
      id:2, 
      content: 'isl',
      description:'machine learning, copilot'
  },
  {
      id: 3, 
      content: 'web 3', 
      description:'rmrk-kusama, smart contract, apuesta, polkadot'
  },
  {
      id:4,
      content: 'irgc',
      description:'menu Netflix vs tailwind'
  },]
  const getRandom = () => {
    console.log('click')
    setNumero(Math.floor(Math.random(numero)*(4)+1))}
    
  
  return (
   
  <div className="App">
    
      <h2>{numero}</h2>
      <button onClick={getRandom}>ejecutar</button>
      
      <Irgc note={notes} />
      <Isl note={notes} />
      <Web3 note={notes} />
      <Formulario note={notes} /> 
      
  </div>)
  
}

export default App;  
