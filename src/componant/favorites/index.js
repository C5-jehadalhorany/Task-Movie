import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


import {
    deleteFav, removeFromFav
} from "../../redux/reducers/fav"

import("./style.css")


const Favorites = () => {
    const dispatch = useDispatch();
    const link = "http://image.tmdb.org/t/p/w500"

    const favState = useSelector((state) => {
        return {
            fav: state.fav.fav,
        };
    });


    useEffect(() => {
        console.log(favState.fav);
    }, [])

    return (<div className="contaerforfav">
        {favState.fav && favState.fav.map((element, index) => {
            return (<div>
                {<div className="all_it">
                    <div class="allitforfav">
                        <div class="favcon">
                            <img className="img_fav" src={`${link}${element.poster_path}`} class="img_fav" alt="..." />
                            <div class="">
                                <h5 class="">{element.title}</h5>
                            </div>
                        </div>
                    </div>
                </div>}

                <button class="btns btn-delete" onClick={() => {
                    dispatch(removeFromFav(element.id))
                }} >
                    <span class="mdi mdi-delete mdi-24px"></span>
                    <span class="mdi mdi-delete-empty mdi-24px"></span>
                    <span>Delete</span>
                </button>
            </div>)

        })}
        <div className="deleteallforfav">
            {/* <button onClick={() => {
                dispatch(deleteFav())
            }}>
                delete all
            </button> */}


            <button class="btns btn-delete" onClick={() => {
                dispatch(deleteFav())
            }} >
                <span class="mdi mdi-delete mdi-24px"></span>
                <span class="mdi mdi-delete-empty mdi-24px"></span>
                <span>Delete All</span>
            </button>
        </div>

    </div>)







}


export default Favorites