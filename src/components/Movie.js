import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../static/css/movie.css";

const Movie = () => {
    const [movieItem, setMovieItem] = useState({});
    const { imdbID } = useParams();

    useEffect(() => {
        axios
            .get(`http://www.omdbapi.com/?apikey=e8cf6a21&i=${imdbID}`)
            .then((res) => res.data)
            .then((data) => {
                setMovieItem(data);
            });
    }, [movieItem]);
    return (
        <div className="container">
            <div className="columns">
                {movieItem.Poster !== "N/A" && (
                    <div className="column is-4">
                        <img
                            className="movie-img"
                            src={movieItem.Poster}
                            alt="movie"
                        />
                    </div>
                )}
                <div className="column">
                    <h2 className="is-size-2 title">{movieItem.Title}</h2>
                    <p className="subtitle is-size-4 mt-1">{movieItem.Plot}</p>
                    <h4 className="is-size-4 mt-1">
                        <strong>Year</strong>: {movieItem.Year}
                    </h4>
                    <h4 className="is-size-4 mt-1">
                        <strong>Genre</strong>: {movieItem.Genre}
                    </h4>
                    <h4 className="is-size-4 mt-1 mb-5">
                        <strong>IMDB Rating</strong>: {movieItem.imdbRating}
                    </h4>
                    <Link to="/" className="btn-view">
                        Back{" "}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Movie;