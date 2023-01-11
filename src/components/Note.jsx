import { compareAsc, format } from 'date-fns'

export default function Note({data}) {

    const lastEditedDate = format(new Date(data.lastEdited), 'dd MMM yyyy')

    return (
      <div className="note-container">
        <p className="note-info"> {`${lastEditedDate} – Ryan Walker`}
        </p>
        <h2>{data.title}</h2>
        <p>{data.note}</p>
      </div>
    )
  }
  