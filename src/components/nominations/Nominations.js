import React from "react";
import NominationItem from "./NominationItem";
const Nominations = () => {
    return (
        <div className="container mt-6 ">
            <h3 className="is-size-3 has-text-centered">Your Nominations</h3>
            <NominationItem />
            <NominationItem />
            <NominationItem />
            <NominationItem />
            <NominationItem />
        </div>
    );
};

export default Nominations;
