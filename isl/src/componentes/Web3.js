import React from 'react'

function Web3 ({note}) {
  
  return (
    <div>
         <h3>{note[2].id}</h3>
         <h1>{note[2].content}</h1> 
         <p>{note[2].description}</p>
      
      
    </div>
  )
}

export default Web3
