import { compareAsc, format } from 'date-fns'

export default function Note({data}) {

    const lastEditedDate = format(new Date(data.lastEdited), 'dd MMM yyyy')

    return (
      <div className="note-container">
        <h2>{data.title}</h2>
        <p className="note-info"> {`${lastEditedDate} – Ryan Walker`}</p>
        <p >{data.note}</p>
      </div>
    )
  }
  