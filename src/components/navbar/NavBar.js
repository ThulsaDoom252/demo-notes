import React from 'react';
import {NavLink} from "react-router-dom";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top"
             style={{"align-items": "center;"}}>
            <a className="navbar-brand" href="#">N & S Notes</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink to={"/"} className="nav-link">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/about"} className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/contacts"} className="nav-link">Contacts</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default NavBar;