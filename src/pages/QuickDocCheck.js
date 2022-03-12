import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const QuickDocCheck = () => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <div>
          <DashboardHeader name="Quick Document Check" />
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

export default QuickDocCheck