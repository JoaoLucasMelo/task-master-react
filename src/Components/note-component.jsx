import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Task from './task-component';

export default function Note(props) {
  let [tasks, setTask] = useState([])
  let [taskName, setTaskName] = useState('')
  let [checked, setChecked] = useState(0)

  let handleSubmit = e => {
    e.preventDefault()
    if(taskName.length > 0 ){
    setTask([...tasks,{id: Math.floor(Math.random() * 10000)  ,taskName: taskName, checked: false}])
    setTaskName('')
    }
  }

  let handleDelete = (id) => {
    setTask(tasks = tasks.filter( task => task.id !== id))

  }

  let addCheck = () => {
    setChecked(checked = checked + 1)
  }
  let unCheck = () => {
    if(checked >= 1){
    setChecked(checked = checked - 1)}
  } 

  return (
      <div className='col-3 p-3'>
        <div className='note rounded p-0'>
        <div className='border-0 ' style={{backgroundColor: props.noteColor, height: '7px', width: '100%', borderTopRightRadius: '5px', borderTopLeftRadius: '5px'}} ></div>
        <div className='d-flex flex-column justify-content-between'>
          <div>
            <div className='d-flex justify-content-between align-items-center px-3'>
              <h3 className='text-center pt-2'>{props.noteName}</h3>
              <h5 className='mb-0'>{checked}/{tasks.length}</h5>
            </div>
            <div className='p-3 tasksSpace scrollbar'>
              <ul className='ps-1'>
                {tasks.map( task => {return <Task checked={addCheck} unchecked={unCheck} onDelete={() => handleDelete(task.id)} key={task.id} taskId={task.id} taskName={task.taskName} />})}
              </ul>
            </div>
          </div>
            <div>
              <form className='d-flex p-2' onSubmit={handleSubmit}>
                <input type="text" maxLength={15} className='form-control' onChange={(e) => {setTaskName(e.currentTarget.value)}} value={taskName} />
                <button style={{backgroundColor: props.noteColor}} className='ms-2 btn text-white'>Add</button>
              </form>
            </div>
        </div>
        </div>
      </div>
  )
}
