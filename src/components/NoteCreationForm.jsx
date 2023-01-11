import { useState } from 'react'
import { nanoid } from "nanoid"

export default function NoteCreationForm({addNote}) {
  const [note, setNote] = useState({
    title: '',
    note: '',
  })

  const handleNoteTitleChanges = (e) => setNote(prev => ({...prev, title: e.target.value}))
  const handleNoteChanges = (e) => setNote(prev => ({...prev, note: e.target.value}))

  function createNewNote(e) {
    e.preventDefault()
    console.log('submitting')
    const newNote = {
      id: nanoid(),
      title: note.title,
      note: note.note,
      createdDate: new Date().toJSON(),
      lastEdited: new Date().toJSON()
      }
    addNote(newNote)
  }

  return (
      <form onSubmit={createNewNote}>
        <input value={note.title} onChange={handleNoteTitleChanges} type="text" name="title" id="title" placeholder='Note Title'/>
        <textarea 
            value={note.note}  
            onChange={handleNoteChanges} 
            // onKeyDown={(e) =>  e.key === 'ENTER' ? createNewNote : ''}
            type="text" name="note" id="note" placeholder='Note'/>
        <button type="submit">Test</button>
      </form>
    
  )
}
