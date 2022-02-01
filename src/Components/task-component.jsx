import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

export default function Task(props) {
    let [checked, setChecked] = useState(false)

    useEffect(() => {
        checked? props.checked() : props.unchecked()
    },[checked])
  return <div>
      <li style={{textDecoration: checked? 'Line-Through' : ''}} className='d-flex justify-content-between align-items-center my-1'><input checked={checked ? 'checked' : ''} onChange={() => setChecked(checked = !checked)}  type="checkbox" />{props.taskName} <button className='btn btn-sm nodecoration btn-outline-danger' onClick={checked? props.unchecked && props.onDelete : props.onDelete}>Delete</button></li>
  </div>;
}
