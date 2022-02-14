import React from "react";
import "./Dashboard.css";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import Chart1 from "../components/Chart";
// import { userData } from "../dummyData";
import SchoolIcon from "@mui/icons-material/School";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarPurple500RoundedIcon from "@mui/icons-material/StarPurple500Rounded";
import { Table } from "react-bootstrap";
import Caraousel from "../components/Caraousel";

function Dashboard() {
  return (
    <>
      <div className="main">
        <Sidebar />

        <div>
          <DashboardHeader name="Dashboard" />

          <section className="dash-main">
            <div className="dash-card-section">
              <div className="card-column">
                <div className="dash-card card-hover">
                  <div className="card-icon">
                    <SchoolIcon
                      sx={{ fontSize: 50 }}
                      color="success"
                    ></SchoolIcon>
                  </div>
                  <div className="card-text">
                    <p>University Name</p>
                    <h3>
                      <b>80%</b>
                    </h3>
                  </div>
                </div>
                <div className="dash-card card-hover">
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
                    <Chart1></Chart1>
                  </div>
                </div>
              </div>

              <div className="card-column">
                <div className="dash-card card-hover">
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
                <div className="dash-card card-hover">
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
                <h5>Top Recommended Universities</h5>

                <div className="border-line"></div>

                <Table className="dash-table" striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>University Name</th>
                      <th>Ranking</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>

                <div className="border-line"></div>
              </div>
            </div>

            <div className="dash-card-section">
              <div className="card-column">
                <div className="dash-card dash-card-4">
                  <h5>Probability for top recommended colleges</h5>
                  <p>
                    This percentage is based on prediction models and in no way
                    guarantee's your addmission to any mentioned institute.
                  </p>
                </div>

                <div className="dash-card dash-card-6">
                  <h5>Recomended Mentors for You</h5>
                  <p>
                    Following are the mentors who have mentored students with
                    similar profile as yours
                  </p>
                  <Caraousel></Caraousel>
                </div>
              </div>

              <div className="dash-card dash-card-5">
                <h5>Precisely's Offerings</h5>

                <div className="border-line"></div>

                <div className="services-card">
                  <div className="services-card-inner">
                    <div className="services-card-icon">
                      <LooksOneIcon sx={{ fontSize: 100, color: "#2aa769" }} />
                      {/* <h9><AccessTimeIcon sx={{ fontSize: 20 }} />3-5 days</h9> */}
                    </div>

                    <div className="services-card-content">
                      <h6>SOP review & editing</h6>
                      <h7>Precisely</h7>
                    </div>
                  </div>
                  <div className="services-review">
                    <h9>
                      <AccessTimeIcon sx={{ fontSize: 20 }} /> 3-5 days
                    </h9>{" "}
                    <h9>
                      <StarPurple500RoundedIcon
                        sx={{ fontSize: 20, color: "#e5c702" }}
                      />{" "}
                      50 reviews
                    </h9>
                  </div>
                </div>

                <div className="border-line"></div>

                <div className="services-card">
                  <div className="services-card-inner">
                    <div className="services-card-icon">
                      <LooksTwoIcon sx={{ fontSize: 100, color: "#b800ff" }} />
                    </div>
                    <div className="services-card-content">
                      <h6>Addmission Interview Preperation</h6>
                      <h7>YSI x Precisely</h7>
                    </div>
                  </div>

                  <div className="services-review">
                    <h9>
                      <AccessTimeIcon sx={{ fontSize: 20 }} /> 1-2 weeks
                    </h9>{" "}
                    <h9>
                      <StarPurple500RoundedIcon
                        sx={{ fontSize: 20, color: "#e5c702" }}
                      />{" "}
                      50 reviews
                    </h9>
                  </div>
                </div>

                <div className="border-line"></div>

                <div className="services-card">
                  <div className="services-card-inner">
                    <div className="services-card-icon">
                      <Looks3Icon sx={{ fontSize: 100, color: "#e03a71" }} />
                    </div>
                    <div className="services-card-content">
                      <h6>IELTS/TOFEL/CAE Test Preperation</h6>
                      <h7>University Connection x Precisely</h7>
                    </div>
                  </div>
                  <div className="services-review">
                    <h9>
                      <AccessTimeIcon sx={{ fontSize: 20 }} /> 2-3 weeks
                    </h9>{" "}
                    <h9>
                      <StarPurple500RoundedIcon
                        sx={{ fontSize: 20, color: "#e5c702" }}
                      />{" "}
                      50 reviews
                    </h9>
                  </div>
                </div>

                <div className="border-line"></div>

                <div className="services-card">
                  <div className="services-card-inner">
                    <div className="services-card-icon">
                      <Looks4Icon sx={{ fontSize: 100, color: "#e5c702" }} />
                    </div>
                    <div className="services-card-content">
                      <h6>Full University Application Guidance</h6>
                      <h7>Precisely</h7>
                    </div>
                  </div>
                  <div className="services-review">
                    <h9>
                      <AccessTimeIcon sx={{ fontSize: 20 }} /> 1-2 month(s)
                    </h9>{" "}
                    <h9>
                      <StarPurple500RoundedIcon
                        sx={{ fontSize: 20, color: "#e5c702" }}
                      />{" "}
                      50 reviews
                    </h9>
                  </div>
                </div>

                <div className="border-line"></div>

                <div className="services-card">
                  <div className="services-card-inner">
                    <div className="services-card-icon">
                      <Looks5Icon sx={{ fontSize: 100, color: "#1c90d5" }} />
                    </div>

                    <div className="services-card-content">
                      <h6>Loan/Finance Services</h6>
                      <h7>HDFC Credila x Precisely</h7>
                    </div>
                  </div>
                  <div className="services-review">
                    <h9>
                      <AccessTimeIcon sx={{ fontSize: 20 }} /> 15-20 days
                    </h9>{" "}
                    <h9>
                      <StarPurple500RoundedIcon
                        sx={{ fontSize: 20, color: "#e5c702" }}
                      />{" "}
                      50 reviews
                    </h9>
                  </div>
                </div>

                <div className="border-line"></div>
              </div>
            </div>
          </section>

          <div className="footer">
            <p>
              Copyright ©
              <a href="http://precisely.co.in/"> Precisely - Study Abroad </a>
              2020
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
