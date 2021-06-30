import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';


function MovieList() {
    const [loggedIn, setloggedIn] = useState(true)
    const movieData = useSelector(state => state.movie.movies);
    console.log("movies::",movieData);
    return (
        <div className="row" >
            <div className="col-sm-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" className="form-control" />
                </div>
            </div>
            {movieData&&movieData.map((movie) => {
                const { name, bannerURL, artists, genres, id } = movie;
                return (
                    <div className="col-md-3" key={id}>
                        <div className="card">
                            <img style={{ height: "150px" }} alt="avatar" className="card-img-top"
                                src={bannerURL} />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {name}
                                </h5>
                                <p><b>Artists: </b>
                                    {artists.map((artist) => {
                                        return (
                                            <span>{artist}, </span>
                                        )
                                    }
                                    )}
                                </p>
                                <p><b>Genre: </b>
                                    {genres.map((gener) => {
                                        return (
                                            <span className="badge rounded-pill bg-info">{gener}</span>
                                        )
                                    }
                                    )}

                                </p>
                                <p className="card-text"></p>
                                <Link to={{
                                    pathname: `/movieDetail/${movie.id}`,
                                }} className="btn btn-sm btn-outline-info" >More Details</Link>
                                {
                                    loggedIn &&
                                    <div className="d-grid gap-2 d-md-block float-end">
                                        <Link to={{
                                            pathname: `/editMovie/${movie.id}`,
                                        }} className="btn btn-sm btn-danger" >Edit</Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>

    )
}

export default MovieList