

import { compareAsc, format } from 'date-fns'





export default function NoteListItem({note}) {

    const lastEditedDate = format(new Date(note.lastEdited), 'dd MMMM')

    return (
        <li className='noteListItem'>
            <p className='noteListItem-title'>{note.title}</p>
            <p className='noteListItem-date'>{lastEditedDate}</p>
        </li>

    )
}