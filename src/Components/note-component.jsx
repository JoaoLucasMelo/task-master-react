import React from 'react';
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
    const found = tasks.find(task => task.id === id)
    if (found.checked) {
      setTask(tasks = tasks.filter( task => task.id !== id))
      setChecked(checked = tasks.filter(t => t.checked).length)
    }
    else {
      setTask(tasks = tasks.filter( task => task.id !== id))
    }

  }
  let handleChange = (task) => {
    const newTasks = [...tasks];  
    const index = newTasks.indexOf(task);
    newTasks[index] = { ...task };
    newTasks[index].checked = !tasks[index].checked;
    setTask(newTasks);
    setChecked(checked = newTasks.filter(t => t.checked).length)
  }

  return (
      <div className='col-3 p-3'>
        <div className='note rounded p-0'>
        <div className='border-0 ' style={{backgroundColor: props.noteColor, height: '7px', width: '100%', borderTopRightRadius: '5px', borderTopLeftRadius: '5px'}} ></div>
        <div className='d-flex flex-column justify-content-between'>
          <div>
            <div className='d-flex justify-content-between align-items-center px-3'>
              <h3 className='text-center pt-2'>{props.noteName}</h3>
              <div className='d-flex flex-column align-items-end'>
                <button title='Delete Note' className='btn btn-sm btn-outline-danger text-end px-2 p-0 mt-1 ' onClick={props.onDelete}>X</button>
              <i className='mb-0 fs-5'><small>Checked </small>{checked}/{tasks.length}<small> Tasks</small></i>
              </div>
            </div>
            <div className='p-3 tasksSpace scrollbar'>
              <ul className='ps-1'>
                {tasks.map(task => { return <Task check={() => handleChange(task)} checked={task.checked} onDelete={() => handleDelete(task.id)} key={task.id} taskId={task.id} taskName={task.taskName} />})}
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
