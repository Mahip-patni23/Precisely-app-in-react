import React from 'react'
import './Navbar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                <img className="Navbar-logo-image" src="../../../images/logo-full.png" alt="brand-logo" />
            </div>

            <div className="Navbar-icons">
                <FacebookIcon className="socials" sx={{ fontSize: 30 }}></FacebookIcon>
                <InstagramIcon className="socials" sx={{ fontSize: 30 }}></InstagramIcon>
                <LinkedInIcon className="socials" sx={{ fontSize: 30 }}></LinkedInIcon>
            </div>
        </div>
    )
}

export default Navbar