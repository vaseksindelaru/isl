import React from 'react'

function Irgc ({note}) {
  
    return ( 
    <div>
     <h3>{note[0].id}</h3>
     <h1>{note[0].content}</h1>
     <p>{note[0].description}</p> 
    </div>)
}

export default Irgc
