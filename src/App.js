
import './App.css';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';

const App=()=>{

  const [notes,setNotes]=useState([{
    id:nanoid(),
    text:"This is my first note",
    date:"23/01/2023",

  },
  {
    id:nanoid(),
    text:"This is my second note",
    date:"23/01/2023",

  },
  {
    id:nanoid(),
    text:"This is my third note",
    date:"23/01/2023",

  },
  {
    id:nanoid(),
    text:"This is my fourth note",
    date:"23/01/2023",

  },
]);
  return (
 <div>
  <NotesList notes={notes}/>
 </div>
      
  );
}

export default App;
