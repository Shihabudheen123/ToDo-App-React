import React, { useEffect,  useState } from "react";
import "./Todo.css";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId]=useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(()=>{
    document.title = `You have ${tasks.length} pending taks(s)`
  },[tasks])
  const addTask = (title) => {
   
      if (!title) { 
        alert("Please enter a task");
        return;
      }
      if (editId) {
        const updatedTasks = tasks.map((task) =>
          task.id === editId ? { ...task, title } : task
        );  
        setTasks(updatedTasks);
        setEditId(0); 
      } else {
        const newTask = [...tasks, { title, id: Date.now(), status: false }];
        setTasks(newTask);
      }

   
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

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);    if (taskToEdit) {
      setEditId(id); 
      setInputValue(taskToEdit.title);
    }
  }
  
  return (
    <>
      <div className="todo-container">
        <div className="header">ToDo App</div>
        <div className="add-task">
          <AddTask addTask={addTask} editId={editId} editValue={inputValue} />
        </div>
        <div className="tasks">
          {tasks.map((task,index) => (
            <ListTask task={task}  removeTask={removeTask} completeTask={completeTask} editTask={editTask} index={index} key={task.id}  />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
