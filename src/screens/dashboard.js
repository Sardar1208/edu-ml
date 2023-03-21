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
    <div style={{ backgroundColor: "white", height: "100vh" }}>
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
          <div className="dashboard-profile">
            <div className="dashboard-subunit-title">My Profile</div>
            <div className="dashboard-profile-main">
              <div
                style={{
                  width: "10rem",
                  height: "10rem",
                  borderRadius: "5rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/profile_icon.png"
                  alt={"profile"}
                  width={"100%"}
                  height={"100%"}
                />
              </div>

              <div className="dashboard-profile-info">
                <span>{user_data.username}</span>
                <span>{user_data.email}</span>
                <span>Subjects: {user_data.subjects.length}</span>
                <span>Tests attempted: {user_data.previous_tests.length}</span>
              </div>
            </div>
          </div>

          <div className="dashboard-report-statistics-a" style={{ flex: 1 }}>
            <div className="dashboard-subunit-title">Courses</div>
            <div style={{ display: "flex", gap: "1rem", flex: 1 }}>
              <StatisticCard
                title={"Aptitude and Reasoning"}
                subtitle={"Aptitude and Reasoning"}
              />
              <StatisticCard
                title={"Aptitude and Reasoning"}
                subtitle={"Aptitude and Reasoning"}
              />
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <StatisticCard
                title={"Aptitude and Reasoning"}
                subtitle={"Aptitude and Reasoning"}
              />
              <StatisticCard
                title={"Aptitude and Reasoning"}
                subtitle={"Aptitude and Reasoning"}
              />
            </div>
          </div>

          <div className="dashboard-report-statistics-b">
            <div className="dashboard-subunit-title">Report Statistics</div>
            <div className="dashboard-report-statistics-score">
              <div
                style={{
                  width: "12rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CircularProgressbar
                  value={user_data.previous_tests[0].score}
                  text={user_data.previous_tests[0].score + "%"}
                />
                <span
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "gray",
                    marginTop: "1rem",
                  }}
                >
                  Last Score
                </span>
              </div>
              <div
                style={{
                  width: "12rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CircularProgressbar
                  value={user_data.overall_score}
                  text={user_data.overall_score + "%"}
                />
                <span
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "gray",
                    marginTop: "1rem",
                  }}
                >
                  Overall Score
                </span>
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

        <div className="dashboard-right">
          <div className="dashboard-subunit-title">Calender</div>
          <Calendar
            setSelectedDate={(e) => setSelectedDate(e)}
            format="range"
            size="sm"
            dayFormat="normal"
          />

          <div
            className="dashboard-subunit-title"
            style={{ marginTop: "2rem" }}
          >
            All Subjects
          </div>
          <div style={{ width: "100%" }}>
            {user_data.subjects.map((subject) => {
              return (
                <div
                  style={{
                    display: "flex",
                    margin: "1rem",
                    alignItems: "center",
                    gap: "1rem",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", gap: "2rem" }}>
                    <div
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "1rem",
                        backgroundColor: "blue",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {subject.name[0].toUpperCase()}
                    </div>
                    <span
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "gray",
                      }}
                    >
                      {subject.name}
                    </span>
                  </div>
                  <span>{">"}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
