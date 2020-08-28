import React from "react";
import ResultItem from "./ResultItem";

const searchResult = ({ result, nominations, addNomination }) => {
    return (
        <div className="container columns is-multiline pl-4 pt-4">
            {result &&
                result.map((item) => (
                    <ResultItem
                        key={item.imdbID}
                        item={item}
                        nominations={nominations}
                        addNomination={addNomination}
                    />
                ))}
        </div>
    );
};

export default searchResult;
