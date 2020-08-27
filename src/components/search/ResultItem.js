import React from "react";

const ResultItem = () => {
    return (
        <div className="column is-3 has-text-centered">
            <img
                className="title-img-small"
                src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
                alt="titleCover"
            />
            <h4 className="is-size-4 mb-1 mt-1">The Avengers</h4>
            <button className="button is-danger  mr-2">View</button>
            <button className="button is-link ">Nominate</button>
        </div>
    );
};

export default ResultItem;
