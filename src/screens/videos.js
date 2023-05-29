import { useState } from "react";
import StatisticCard from "../common_components/statistic_card";
import "./videos.css";

const VIDEO_DATA = [
  {
    name: "Cloud Computing - Overview",
    link: "https://www.youtube.com/embed/NzZXz3fJf6o",
  },
  {
    name: "Cloud Computing Architecture",
    link: "https://www.youtube.com/embed/fZ3D6HQrWzs",
  },
  {
    name: "Introduction to Data Structures and Algorithms",
    link: "https://www.youtube.com/embed/zWg7U0OEAoE",
  },
  {
    name: "DSA - Stacks",
    link: "https://www.youtube.com/embed/g1USSZVWDsY",
  },
  {
    name: "DSA - Queues and Linked Lists",
    link: "https://www.youtube.com/embed/PGWZUgzDMYI",
  },
  {
    name: "DSA - Dictionaries",
    link: "https://www.youtube.com/embed/BmayUdDaDYM",
  },
  {
    name: "DSA - Stacks",
    link: "https://www.youtube.com/embed/g1USSZVWDsY",
  },
];

function Videos() {
  const [currentVideo, setCurrentVideo] = useState(0);

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
          <a href="/recommended" className="nav-link">
            Practice
          </a>
          <a href="/videos" className="nav-link">
            video Lectures
          </a>
        </div>

        <div className="login">
          <button className="login-btn">Logout</button>
        </div>
      </div>
      <div className="videos-parent">
        <div className="videos-leftbar">
          {VIDEO_DATA.map((item, index) => {
            return (
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  setCurrentVideo(index);
                }}
              >
                <StatisticCard title={item.name} />
              </button>
            );
          })}
        </div>
        <div className="videos-player">
          <iframe
            src={VIDEO_DATA[currentVideo].link}
            title="yt"
            width="80%"
            height="80%"
          >
            {" "}
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Videos;
