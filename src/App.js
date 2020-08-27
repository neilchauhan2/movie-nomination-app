import React from "react";
import "./App.css";
import Search from "./components/search/Search";
import Navbar from "./components/layout/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Nominations from "./components/nominations/Nominations";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Search />
                <Nominations />
            </div>
        </Router>
    );
};

export default App;
