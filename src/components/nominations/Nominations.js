import React, { useContext } from "react";
import NominationItem from "./NominationItem";
import { NominationContext } from "../../context/NominationContext";
const Nominations = () => {
    const { nominations } = useContext(NominationContext);
    return (
        <div className="container mt-6 mb-6" id="nominations">
            <h3 className="is-size-3 has-text-centered title">
                Your Nominations
            </h3>
            {nominations.length !== 0 ? (
                nominations.map((nominationItem) => (
                    <NominationItem
                        nominationItem={nominationItem}
                        key={nominationItem.imdbId}
                    />
                ))
            ) : (
                <h3 className="s-size-3 has-text-centered mt-6 ">
                    No Nominations yet.
                </h3>
            )}
        </div>
    );
};

export default Nominations;
