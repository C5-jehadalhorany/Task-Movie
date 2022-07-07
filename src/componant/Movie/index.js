import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import("./style.css")



const Movie = () => {
    let { id } = useParams()
    const [load, setLoad] = useState([]);
    const [page, setPage] = useState(2);
    const navigate = useNavigate();
    const link = "http://image.tmdb.org/t/p/w500"
    const [movie, setMovie] = useState([])
    const createMovie = () => {
        axios.post(`https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a`).then((result) => {
            console.log(result.data.results);
            setMovie(result.data.results)
        }).catch((err) => {
            console.log(err);
        })
    }

    const loadMorre = () => {
        setPage(page +1);
        axios
            .post(
                `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=${page}`
            ).then((result) => {
                setLoad(result.data.results);
                setMovie([...movie, ...load]);
            })
            .catch((err) => {
                console.log(err);
            });

    }
    useEffect(() => {
        createMovie()
        loadMorre()
    }, [])
   

    let length = 150;
    return (<div className="contaer_forMovie">
        {movie && movie.map((element, index) => {
            return (<div key={element.id} className="div_img">
                <img src={`${link}${element.poster_path}`} className="img_for_movie" onClick={() => { navigate(`details/${element.id}`) }} />
                <div className="div_for_all">
                    <h6 className="h1_div_movie">{element.title}</h6>
                    <p className="p_div_movie">{element.overview.length < 200 ? (element.overview) : (element.overview.substring(0, length - 3) + "...")}</p>
                    <div className="date_for_movie_div">
                        <span className="date_for_movie">{element.release_date}</span>
                        <span className="date_for_movie">{element.vote_count + "Votes"}</span>
                        <span className="date_for_movie">{element.vote_average + "Rate"}</span>
                    </div>
                </div>

            </div>)

        })}
        

        <button className="button_lodemore" onClick={() => {
            loadMorre()
        }}>load more</button>
        
    </div>
    )
}

export default Movie 