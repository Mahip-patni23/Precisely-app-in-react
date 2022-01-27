import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                <img className="Navbar-logo-image" src="../../../images/logo-full.png" alt="brand-logo" />
            </div>

            {/* <div className="Navbar-btn">
                <button className="Navbar-signout-btn">
                    Sign Out
                </button>
            </div> */}
        </div>
    )
}

export default Navbar