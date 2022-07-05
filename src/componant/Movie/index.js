import axios from "axios";
import { useState, useEffect } from "react";
import("./style.css")



const Movie = () => {
    const link = "http://image.tmdb.org/t/p/w500"
    const [movie, setMovie] = useState([])
    const createMovie = (req, res) => {
        axios.post(`https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a`).then((result) => {
            console.log(result.data.results);
            setMovie(result.data.results)
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        createMovie()
    }, [])
    return (<div>
        {movie && movie.map((element, index) => {
            return (<div key={element.id}>
                <img src={`${link}${element.backdrop_path}`} />
                <p>{element.title}</p>
                <p>{element.release_date}</p>
                <p>{element.vote_count}</p>
                <p>{element.vote_average}</p>


            </div>)
        })}
    </div>)
}

export default Movie 