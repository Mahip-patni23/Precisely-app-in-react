import React from 'react';
import './Sidebar.css';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import {Link} from 'react-router-dom';

function Sidebar() {
  return (

        
        <div className="deznav">
            <div className="deznav-scroll">
                <ul className="metismenu" id="menu">
                    
                    <li>                        
                        <a href="./index.html" className="ai-icon" aria-expanded="false">                        
                            <ListOutlinedIcon />
                            <span className='nav-text'>Dashboard</span>                      
                        </a>                        
                    </li>
                    
                    <li>
                        <a href="src\pages\Calendar" className="ai-icon" aria-expanded="false">                      
                            <DateRangeOutlinedIcon />
                            <span className="nav-text">Calendar</span>                       
                        </a>
                    </li>
                    <li>
                        <a href="./app-call.html" className="ai-icon" aria-expanded="false">
                            <CallOutlinedIcon/>
                            <span className="nav-text">Schedule a call</span>
                        </a>
                    </li>
                    
                    <li>
                        <a className="has-arrow  ai-icon" href="javascript:void()" aria-expanded="false">
                            <DocumentScannerOutlinedIcon/>
                            <span className="nav-text">Doc review services</span>
                        </a>
                        <ul aria-expanded="false">

                            <li><a className="doc-items" href="./coming-soon.html" > Resume/CV upload & review </a></li>
                            <li><a className="doc-items" href="./coming-soon.html" > SOP upload & review </a></li>
                            <li><a className="doc-items" href="./coming-soon.html" > LOR upload & review </a></li>
                            <li><a className="doc-items" href="./coming-soon.html" > Essay upload & review </a></li>

                        </ul>
                    </li>
                    <li><a href="./coming-soon.html" className="ai-icon" aria-expanded="false">
                            <SearchOutlinedIcon />
                            <span className="nav-text">Quick Document Check</span>
                        </a>
                    </li>
                    <li><a href="./coming-soon.html" className="ai-icon" aria-expanded="false">
                            <PersonOutlineOutlinedIcon/>
                            <span className="nav-text">Recommended Mentors</span>
                        </a>
                    </li>
                    <li><a href="./coming-soon.html" className="ai-icon" aria-expanded="false">
                            <DiamondOutlinedIcon/>
                            <span className="nav-text">Funding and Finances</span>
                        </a>
                    </li>
                    <li><a href="./coming-soon.html" className="ai-icon" aria-expanded="false">
                            <PublicOutlinedIcon/>
                            <span className="nav-text">Immigration Services</span>
                        </a>
                    </li>
                    
                </ul>
                <div className="add-menu-sidebar">
                    <img src="images/calendar.png" alt="" className="mr-3"></img>
                    <p className="	font-w500 mb-0">Start your journey today</p>
                </div>
                <div className="copyright">
                    <p><strong>Precisely | Dashboard</strong> © 2021 All Rights Reserved</p>

                </div>
            </div>
        </div>
    
  )
}

export default Sidebar;
