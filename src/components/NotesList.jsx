import NoteListItem from "./NoteListItem"



export default function NotesList({notes}) {

    const generateNotesList = notes.map(note => {
        return <NoteListItem key={note.id} note={note}/>
    })

    return (
        <div className="notesList">
            <h1 className="">List of notes</h1>
            <button>New Note +</button>
            <ul>
                {generateNotesList}
            </ul>
        </div>

    )
}