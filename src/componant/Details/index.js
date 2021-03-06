import { useState, useContext, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from 'bootstrap'
import Popup from "../popup";
import { tokenContext } from "../../App";
import { addFav } from "../../redux/reducers/fav";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Container, Nav, Image, Button, Badge } from 'react-bootstrap'


import("./style.css")




const Detalis = () => {
    // const [fav, setfav] = useState(localStorage.getItem("fav") || [])
    const dispatch = useDispatch()


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const {
        fav,
        setfav
    } = useContext(tokenContext);

    const navigate = useNavigate();
    const [detali, setDetali] = useState([])
    let { id } = useParams()
    const link = "http://image.tmdb.org/t/p/w500"

    const deletise = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
        ).then((result) => {
            setDetali(result.data)
            console.log(result.data);
        }).catch((err) => {
            console.log(err);
        })
    }


    const click_fav = () => {
        setfav([...fav, setDetali])
        localStorage.setItem("fav", fav)
    }


    useEffect(() => {
        deletise()
    }, [])


    return (
        <div className="carsStyle">
            <div className="carsStyle"  >
                {/* <div key={detali.id} className="row g-0" >
                <img
                    className="img-fluid rounded-start"
                    src={`${link}${detali.backdrop_path}`}
                />
                <div className="card-title">{detali.original_title}</div>
                <div className="card-text">{detali.overview}</div>
                <div className="card-text">{detali.release_date}</div>
                <div className="card-text">{detali.vote_average}</div>
            </div> */}

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div id="container" key={detali.id} >
                    <div class="product-details">
                        <h1>{detali.original_title}</h1>
                        <span className="hint-star star">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                        <p className="information">{detali.overview}</p>
                        <div className="control">


                            <>
                                <button onClick={handleShow} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <span className="price" >add </span>
                                    <span className="shopping-cart"> <i class="fa fa-heart"></i></span>
                                    <span className="buy">fav </span>
                                </button>

                                {/* <Button variant="primary" onClick={handleShow}>
                                    Launch
                                </Button> */}


                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-titles" id="exampleModalLabel">favorites list</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                Do you want to add this movie to your favorites list?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btns btn-secondary" data-bs-dismiss="modal" >Close</button>
                                                <button data-bs-dismiss="modal" type="button" class="btns btn-secondary" onClick={() => {
                                                    dispatch(addFav(detali));

                                                }}>add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                    


                        </div>
                    </div>
                    <div className="product-image">
                        <img src={`${link}${detali.backdrop_path}`} alt="" />
                        <div className="info">
                            <h2> Description</h2>
                            <ul>
                                <li><strong>date : </strong>{detali.release_date} </li>
                                <li><strong>vote : </strong>{detali.vote_average}</li>
                                <li><strong>runtime : </strong>{detali.runtime}m</li>
                                <li><strong>Budget : </strong>{detali.budget}</li>
                                <li><strong>Revenue : </strong>{detali.revenue}</li>
                            </ul>
                        </div>
                    </div>

                </div>




            </div>
        </div>



    )
}

export default Detalis 