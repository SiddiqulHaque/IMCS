import React, { useEffect, useState } from 'react'
import './home.css';
import Header from '../../components/Header/header'
import Form from '../../components/Form/form';
import Task from '../../components/Task/task';
import Tasks from '../../components/Tasks/tasks';
import { Link, useLocation } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios"; 
import { AiFillDelete } from "react-icons/ai";
const Home = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchtasks = async () => {
      const res = await axios.get("/tasks");
      setTasks(res.data);
    };
    fetchtasks();
  },[]);
  return (
    <div>    
    <Link to="/create" className='link'>Create New Task <FaRegEdit
            className="singletaskicon"
            style={{"color":"green","marginLeft":"4px"}}
          /></Link>
    <Tasks tasks={tasks}/>
    </div>
  )
}

export default Home