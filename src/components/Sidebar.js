import React, { useState } from "react";
import "./Sidebar.css";
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { NavLink } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Sidebar() {
  const [showOptions, setShowOptions] = useState(false);
  // const [select, showSelect] = useState(true); 
  // const select  = true;


  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li className="menu-item">
            <NavLink to="./Dashboard" 
            className="ai-icon" 
            activeClassName="add-select"
            aria-expanded="false">
              <ListRoundedIcon />
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink to="./Calendar" 
            className="ai-icon" 
            activeClassName="add-select" 
            aria-expanded="false">
              <DateRangeOutlinedIcon />
              <span className="nav-text">Calendar</span>
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink 
            to="./ScheduleCall" 
            className="ai-icon" 
            activeClassName="add-select"  
            aria-expanded="false">
              <CallOutlinedIcon />
              <span className="nav-text">Schedule a call</span>
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink
              to="#"
              className="ai-icon "
              // options_display
              activeClassName="add-select"
              aria-expanded="false"
              onClick={() => setShowOptions(!showOptions)}
            >
              <DocumentScannerOutlinedIcon />
              <span className="nav-text">Doc review services </span>
              <ChevronRightIcon />
            </NavLink>

            {showOptions && (
              <ul className="options">
                <li>
                  <NavLink className="doc-items" activeClassName="none" to="./UploadResume">
                    
                    Resume/CV upload & review
                  </NavLink>
                </li>
                <li>
                  <NavLink className="doc-items" activeClassName="none" to="./SOPPage">
                    SOP upload & review
                  </NavLink>
                </li>
                <li>
                  <a className="doc-items" href="./coming-soon.html">
                    
                    LOR upload & review
                  </a>
                </li>
                <li>
                  <a className="doc-items" href="./coming-soon.html">
                    
                    Essay upload & review
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
            <NavLink
              to='./QuickDocCheck'
              className="ai-icon"
              activeClassName="add-select"
              aria-expanded="false"
            >
              <SearchOutlinedIcon />
              <span className="nav-text">Quick Document Check</span>
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink
              to='./RecommendedMentors'
              activeClassName="add-select"
              className="ai-icon"
              aria-expanded="false"
            >
              <PersonOutlineOutlinedIcon />
              <span className="nav-text">Recommended Mentors</span>
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink
              to='./FundingFinances'
              activeClassName="add-select"
              className="ai-icon"
              aria-expanded="false"
            >
              <DiamondOutlinedIcon />
              <span className="nav-text">Funding and Finances</span>
            </NavLink>
          </li>

          <li className="menu-item">
            <NavLink
              to="./ImmigrationServices"
              activeClassName="add-select"
              className="ai-icon"
              aria-expanded="false"
            >
              <PublicOutlinedIcon />
              <span className="nav-text">Immigration Services</span>
            </NavLink>
          </li>


        </ul>
        <div className="add-menu-sidebar">
          <img
            src="https://demo.precisely.co.in/images/calendar.png"
            alt=""
          />
          <p className="font-w500 mb-0">Start your journey today</p>
        </div>
        <div className="copyright">
          <p>
            <strong>Precisely | Dashboard</strong> © 2021 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
