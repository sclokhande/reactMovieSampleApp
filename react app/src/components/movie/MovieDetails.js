import React from 'react';

function MovieDetails(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4 text-center">
                                    <img src="http://www.riobeauty.co.uk/images/product_image_not_found.gif" className="img-fluid"  alt="movie-banner"/>
                                </div>
                                <div className="col-sm-8">
                                    <h4>Movie title</h4>
                                    <p><b>Artists: <span>Neytiri</span></b></p>
                                    <p><b>Genre: </b>
                                    <span className="badge rounded-pill bg-info">Action</span>
                                    </p>
                                    <h5>Movie Description:</h5>
                                    <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   

}
export default MovieDetails;