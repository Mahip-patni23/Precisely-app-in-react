import React from "react";
import "./Dashboard.css";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";
import { userData } from "../dummyData";
import SchoolIcon from "@mui/icons-material/School";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";


function Dashboard() {
  return (
    <>
      <Sidebar />
      <DashboardHeader name="Dashboard" />

      <section className="dash-main">
        <div className="dash-card-section">
          <div className="card-column">
            <div className="dash-card">
              <div className="card-icon">
                <SchoolIcon sx={{ fontSize: 50 }} color="success"></SchoolIcon>
              </div>
              <div className="card-text">
                <p>University Name</p>
                <h3>
                  <b>80%</b>
                </h3>
              </div>
            </div>
            <div className="dash-card">
              <div className="card-icon">
                <PhonelinkIcon
                  sx={{ fontSize: 50 }}
                  color="action"
                ></PhonelinkIcon>
              </div>
              <div className="card-text">
                <p>Prefered Major/Discipline</p>
                <h3>
                  <b>Computer Science</b>
                </h3>
              </div>
            </div>
          </div>

          <div className="card-column">
            <div className="dash-card">
              <div className="card-icon">
                <StarRoundedIcon
                  sx={{ fontSize: 50 }}
                  color="primary"
                ></StarRoundedIcon>
              </div>
              <div className="card-text">
                <p>Course Level</p>
                <h3>
                  <b>Beginner</b>
                </h3>
              </div>
            </div>
            <div className="dash-card">
              <div className="card-icon">
                <AttachMoneyRoundedIcon
                  sx={{ fontSize: 50 }}
                  color="secondary"
                ></AttachMoneyRoundedIcon>
              </div>
              <div className="card-text">
                <p>Financial Aid Required</p>
                <h3>
                  <b>Yes</b>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="dash-card dash-card-chart">
          <div className="dash-chart">
            <Chart
              data={userData}
              title="Trending Universities On Precisely"
              grid
              dataKey="Active User"
            ></Chart>
          </div>
        </div>

        <div className="dash-card-section">
          <div className="dash-card dash-card-3">
            <h2 className="dash-card-3-heading">
              Top Recommended Universities
            </h2>

            <div className="border-line"></div>

            <table className="dash-table">
              <th className="dash-table-heading">
                <td>#</td>
                <td>University Name</td>
                <td>Ranking</td>
                <td>Cost</td>
              </th>
            </table>

            <div className="border-line"></div>
          </div>
        </div>

        <div className="dash-card-section">
          <div className="card-column">
            <div className="dash-card dash-card-4"></div>
            <div className="dash-card dash-card-4">
                
            </div>
          </div>
          <div className="dash-card dash-card-5">
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
