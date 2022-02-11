import React, { useState } from "react";
import "./Sidebar.css";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Sidebar() {
  const [showOptions, setShowOptions] = useState(false);
  const [select, showSelect] = useState(true);

  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li className="menu-item">
            <Link to="./Dashboard" className={`${select? "add-select ai-icon":"ai-icon"}`} aria-expanded="false">
              <ListOutlinedIcon />
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>

          <li className="menu-item">
            <Link to="./Calendar" className="ai-icon"  aria-expanded="false">
              <DateRangeOutlinedIcon />
              <span className="nav-text">Calendar</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="./ScheduleCall" className="ai-icon" aria-expanded="false">
              <CallOutlinedIcon />
              <span className="nav-text">Schedule a call</span>
            </Link>
          </li>

          <li className="menu-item">
            <a
              className="ai-icon options_display"
              aria-expanded="false"
              onClick={() => setShowOptions(!showOptions)}
            >
              <DocumentScannerOutlinedIcon />
              <span className="nav-text">Doc review services </span>
              <ChevronRightIcon />
            </a>

            {showOptions && (
              <ul aria-expanded="false" className="options">
                <li>
                  <Link className="doc-items" to="./UploadResume">
                    {" "}
                    Resume/CV upload & review{" "}
                  </Link>
                </li>
                <li>
                  <a className="doc-items" href="./coming-soon.html">
                    {" "}
                    SOP upload & review{" "}
                  </a>
                </li>
                <li>
                  <a className="doc-items" href="./coming-soon.html">
                    {" "}
                    LOR upload & review{" "}
                  </a>
                </li>
                <li>
                  <a className="doc-items" href="./coming-soon.html">
                    {" "}
                    Essay upload & review{" "}
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item">
            <a
              href="./coming-soon.html"
              className="ai-icon"
              aria-expanded="false"
            >
              <SearchOutlinedIcon />
              <span className="nav-text">Quick Document Check</span>
            </a>
          </li>
          <li className="menu-item">
            <a
              href="./coming-soon.html"
              className="ai-icon"
              aria-expanded="false"
            >
              <PersonOutlineOutlinedIcon />
              <span className="nav-text">Recommended Mentors</span>
            </a>
          </li>
          <li className="menu-item">
            <a
              href="./coming-soon.html"
              className="ai-icon"
              aria-expanded="false"
            >
              <DiamondOutlinedIcon />
              <span className="nav-text">Funding and Finances</span>
            </a>
          </li>
          <li className="menu-item">
            <a
              href="./coming-soon.html"
              className="ai-icon"
              aria-expanded="false"
            >
              <PublicOutlinedIcon />
              <span className="nav-text">Immigration Services</span>
            </a>
          </li>
        </ul>
        <div className="add-menu-sidebar">
          <img
            src="https://demo.precisely.co.in/images/calendar.png"
            alt=""
          ></img>
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
