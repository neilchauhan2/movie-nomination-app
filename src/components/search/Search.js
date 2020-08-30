import React, { useState, useEffect, useContext } from "react";
import SearchResult from "./SearchResult";
import { NominationContext } from "../../context/NominationContext";
import axios from "axios";
import "../../static/css/search/search.css";

const Search = () => {
    const { nominations } = useContext(NominationContext);

    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState([]);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const search = () => {
        if (keyword.length >= 3)
            axios
                .get(
                    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${keyword}`
                )
                .then((res) => res.data)
                .then((data) => {
                    setResult(data.Search);
                });
    };

    const setStorage = () => {
        if (nominations.length > 0)
            localStorage.setItem("nominations", JSON.stringify(nominations));
    };

    useEffect(() => {
        setStorage();
    }, [nominations]);

    useEffect(() => {
        search();
        // eslint-disable-next-line
    }, [keyword]);

    return (
        <div className="search container">
            <div className="field">
                <div className="control has-icons-left has-icons-right">
                    <input
                        className="input is-large search-box"
                        id="search"
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
