import { useParams } from "react-router"
import useFetch from "./useFetch"


export default function NotesDetails() {

  const {id} = useParams()
  const {data: note , isloadig} = useFetch('http://localhost:8000/notes/'+id)

  return (
    <div className="note-details">
      {isloadig &&  <div className="spinner-container">
                <div className="loading-spinner"></div>
                <p className='paddings'>loading...</p>
                </div>
            }

      {note && <article>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          </article>}
            
    </div>


  )
}
