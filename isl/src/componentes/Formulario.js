import React,{useState} from 'react'

function Formulario(props) {

  const[notas,setNotas]= useState(props.note)
  const[newNotes1,setNewNotes1]= useState('')
  const[newNotes2,setNewNotes2]= useState('')
  
  const handleChange1 = (evento) => {setNewNotes1(evento.target.value)}
  const handleChange2 = (evento) => {setNewNotes2(evento.target.value)}
  const handleClick = () => {
  const notesToAdd = {
    id:notas.length +1, 
    theme:newNotes1, 
    description:newNotes2}
    setNotas(notas.concat(notesToAdd))
  }
    console.log ()
  return (
    <div>
       {notas.map((not) => (
       <div key={not.id}>
        <p>{not.id}</p>
        <h3>{not.theme}</h3>
        <p>{not.description}</p>
       </div>
      ))}

      <input type="text" onChange={handleChange1} value={newNotes1}></input>
      <input type="text" onChange={handleChange2} value={newNotes2}></input>
      <button onClick={handleClick}>new</button>
   </div> 
  )  
}

export default Formulario
