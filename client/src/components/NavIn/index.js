import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";
import { useAuth0 } from "../../react-auth0-spa"; // COPIED OVER FROM NAVBAR.JS

function NavIn() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // COPIED OVER FROM NAVBAR.JS

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                {/* COPIED OVER FROM NAVBAR.JS */}
                <h2 className="logo">Neighborhood Pantry</h2>
                {<div className="container">

                    <div className="login">
                        {!isAuthenticated && (
                            <button onClick={() => loginWithRedirect({})}>Log in</button>
                        )}

                        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                    </div>
                </div>}
            </div>
        </nav>
    );
}

export default NavIn;