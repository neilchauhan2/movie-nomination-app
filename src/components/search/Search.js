import React from "react";
import SearchResult from "./SearchResult";

const Search = () => {
    return (
        <div className="search container">
            <div className="field">
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter at least 3 characters to search."
                    />
                </div>
            </div>
            <SearchResult />
        </div>
    );
};

export default Search;
