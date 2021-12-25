import React from 'react'

function Formulario({note}) {
 const {id} = note[3]
 return (<div>
     <h3>{id}</h3>
     <h1>{note[3].content}</h1> 
     <p>{note[3].description}</p>
        </div>
  )
}

export default Formulario
