import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-fixed">
            <nav className="z-depth-0">
            <div className="nav-wrapper bg-nord3">
                <Link to="/"
                        style={{
                            fontFamily: "monospace"
                        }}
                        className="col s5 brand-logo center">
                    <i className="material-icons">code</i>
                    Project Aurora
                </Link>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;