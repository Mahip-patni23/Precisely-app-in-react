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
import Carousel from 'react-bootstrap/Carousel'


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



            <div className="dash-card-chart">
              <div className="dash-chart">
                <Chart
                  data={userData}
                  title="Trending Universities On Precisely"
                  grid
                  dataKey="Active User"
                ></Chart>
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


        <div className="dash-card-section">
          <div className="dash-card dash-card-3">
            <h5 className="dash-card-3-heading">
              Top Recommended Universities
            </h5>

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
            <div className="dash-card dash-card-4">
              <h5>
                Probability for top recommended colleges
              </h5>
              <p>
                This percentage is based on prediction models and in no way guarantee's your addmission to any mentioned institue.
              </p>
            </div>


            <div className="dash-card dash-card-6">
              <h5>
                Recomended Mentors for You
              </h5>
              <p>
                Following are the mentors who have mentored students with similar profile as yours
              </p>







            </div>
          </div>


          <div className="dash-card dash-card-5">
            <h5>
              Precisely's Offerings
            </h5>
          </div>
        </div>
      </section>

      <div class="footer">
        <p>Copyright ©
          <a href="http://precisely.co.in/" target="_blank"> Precisely - Study Abroad </a>
          2020</p>
      </div>

    </>
  );
}

export default Dashboard;
