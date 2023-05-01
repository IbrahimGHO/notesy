import { Link } from "react-router-dom";

function NotesList ({notes,title}) {
    
    return(  
        
        <div className="NotesList" key={notes.id}>

            <div style={{display:"flex" , justifyContent:"space-between"}}>
            <h1>{title}  </h1> 
            <p> {notes.length} notes</p>

            </div>
            
        <hr />
                {notes.map((notes)=>(
                    
                <Link to={`/note/${notes.id}`}>

                    <div className="preview">


                        <h2>{notes.title}</h2>

                    </div>

                </Link>

            ))}

        </div>
    )

}

export default NotesList;