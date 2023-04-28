
import NotesList from './NotesList';
import useFetch from './useFetch';

function Home   ()  {

    const {data : notes , isloadig} = useFetch("http://localhost:8000/notes")
        // date : notes => date = notes in this file

    
    

    return ( 
<div className="home">

        
    <NotesList notes={notes} title = "All notes" /> 
    {isloadig &&  <div className="spinner-container">
                <div className="loading-spinner"></div>
                <p className='paddings'>loading...</p>
                </div>
            }

    <NotesList notes={notes.filter( (notes) =>notes.id===1 ) } title="1's only" />
    {isloadig && <div className="spinner-container"> <div className="loading-spinner">
            </div>
            </div>
            }


        
</div>
    );
}

export default Home;