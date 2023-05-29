import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./recommended.css";

function Recommended(props) {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const res = state?.res || null;
    if (res == null) {
      fetchQuestions();
    } else {
      setQuestions(res);
    }
  }, []);

  async function fetchQuestions() {
    const req = await fetch(
      "https://education-y04h.onrender.com/user/revision-questions",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("auth_token").toString(),
        },
      }
    );

    let res = await req.json();
    console.log(res);
    setQuestions(res);
  }

  function getStatus(date) {
    const split = date.split("/");
    var currentDate = new Date();
    if (parseInt(split[2]) < currentDate.getFullYear()) {
      return "Expired";
    } else if (parseInt(split[2]) === currentDate.getFullYear()) {
      if (parseInt(split[1]) < currentDate.getMonth() + 1) {
        return "Expired";
      } else if (parseInt(split[1]) === currentDate.getMonth() + 1) {
        if (parseInt(split[0]) < currentDate.getDate()) {
          return "Expired";
        }
      }
    }

    return "Available";
  }

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

      <div className="recommended-cards-parent">
        <div
          style={{ fontSize: "22px", fontWeight: "bold", marginTop: "20px" }}
        >
          Practice Questions
        </div>
        {questions.map((question, index) => {
          return (
            <div className="recommended-card">
              <div>
                <span style={{ fontWeight: "bold", padding: "10px" }}>
                  revision test {index + 1}
                </span>
                <div style={{ padding: "10px" }}>
                  Attempt Date : {question["attempt_date"]}
                </div>
              </div>

              <div>
                <span style={{ fontWeight: "bold" }}>Stutus: </span>
                <span style={{ fontWeight: "bold" }}>
                  {getStatus(question["attempt_date"])}
                </span>
              </div>

              <button
                onClick={() => {
                  navigate("/test", { state: { res: question["questions_ID"] } });
                }}
              >
                Attempt Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommended;
