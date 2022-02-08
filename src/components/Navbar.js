import React from 'react'
import './Navbar.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                <img className="logo-abbr" src="https://demo.precisely.co.in/images/logo.png" alt=""></img>
                <img className="brand-title" src='https://demo.precisely.co.in/images/logo-text.png' alt=""></img>
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