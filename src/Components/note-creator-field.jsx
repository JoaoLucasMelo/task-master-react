import React from 'react';

export default function NoteCreatorField(props) {


  
  return (
    <div className='row justify-content-center mb-3'>
      <div className='col-6'>
        <div className='createField m-3 p-3 border '>
          <h1>Create new</h1>
          <form onSubmit={props.onSubmit} className='d-flex justify-content-between'>
            <div>
              <label htmlFor="name">Note Name:</label>
               <input type="text" id='name' value={props.name} onChange={props.setName} className='form-control noteSize me-5' />
            </div>
            <div>
            <label htmlFor="color">Note Color:</label>
              <input type="color" value={props.color} onChange={props.setColor} className='form-control form-control-color' name="" id="color" />
            </div>
            <div className='text-end p-2'>
              <button type='submit' className='btn btn-primary'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
