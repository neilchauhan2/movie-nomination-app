import React from "react";
import Search from "./search/Search";
import Nominations from "./nominations/Nominations";
import Landing from "./landing/Landing";
const Home = () => {
    return (
        <div className="container">
            <Landing />
            <Search />
            <Nominations />
        </div>
    );
};

export default Home;
