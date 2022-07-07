import 'bootstrap/dist/css/bootstrap.min.css';
import NavbaR from './componant/Navbar';
import Movie from './componant/Movie';
import { Routes, Route, Link } from "react-router-dom";
import MovieDetiles from './componant/Details';
import Popup from './componant/popup';
import bootstrap from 'bootstrap';
import React, { useState, createContext, useEffect } from "react";
import Favorites from './componant/favorites';
import './App.css';
export const tokenContext = createContext();

function App() {
    const [fav, setfav] = useState((JSON.parse(localStorage.getItem("fav")) || []))
    return (<div>

        <NavbaR />
        
        <tokenContext.Provider value={{ fav, setfav }}>

            <Routes>
                <Route path='/' element={<Movie />} />
                <Route path='/details/:id' element={<MovieDetiles />} />
                <Route path='/favorites' element={<Favorites />} />
            </Routes>

        </tokenContext.Provider>

    </div>)
}



export default App;
