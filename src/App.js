import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/Home";
import Movie from "./components/Movie";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { NominationProvider } from "./context/NominationContext";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <Router>
            <NominationProvider>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/movie/:imdbID" component={Movie} />
                    </Switch>
                </div>
            </NominationProvider>
        </Router>
    );
};

export default App;
