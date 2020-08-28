import React from "react";
import Search from "./search/Search";
import Nominations from "./nominations/Nominations";
const Home = () => {
    return (
        <div className="container">
            <Search />
            <Nominations />
        </div>
    );
};

export default Home;
