import React, { useState } from "react";
import "./task.css";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
const Task = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.desc);
  const [updateMode, setUpdateMode] = useState(false);
  const [completed, setCompleted] = useState(null);
  const [error,setError]=useState(false);
  const handleDelete = async () => {
    try {
      await axios.delete(`/delete/${task._id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async () => {
    if ((!title.replace(/\s/g, '').length) || (!desc.replace(/\s/g, '').length)) {
      setError(true);
      return;
    }
    try {
      axios.put(`/update/${task._id}`, {
        title,
        desc,
        completed,
      });
      setUpdateMode(false);
      window.location.reload();
    } catch (err) {}
  };
  const handleComplete = (e) => {
    if (e.target.checked === true) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };
  return (
    <div className="task">
      <div className="taskinfo">
        <div className="singletaskedit">
          <FaRegEdit
            className="singletaskicon"
            onClick={() => setUpdateMode(true)}
          />
          <AiFillDelete className="singletaskicon" onClick={handleDelete} />
        </div>
        {updateMode ? (
          <input
            type="text"
            className="updatetitle"
            placeholder="Updated Title"
            autoFocus="on"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        ) : (
          <>
            {task.completed ? (
              <div className="tempdiv" style={{"display":"flex", width: "350px",justifyContent: "flex-start",}}>
             <span
                  style={{
                    color: "Black",
                    fontSize: "18px",
                    fontWeight: "300",
                    // display: "flex",
                    // justifyContent: "flex-start",
                    // width: "350px",
                  }}
                >
                  Status :
                </span>
                <span
                  style={{
                    color: "green",
                    fontSize: "18px",
                    fontWeight: "300",
                    display: "flex",
                    justifyContent: "flex-start",
                    // width: "350px",
                  }}
                >
                  Completed
                </span>
             </div>
            ) : (
             <div  className="tempdiv" style={{"display":"flex",justifyContent: "flex-start", width: "350px"}}>
             <span
                  style={{
                    color: "Black",
                    fontSize: "18px",
                    fontWeight: "300",
                    // display: "flex",
                    // justifyContent: "flex-start",
                    // width: "350px",
                  }}
                >
                  Status :
                </span>
                <span
                  style={{
                    color: "green",
                    fontSize: "18px",
                    fontWeight: "300",
                    display: "flex",
                    justifyContent: "flex-start",
                    // width: "350px",
                  }}
                >
                  Uncomplete
                </span>
             </div>
                
              
            )}
            <Link to={`/task/${task._id}`} className="link">
              <span className="tasktitle">{task.title}</span>
            </Link>
            <hr />
            <span className="tasktime">
              Created On : {new Date(task.createdAt).toDateString()}
            </span>
          </>
        )}
      </div>
      {updateMode ? (
        <div className="update">
          <textarea
            className="updatedesc"
            rows="3"
            placeholder="Updated Desc"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>
          <label>
            {" "}
            <span className="label">Mark as Done</span>
            <input
              type="checkbox"
              className="updatecheck"
              onChange={handleComplete}
              // Checked={task.completed ? "checked" : "unchecked"}
              value={completed}
            />
          </label>
        </div>
      ) : (
        <p className="taskdesc">{task.desc}</p>
      )}
      {updateMode && (
        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>
      )}
      {error && ( <span style={{"color":"red","textAlign":"center","fontSize":"18px"}}>Please Enter some Data!</span> )}
    </div>
  );
};

export default Task;
