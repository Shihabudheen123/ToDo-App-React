import React, { useEffect, useRef, useState } from 'react'

const AddTask = ({addTask}) => {
  const [value,setValue] = useState('')
  const addItem = () => {
  addTask(value)
  setValue('')
  }
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  })
  return (
    <>
   <div className='input-container'>
   
        <input type='text' className='input' 
        placeholder='Add a new Task'
        value={value}
        ref={inputRef}
        onChange={(e)=>{setValue(e.target.value)}}
        />
        <button className='add-btn' onClick={addItem}>ADD</button>
    
    </div>
    </>
  )
}

export default AddTask