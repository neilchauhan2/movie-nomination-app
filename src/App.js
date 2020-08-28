import React from "react";
import "./App.css";
import Search from "./components/search/Search";
import Navbar from "./components/layout/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Nominations from "./components/nominations/Nominations";
import { NominationProvider } from "./context/NominationContext";

const App = () => {
    return (
        <Router>
            <NominationProvider>
                <div className="App">
                    <Navbar />
                    <Search />
                    <Nominations />
                </div>
            </NominationProvider>
        </Router>
    );
};

export default App;
