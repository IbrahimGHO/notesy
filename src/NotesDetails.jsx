import { useNavigate, useParams } from "react-router"
import useFetch from "./useFetch"


export default function NotesDetails() {

  const {id} = useParams()
  const {data: note , isloadig} = useFetch('http://localhost:8000/notes/'+id)
  const navigate = useNavigate()

  
  const handleDelete = ()=>{
    fetch('http://localhost:8000/notes/'+id , {
      method: 'DELETE'
    }).then(()=>{
      navigate('/')
    })
  }

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
          <button onClick={handleDelete} className="btn-del"> Delete </button>
          </article>}
            
    </div>


  )
}
