

import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
// import { Route, Routes } from "react-router"
import Navbar from './navbar';
import Home from './home';
import Create from './Create';
import NotesDetails from './NotesDetails';


function App() {

  
  return (
    <Router>

    <div className="App">

      <Navbar/>

      <div className="conntent">
      
      
        <Routes>
      
          <Route exact path="/" element={<Home/>}/>
        
          <Route path="/create" element={<Create/>}/>
      
          <Route path="/note/:id" element={ <NotesDetails/>}/>

        </Routes>

      </div>
      
    </div>
    </Router>
  );
}

export default App;
