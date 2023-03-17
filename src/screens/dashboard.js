import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { PieChart } from "react-minimal-pie-chart";
import moment from "moment";
import "../common_styles/navbar.css";
import "react-circular-progressbar/dist/styles.css";
import "./dashboard.css";
import { Calendar } from "custom-calendar-vs";
import { user_data } from "../constants/user_data";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(moment());

  return (
    <div>
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

      <div className="dashboard-body">
        <div className="dashboard-profile">
          <div className="dashboard-profile-user">
            <div className="dashboard-profile-user-img">
              <img
                src="/profile_icon.png"
                width={"100%"}
                height={"100%"}
                alt={"profile"}
              />
            </div>
            <span>{user_data.username}</span>
          </div>

          <div className="dashboard-subjects">
            <div className="dashboard-subjects-table">
              {user_data.subjects.map((subject, index) => {
                return (
                  <>
                    <div className="dashboard-subjects-table-row">
                      <span>{subject.name}</span>
                      <span>Score: {subject.score}</span>
                    </div>
                    <hr></hr>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="dashboard-main">
          <div className="dashboard-stats">
            <div className="dashboard-stat">
              <span>Text</span>
              <div className="dashboard-circular-bar">
                <CircularProgressbar
                  value={75}
                  text={"75"}
                  styles={{ textSize: "20px" }}
                />
              </div>
            </div>

            <div className="dashboard-stat">
              <span>Text</span>
              <div className="dashboard-circular-bar">
                <CircularProgressbar
                  value={75}
                  text={"75"}
                  styles={{ textSize: "20px" }}
                />
              </div>
            </div>

            <div className="dashboard-stat">
              <span>Text</span>
              <div className="dashboard-circular-bar">
                <CircularProgressbar
                  value={75}
                  text={"75"}
                  styles={{ textSize: "20px" }}
                />
              </div>
            </div>

            <div className="dashboard-stat">
              <span>Text</span>
              <div className="dashboard-circular-bar">
                <CircularProgressbar
                  value={75}
                  text={"75"}
                  styles={{ textSize: "20px" }}
                />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="dashboard-pie-chart">
              <div>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    marginBottom: "1rem",
                  }}
                >
                  Test Distribution
                </span>
                <div className="dashboard-pie-chart-labels">
                  <div
                    className="dashboard-pie-chart-label-color"
                    style={{ backgroundColor: "#E38627" }}
                  ></div>
                  <span>Physics</span>
                </div>
                <div className="dashboard-pie-chart-labels">
                  <div
                    className="dashboard-pie-chart-label-color"
                    style={{ backgroundColor: "#C13C37" }}
                  ></div>
                  <span>Mathematics</span>
                </div>
                <div className="dashboard-pie-chart-labels">
                  <div
                    className="dashboard-pie-chart-label-color"
                    style={{ backgroundColor: "#6A2135" }}
                  ></div>
                  <span>DBMS</span>
                </div>
              </div>
              <div className="dashboard-pie">
                <PieChart
                  data={[
                    { title: "One", value: 10, color: "#E38627" },
                    { title: "Two", value: 15, color: "#C13C37" },
                    { title: "Three", value: 20, color: "#6A2135" },
                  ]}
                />
              </div>
            </div>

            <div className="dashboard-calender-view">
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                }}
              >
                Calender
              </span>
              <Calendar
                setSelectedDate={(e) => setSelectedDate(e)}
                format="range"
                size="sm"
                dayFormat="normal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
