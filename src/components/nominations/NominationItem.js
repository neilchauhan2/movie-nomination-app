import React, { useContext } from "react";
import "../../static/css/nominations/nominationItem.css";
import { NominationContext } from "../../context/NominationContext";

const NominationItem = ({ nominationItem }) => {
    const { deleteNomination } = useContext(NominationContext);
    return (
        <div className="container nomination-item columns box">
            <div className="column">
                <img
                    className="img-nomination"
                    src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
                    alt="nomination"
                />
            </div>
            <div className="column is-10">
                <h3 className="is-size-2">
                    <strong>The Avengers</strong>
                </h3>
                <h4 className="is-size-3 mt-1">
                    <i className="fab fa-imdb mr-2 .imdb"></i> - 8.0
                </h4>
                <h4 className="is-size-4">Year: 2012</h4>
                <h4 className="is-size-4">Genre: Action</h4>
                <h4 className="is-size-4"> Languages: Hindi, English</h4>
                <button
                    className="btn-remove"
                    onClick={() => deleteNomination(nominationItem.imdbId)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default NominationItem;
