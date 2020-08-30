import React from "react";
import url from "../../static/img/movie.svg";
import "../../static/css/landing/landing.css";
import { Link as ScrollLink } from "react-scroll";

const Landing = () => {
    return (
        <div className="container mt-6 mb-6 columns landing-container">
            <div className="column has-text-centered">
                <h1 className="landing-title">The Shoppies</h1>
                <h3 className="landing-subtitle">
                    Help us find the best of movies.
                </h3>
                <ScrollLink
                    to="search"
                    duration={1500}
                    smooth={true}
                    className="landing-btn"
                >
                    Nominate Now
                </ScrollLink>
            </div>
            <div className="column is-4">
                <img src={url} alt="landing-img" />
            </div>
        </div>
    );
};

export default Landing;
