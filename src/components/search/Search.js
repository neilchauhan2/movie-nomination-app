import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState([]);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const search = () => {
        if (keyword.length >= 3)
            axios
                .get(`http://www.omdbapi.com/?apikey=e8cf6a21&s=${keyword}`)
                .then((res) => res.data)
                .then((data) => {
                    setResult(data.Search);
                });
    };

    useEffect(() => {
        search();
        // eslint-disable-next-line
    }, [keyword]);

    return (
        <div className="search container">
            <div className="field">
                <div className="control has-icons-left has-icons-right">
                    <input
                        className="input is-large"
                        type="text"
                        value={keyword}
                        onChange={handleChange}
                        placeholder="Enter atleast 3 characters to search."
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>

            <SearchResult result={result} />
        </div>
    );
};

export default Search;
