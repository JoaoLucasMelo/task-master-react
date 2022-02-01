import React from 'react';

export default function NoteCreatorField(props) {


  
  return (
    <div className='row justify-content-center mb-3'>
      <div className='col-6'>
        <div className='createField m-3 p-3 border '>
          <h1>Create new Sticky Note</h1>
          <form onSubmit={props.onSubmit} className='d-flex justify-content-between'>
            <div className='col-5 me-5'>
              <label htmlFor="name">Sticky Note Title:</label>
               <input type="text" placeholder='Title Here...' maxLength={15} id='name' value={props.name} onChange={props.setName} className='form-control me-5' />
            </div>
            <div className='col-3'>
            <label htmlFor="color">Color:</label>
              <input type="color" value={props.color} onChange={props.setColor} className='form-control form-control-color' name="" id="color" />
            </div>
            <div className='text-center p-2 col-4 pt-4'>
              <button type='submit' className='btn btn-primary'>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
