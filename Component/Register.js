"use client"

import { useState } from "react"


export default function Register() {

  const[count,setCount]=useState(0);

  const[name, setName]=useState();

  const addValue=(e)=>{

    console.log(e)

  }

  console.log(name)

  return (
    <div>
      <h3>regiser</h3>

      <input value={count}>
      </input>
      <button onClick={()=>{setCount(count+1)}} >icrement</button><br></br>
      <button onClick={()=>{setCount(count-1)}} >decrement</button>


     Enter your name <input placeholder="name" onChange="addValue()">
     
      </input>

      <h4>{name}</h4>

    </div>
  )
}
