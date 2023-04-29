import React, { useState } from 'react'

export default function Create() {
const [title , setTitle] = useState('')
const [body , setBody] = useState('')
    const [loading , setloading]= useState(false);



const handleSubmit = (e)=>{
  e.preventDefault();
  const note = {title , body}

    setloading(true);

  fetch('http://localhost:8000/notes',{
    method:'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(note)
  }).then(()=>{
    setloading(false)  
  })
    
}

  return (
    <div className='create'>

    <h2>Create note !</h2>
    
    <form onSubmit={handleSubmit}>

      <label >Title</label>
      <input 
      type="text"
      required
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      />

      <label >note body:</label>
      <textarea name="" id="" cols="30" rows="10" required
      value={body}
      onChange={(e)=> setBody(e.target.value)}></textarea>

      {!loading &&<button>Add note !</button>}
      {loading &&<button disabled>Adding note...</button>}
      
    </form>
    </div>

    

    
  )
}
