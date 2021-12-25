import React from 'react'


function Isl ({note}) {
  return (
   
      <div>
        <h3>{note[1].id}</h3>
        <h1>{note[1].content}</h1> 
        <p>{note[1].description}</p>
      </div>
  )

}

export default Isl
