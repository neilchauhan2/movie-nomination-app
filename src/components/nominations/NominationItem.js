import React, { useContext } from "react";
import "../../static/css/nominations/nominationItem.css";
import { NominationContext } from "../../context/NominationContext";
import { toast } from "react-toastify";

const NominationItem = ({ nominationItem }) => {
    toast.configure();

    const { deleteNomination } = useContext(NominationContext);

    const handleDelete = async (id) => {
        await deleteNomination(id);
        const nominations = JSON.parse(localStorage.getItem("nominations"));
        const newNominations = nominations.filter((item) => {
            return item.imdbID !== id;
        });
        localStorage.setItem("nominations", newNominations);
        toast.error(`${nominationItem.title} removed successfully.`);
    };

    return (
        <div className="container nomination-item columns box">
            <div className="column is-2">
                <img
                    className="img-nomination"
                    src={nominationItem.poster}
                    alt="nomination"
                />
            </div>
            <div className="column is-10">
                <h3 className="is-size-2 nomination-item-title">
                    {nominationItem.title}
                </h3>
                <h4 className="is-size-4 ml-1">Year: {nominationItem.year}</h4>
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
