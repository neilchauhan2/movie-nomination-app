import React from "react";
import "../../static/css/search/resultItem.css";

const ResultItem = () => {
    return (
        <div className="column is-4 has-text-centered">
            <img
                className="title-img-small"
                src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
                alt="titleCover"
            />
            <button className="btn-view">View</button>
            <button className="btn-nominate">Nominate</button>
        </div>
    );
};

export default ResultItem;
