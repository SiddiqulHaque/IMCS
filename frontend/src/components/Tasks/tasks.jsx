import React, { useState } from 'react'
import Task from '../Task/task'
import './tasks.css'
import { useLocation } from 'react-router-dom';
import axios from "axios";
const Tasks = ({tasks}) => {
  
  return (
    <div className="tasks">
        {tasks.map(t=>(
          <Task task={t} />
        ))}
    </div>
  )
}

export default Tasks