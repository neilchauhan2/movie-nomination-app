import React from "react";
import { Link } from "react-router-dom";
import "../../static/css/layout/navbar.css";

const Navbar = () => {
    return (
        <nav
            className="navbar is-link"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h3 className="is-size-3 ml-4 mb-1">The Shoppies</h3>
                </Link>

                <Link
                    to="#"
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <Link className="navbar-item" to="#">
                        <strong>Your Nominations</strong>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
