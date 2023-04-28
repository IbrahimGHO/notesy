import { useParams } from "react-router"


export default function NotesDetails() {

  const {id} = useParams()

  return (
    <div className="note-details">

        <h2>Notes details {id}</h2>
    </div>
  )
}
