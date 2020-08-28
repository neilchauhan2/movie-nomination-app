import React, { useState, useEffect } from "react";
import "../../static/css/search/resultItem.css";

const ResultItem = ({ nominations, addNomination, item }) => {
    const handleNominate = async (e) => {
        if (nominations.length >= 5) {
            console.log("Max Limit Reached");
        } else {
            const movie = {
                imdbID: item.imdbID,
                title: item.Title,
                poster: item.Poster,
                year: item.Year
            };

            addNomination(movie);
        }
    };

    const [btnDisabled, setBtnDisabled] = useState(false);

    useEffect(() => {
        nominations.forEach((element) => {
            if (element.imdbID === item.imdbID) setBtnDisabled(true);
        });
    }, [nominations]);

    return (
        <div className="column is-4 has-text-centered">
            {item.Poster !== "N/A" ? (
                <img
                    className="title-img-small"
                    src={item.Poster}
                    alt="titleCover"
                />
            ) : (
                <h3 className="is-size-3 mb-2">
                    <strong>{item.Title}</strong>
                </h3>
            )}
            <button className="btn-view">View</button>
            <button
                className={
                    btnDisabled ? "btn-nominate-disabled" : "btn-nominate"
                }
                disabled={btnDisabled}
                onClick={handleNominate}
            >
                Nominate
            </button>
        </div>
    );
};

export default ResultItem;
