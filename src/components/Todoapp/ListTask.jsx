// import React from 'react'

// const ListTask = () => {
//   return (
//     <>
//     <div className='list-tasks'>
//       Task Name
//       <button className='delete-btn'>Delete</button>
      
//       </div></>
//   )
// }

// export default ListTask


import React from 'react'
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const ListTask = () => {
  return (
    <>
    <div className='list-tasks'>
      <ul>

        <li className='list-item'>  
          <div className='list-item-list' id='list-item'>
            Task Name  
            </div>

            <span>  
        <IoMdDoneAll 
        className='list-item-icons'
        id='complete'
        />
        <FiEdit 
        className='list-item-icons'
        id='edit'
        />
        <MdDelete
        className='list-item-icons'
        id='delete'
        />
        </span>
        </li>
      </ul>
     
      
      
      </div></>
  )
}

export default ListTask