import React, { useState } from "react";
import "./Todo.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };
  return (
    <>
      <div className="todo-container">
        <div className="header">ToDo App</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task) => (
            <ListTask task={task} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
