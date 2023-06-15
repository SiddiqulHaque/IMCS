import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import './singletask.css';
import { useLocation } from 'react-router-dom';
import axios from "axios";
const Singletask = () => {
  const location=useLocation();
  const path=location.pathname.split("/")[2];
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [task, settask] = useState({});
  useEffect(()=>{
    const gettask=async()=>{
      const res=await axios.get(`/tasks/${path}`);
      settask(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    gettask();
  },[path])
  return (
    <div className="singletask">
      <div className="singletaskwrapper">
      <h1 className="singletasktitle">
            {title}
          </h1>
        <div className="singletaskinfo">
          <span className="singletaskdate">
            <b>{new Date(task.createdAt).toDateString()}</b>
          </span>
        </div>
          <p className="singletaskdesc">{desc}</p>
      </div>
    </div>
  )
}

export default Singletask