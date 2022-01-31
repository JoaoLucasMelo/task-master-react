import React from 'react';

export default function Note(props) {
  return (
      <div className='col-3 note rounded m-5 p-0'>
        <div className='border-0 ' style={{backgroundColor: props.noteColor, height: '7px', width: '100%', borderTopRightRadius: '5px', borderTopLeftRadius: '5px'}} ></div>
          <div>
            <h2 className='text-center pt-2'>{props.noteName}</h2>
          </div>
          <div className='p-3'>
            <ul>
              <li>Task</li>
              <li>Task</li>
            </ul>
          </div>
      </div>
  )
}
