import React, { useContext } from "react";
import NominationItem from "./NominationItem";
import { NominationContext } from "../../context/NominationContext";
const Nominations = () => {
    const { nominations } = useContext(NominationContext);

    return (
        <div className="container mt-6 ">
            <h3 className="is-size-3 has-text-centered">Your Nominations</h3>
            {nominations &&
                nominations.map((nominationItem) => (
                    <NominationItem
                        nominationItem={nominationItem}
                        key={nominationItem.imdbId}
                    />
                ))}
        </div>
    );
};

export default Nominations;
