import Note from "./Note"

export default function NoteContainer({notes}) {

const generateNotes = notes.map(note => {
    return <Note key={note.id} data={note}/>
})

    return (
      <div>
        {generateNotes}
      </div>
    )
  }
  