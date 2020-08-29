import React from "react";
import url from "../../static/img/movie.svg";
import "../../static/css/landing/landing.css";

const Landing = () => {
    return (
        <div className="container mt-6 mb-6 columns landing-container">
            <div className="column has-text-centered">
                <h1 className="landing-title">The Shoppies</h1>
                <h3 className="landing-subtitle">
                    Help us find the best of movies.
                </h3>
                <button className="landing-btn">Nominate Now</button>
            </div>
            <div className="column is-4">
                <img src={url} alt="landing-img" />
            </div>
        </div>
    );
};

export default Landing;
