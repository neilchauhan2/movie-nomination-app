import React, { useContext } from "react";
import "../../static/css/nominations/nominationItem.css";
import { NominationContext } from "../../context/NominationContext";

const NominationItem = ({ nominationItem }) => {
    const { deleteNomination } = useContext(NominationContext);

    const handleDelete = async (id) => {
        await deleteNomination(id);
        const nominations = JSON.parse(localStorage.getItem("nominations"));
        const newNominations = nominations.filter((item) => {
            return item.imdbID !== id;
        });
        localStorage.setItem("nominations", newNominations);
    };

    return (
        <div className="container nomination-item columns box">
            <div className="column">
                <img
                    className="img-nomination"
                    src={nominationItem.poster}
                    alt="nomination"
                />
            </div>
            <div className="column is-10">
                <h3 className="is-size-2">
                    <strong>{nominationItem.title}</strong>
                </h3>
                <h4 className="is-size-3 mt-1">
                    <i className="fab fa-imdb mr-2 .imdb"></i> - 8.0
                </h4>
                <h4 className="is-size-4">Year: {nominationItem.year}</h4>
                <button
                    className="btn-remove"
                    onClick={() => handleDelete(nominationItem.imdbID)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default NominationItem;
