import React from 'react'
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import "./Dashboard.css";

const ImmigrationServices = () => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div>
          <DashboardHeader name="Immigration Services" />
          <section className="dash-main">
            
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
  )
}

export default ImmigrationServices