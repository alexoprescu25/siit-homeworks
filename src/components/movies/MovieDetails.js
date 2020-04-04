import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    async function getMovieById(id) {
        const res = await axios('https://ancient-caverns-16784.herokuapp.com/movies/' + id);
        setMovie(res.data);

        console.log(movie);
    }
    
    useEffect(() => { 
        getMovieById(movieId); 
    }, [movieId]);

    if(movie) {
        console.log(movie);
        return (
            <>
                 <div className="bg-dark border border-dark w-75">
                    <div className="d-flex bd-highlight mb-0">
                        <div className="mr-auto p-2 bd-highlight">
                            <h4 className="text-light"> { movie.Title + ' (' + movie.Year + ')' } </h4>
                        </div>
                        <div className="p-2 bd-highlight d-flex">
                        <svg className="bi bi-star-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="#E1C500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <div className="d-flex flex-column">
                        <div className="d-flex flex-row m-0">
                        <h4 className="text-light m-0"> { movie.imdbRating}</h4>
                        <span className="text-light">/10</span>
                        </div>
                        <p className="text-light"> { movie.imdbVotes } </p>
                        </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row bd-highlight mb-3">
                        <div className="p-2 bd-highlight text-light">{ movie.Rated + ' |'}</div>
                        <div className="p-2 bd-highlight text-light">{ movie.Runtime + ' |' }</div>
                        <div className="p-2 bd-highlight text-light">{ movie.Genre + ' |' }</div>
                        <div className="p-2 bd-highlight text-light">{ movie.Year + ' (' + movie.Country + ')' }</div>
                    </div>

                    <img src={ movie.Poster } className="img-fluid" alt="Responsive image" />

                    <div className="bg-white p-2">
                        <p className="text-dark ml20"> { movie.Plot } </p>
                        <div className="d-flex flex-row bd-highlight">
                                <p className="text-primary mr-2 font-weight-bold">Director:</p>
                                <p className="text-dark"> { movie.Director } </p>
                        </div>
                        <div className="d-flex flex-row bd-highlight">
                                <p className="text-primary mr-2 font-weight-bold">Writers:</p>
                                <p className="text-dark"> { movie.Writer } </p>
                        </div>
                        <div className="d-flex flex-row bd-highlight">
                                <p className="text-primary mr-2 font-weight-bold">Actors:</p>
                                <p className="text-dark"> { movie.Actors } </p>
                        </div>

                    <div className="d-flex flex-column">
                    <h3>Details</h3>
                        <div className="d-flex flex-row">
                            <p className="font-weight-bold mr-2">Country:</p>
                            <p> { movie.Country } </p>
                        </div>
                        <div className="d-flex flex-row">
                            <p className="font-weight-bold mr-2">Language:</p>
                            <p> { movie.Language } </p>
                        </div>
                        <div className="d-flex flex-row">
                            <p className="font-weight-bold mr-2">Release Date:</p>
                            <p> { movie.Released } </p>
                        </div>
                        <h3>Box Office</h3>
                        <div className="d-flex flex-row">
                            <p className="font-weight-bold mr-2">Budget:</p>
                            <p> { movie.BoxOffice } </p>
                        </div>
                        </div>
                        <h3>Company Credits</h3>
                        <div className="d-flex flex-row">
                            <p className="font-weight-bold mr-2">Production:</p>
                            <p> { movie.Production } </p>
                        </div>
                    </div>

                </div>
            </>
        );
    } else {
        return <h1>Loading ...</h1>;
    }
}

export default MovieDetails;