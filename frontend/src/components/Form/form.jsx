import React, { useState } from 'react'
import "./form.css";
import axios from "axios";
const Form = () => {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [error,setError]=useState(false);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if ((!title.replace(/\s/g, '').length) || (!desc.replace(/\s/g, '').length)) {
      setError(true);
      return;
    }
      const newTask={
        title,desc
      }
    try{
      const res=await axios.post("/create",newTask);
      window.location.replace("/");
    }
    catch(err){

    }
  }
  return (
    <div className='form'>
    <form className='create-form' onSubmit={handleSubmit}>
        <label className='create-label'>Title</label>
        <input type="text" placeholder='Title Task' className='create-input' onChange={(e)=>setTitle(e.target.value)} />
        <label className='create-label'>Description</label>
        <textarea rows='10' type="textarea" placeholder='Title Description' className='create-input' onChange={(e)=>setDesc(e.target.value)}/>
        <button type="submit" className='create-btn'>Create</button>
    </form>
    {error && ( <span style={{"color":"red","textAlign":"center","fontSize":"25px"}}>Please Enter some Data!</span> )}
    </div>
  )
}

export default Form