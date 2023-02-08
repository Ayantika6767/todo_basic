import React from 'react'
import Notes from './Notes'
import './NotesList.css';


export default function NotesList({notes}) {
  return (
    <section className="App">
    
    <button type='button' id="btn" class="btn btn-success"><i class="fa-solid fa-plus"></i>
      Add Note</button>
      {notes.map((note)=> (
      <Notes id={note.id} text={note.text} date={note.date}/>
      ))}
     
     
    </section>
  )
}
