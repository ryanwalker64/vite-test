import { useReducer, useState } from 'react'
import { nanoid } from 'nanoid'
import NoteContainer from './components/NotesContainer'
import NoteCreationForm from './components/NoteCreationForm'
import notesReducer from './tools/NoteTools'
import './App.css'


function App() {
  const [state, dispatch] = useReducer(notesReducer, initalNotes)

  const addNote = (note) => dispatch({type: 'ADD_NOTE', data: note})

  return (
    <div className="App">
      <NoteContainer notes={state}/>
      <NoteCreationForm addNote={addNote}/>
    </div>
  )
}

export default App

const initalNotes = [
  {
    id: nanoid(),
    title: 'Intial Note 1',
    note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis consequuntur veniam, necessitatibus voluptatem amet aliquid odit beatae',
    createdDate: new Date().toJSON(),
    lastEdited: new Date().toJSON()
  },
  {
    id: nanoid(),
    title: 'Intial Note 2',
    note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis consequuntur veniam, necessitatibus voluptatem amet aliquid odit beatae',
    createdDate: new Date().toJSON(),
    lastEdited: new Date().toJSON()
  },
  {
    id: nanoid(),
    title: 'Intial Note 3',
    note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis consequuntur veniam, necessitatibus voluptatem amet aliquid odit beatae',
    createdDate: new Date().toJSON(),
    lastEdited: new Date().toJSON()
  }
]


