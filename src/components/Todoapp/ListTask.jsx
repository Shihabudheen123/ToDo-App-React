


import React from 'react'
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const ListTask = ({task,index,removeTask,completeTask,editTask}) => {
  return (
    <>
    <div className='list-tasks'>
      <ul>

        <li className='list-item'>  
          <div className='list-item-list' id={task.status ? 'list-item' : ''}>
          {task.title}
            </div>

            <span>  
        <IoMdDoneAll 
        className='list-item-icons'
        id='complete'
        title='complete'
        onClick={()=>completeTask(task.id)}
        />
        <FiEdit 
        className='list-item-icons'
        id='edit'
        title='Edit'
        onClick={()=>editTask(task.id)}
        />
        <MdDelete
        className='list-item-icons'
        id='delete'
        onClick={()=>{removeTask(index)}}
        />
        </span>
        </li>
      </ul>
     
      
      
      </div></>
  )
}

export default ListTask