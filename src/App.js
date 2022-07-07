import 'bootstrap/dist/css/bootstrap.min.css';
import NavbaR from './componant/Navbar';
import Movie from './componant/Movie';
import { Routes, Route, Link } from "react-router-dom";
import MovieDetiles from './componant/Details';
import Popup from './componant/popup';
import bootstrap from 'bootstrap'
import './App.css';

function App() {
    return (<div>
        <NavbaR/>
        
        <Routes>
        <Route path='/' element={ <Movie/>} />
        <Route path='/details/:id' element={<MovieDetiles />} />
        </Routes>
        
    </div>)
}

export default App;
