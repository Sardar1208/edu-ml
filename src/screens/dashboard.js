import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import moment from "moment";
import "../common_styles/navbar.css";
import "react-circular-progressbar/dist/styles.css";
import "./dashboard.css";
import { Calendar } from "custom-calendar-vs";
import { user_data } from "../constants/user_data";
import { CircularProgressbar } from "react-circular-progressbar";
import StatisticCard from "../common_components/statistic_card";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <div style={{ backgroundColor: "whitesmoke", height: "100vh" }}>
      {/* navbar */}
      <div className="appbar">
        <div className="logo">
          <img src="/logo192.png" alt="logo" height={"100%"} width={"100%"} />
        </div>

        <div className="links">
          <a href="/dashboard" className="nav-link">
            Dashboard
          </a>
          <a href="#a" className="nav-link">
            My Tests
          </a>
          <a href="#a" className="nav-link">
            Profile
          </a>
        </div>

        <div className="login">
          <button className="login-btn">Logout</button>
        </div>
      </div>

      {/* BODY */}
      <div className="dashboard-body">
        <div className="dashboard-left">
          <div className="dashboard-report-statistics-a">
            <div className="dashboard-subunit-title">Courses</div>
            <StatisticCard
              title={"Aptitude and Reasoning"}
              subtitle={"Aptitude and Reasoning"}
            />
            <StatisticCard
              title={"Aptitude and Reasoning"}
              subtitle={"Aptitude and Reasoning"}
            />
          </div>

          <div className="dashboard-report-statistics-b">
            <div className="dashboard-subunit-title">Report Statistics</div>
            <div className="dashboard-report-statistics-score">
              <div style={{ width: "12rem" }}>
                <CircularProgressbar value={"75"} text={"75%"} />
              </div>
              <div style={{ width: "12rem" }}>
                <CircularProgressbar value={"75"} text={"75%"} />
              </div>
            </div>
          </div>

          <div className="dashboard-upcoming-tests">
            <div className="dashboard-subunit-title">Upcoming Examinations</div>
            <div className="dashboard-upcoming-tests-table">
              {user_data.tests.map((test, index) => {
                return (
                  <div
                    className="dashboard-upcoming-tests-row"
                    style={{
                      backgroundColor: index === 0 ? "purple" : "white",
                      color: index === 0 ? "white" : "black",
                    }}
                  >
                    <span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                      {test.subject}
                    </span>
                    <span
                      style={{
                        fontSize: "1rem",
                        color: index === 0 ? "white" : "gray",
                      }}
                    >
                      {test.date}
                    </span>
                    <span
                      style={{
                        fontSize: "1rem",
                        color: index === 0 ? "white" : "gray",
                      }}
                    >
                      {test.day}
                    </span>
                    <span
                      style={{
                        fontSize: "1rem",
                        color: index === 0 ? "white" : "gray",
                      }}
                    >
                      {test.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="dashboard-right">right</div>
      </div>
    </div>
  );
}

export default Dashboard;
