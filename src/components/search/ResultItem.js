import React from "react";
import { Link } from "react-router-dom";
import "../../static/css/search/resultItem.css";
import useNomination from "../../hooks/useNomination";

const ResultItem = ({ item }) => {
    const { handleNominate, btnDisabled } = useNomination(item);

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
            <Link to={`/movie/${item.imdbID}`} className="btn-view">
                View
            </Link>
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
