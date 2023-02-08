import React from 'react'
import './Notes.css';

export default function Notes({id,text,date}) {
  return (
    <div className="note" id='img' >
    <div className="bar">
      <div className='icons'>
      <i class="fa-solid fa-trash" ></i>
      <i class="fa-solid fa-floppy-disk"></i>
      </div>
      
    </div>
    <span>{text}</span>
      <small>{date}</small>
    <textarea >
        
    </textarea>
   
  </div>
  )
}
