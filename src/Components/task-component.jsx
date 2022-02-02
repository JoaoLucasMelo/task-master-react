import React from 'react';


export default function Task(props) {

    let handleDelete = () => {
        props.onDelete();
    }
    
  return <div>
      <li style={{textDecoration: props.checked? 'Line-Through' : ''}} className='d-flex justify-content-between align-items-center my-1'><input checked={props.checked ? 'checked' : ''} onChange={props.check}  type="checkbox" />{props.taskName} <button className='btn btn-sm nodecoration btn-outline-danger' onClick={handleDelete}>Delete</button></li>
  </div>;
}
