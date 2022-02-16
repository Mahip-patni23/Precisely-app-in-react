import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
// import { InlineWidget } from "react-calendly";
import './Dashboard.css';

function Calendar() {
  return <>
    <Sidebar/>
    <DashboardHeader name="Calendar"/>

    <div className="dash-main">
      {/* <InlineWidget url="https://calendly.com/your_scheduling_page" /> */}
    </div>
  </>;
}

export default Calendar;
