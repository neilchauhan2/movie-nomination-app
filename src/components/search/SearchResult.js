import React from "react";
import ResultItem from "./ResultItem";

const searchResult = ({ result }) => {
    return (
        <div className="container columns is-multiline pl-4 pt-4">
            {result &&
                result.map((item) => (
                    <ResultItem key={item.imdbID} item={item} />
                ))}
        </div>
    );
};

export default searchResult;
