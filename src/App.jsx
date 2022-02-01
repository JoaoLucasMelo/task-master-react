import './App.css';
import Note from './Components/note-component';
import NoteCreatorField from './Components/note-creator-field';
import React, { useEffect, useState } from 'react';

function App() {

  let [notes, setNote] = useState([])
  let [name, setName] = useState('')
  let [color, setColor] = useState('#42ADFF')

  useEffect(() => {
    // console.log('note', note)
    // console.log('name', name)
    // console.log('color', color)
  })

  let handleSubmit = e => {
    e.preventDefault()
    if(name.length > 1){
    setNote([...notes,{id: Math.floor(Math.random() * 10000)  ,noteName: name, noteColor: color}])
    setName( name = '')
    }
  }
  let handleDelete = (id) => {
    setNote( notes = notes.filter( note => note.id !== id))
  }


  return (
    <div>
      <div className='container-fluid'>
        <NoteCreatorField onSubmit={handleSubmit} note={notes} name={name} color={color} setName={(e) => {setName(e.currentTarget.value)}} setColor={(e) => {setColor(e.currentTarget.value)}} />
      </div>
      <div className="row px-3 m-0">
        {notes.map( note => <Note key={note.id} onDelete={() => {handleDelete(note.id)}} noteName={note.noteName} noteColor={note.noteColor} />)}
      </div>
    </div>
  );
}

export default App;
