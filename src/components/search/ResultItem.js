import React from "react";
import "../../static/css/search/resultItem.css";

const ResultItem = ({ item }) => {
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
            <button className="btn-nominate">Nominate</button>
        </div>
    );
};

export default ResultItem;
