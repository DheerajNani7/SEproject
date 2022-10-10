import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MS} from './MS.js';
import {News} from './News.js';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <div>
  
  <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                     <a class="navbar-brand" href="/">
                         <img src="https://i.ebayimg.com/images/g/854AAOSw1NNdET4i/s-l1600.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                             Dheeraj
                     </a>
                </div>
  </nav>
  </div>
     <div>
     <Router>
      <Routes>
        <Route path='/' exact element={<MS/>}/>
        <Route path='/News' exact element={<News/>}/>
      </Routes>
      </Router>
   

     </div>
    </div>
    
  );
}

export default App;
