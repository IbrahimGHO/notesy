

function NotesList ({notes,title}) {
    
    return(  
        
        <div className="NotesList" key={notes.id}>
            <div style={{display:"flex" , justifyContent:"space-between"}}>
            <h1>{title}  </h1> 
            <p> {notes.length} notes</p>
        </div>
            
        <hr />
                {notes.map((notes)=>(

                <div className="preview">
                <h2>{notes.title}</h2>

                <button className="btn-del"> Delete </button>

                </div>

            ))}

        </div>
    )

}

export default NotesList;