import React from 'react'
import './Todo.css'
import AddTask from './AddTask'
import ListTask from './ListTask'

const Todo = () => {
  return (
    <>
    <div className='todo-container'>

      <div className='header'>ToDo App</div>
      <div className='add-task'>
        <AddTask/>
      </div>
      <div className='tasks'>
        <ListTask/>
        </div>



    </div>
    </>
  )
}

export default Todo