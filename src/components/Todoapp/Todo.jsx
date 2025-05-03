import React, { useEffect,  useState } from "react";
import "./Todo.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    document.title = `You have ${tasks.length} pending taks(s)`
  })
  const addTask = (title) => {
    const newTask = [...tasks, { title,id:Date.now() }];
    setTasks(newTask);
  };
  const removeTask = (index) => {
    const newTask = [...tasks]
    newTask.splice(index, 1);
    setTasks(newTask);
    
  }
  const completeTask = (id) => {
    const complete = tasks.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });
    setTasks(complete);
  };
  
  return (
    <>
      <div className="todo-container">
        <div className="header">ToDo App</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task,index) => (
            <ListTask task={task}  removeTask={removeTask} completeTask={completeTask} index={index} key={task.id}  />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
