import {Link} from 'react-router-dom'

function Navbar() {




    return ( 
        <nav className="navbar">
        <h1>notesy</h1>
        
        <div>
        <Link to="/">Home</Link>

        <Link  to="/create"  >new note</Link>
        </div>


        
        </nav>
    );
}
export default Navbar;