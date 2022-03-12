import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
// import { InlineWidget } from "react-calendly";
import "./Dashboard.css";

function Calendar() {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div>
          
          <DashboardHeader name="Calendar" />

          <section className="dash-main">
            {/* <InlineWidget url="https://calendly.com/your_scheduling_page" /> */}
          </section>

          {/* <div className="footer">
            <p>
              Copyright ©
              <a href="http://precisely.co.in/"> Precisely - Study Abroad </a>
              2020
            </p>
          </div> */}

        </div>
      </div>
    </>
  );
}

export default Calendar;
