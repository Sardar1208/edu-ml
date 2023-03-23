import "./test.css";
import "../common_styles/navbar.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MCQResult from "../common_components/mcq_result";

function TestResult() {
  const [data, setData] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    const { res } = state;
    setData(res);
  }, []);

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

      <div className="test-parent">
        <div className="test-hud">
          <button className="submit-btn">Go To Dashboard</button>
        </div>
        <div className="test-main">
          <div className="testresult-submitted">
            <div
              style={{
                width: "10rem",
                height: "10rem",
                borderRadius: "5rem",
                overflow: "hidden",
              }}
            >
              <img
                src="/check.png"
                alt={"profile"}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <span>Test Submitted</span>
          </div>
          {data != null ? (
            data.testResult.map((question, index) => {
              return (
                <MCQResult
                  question={question.question}
                  option1={question.option1}
                  option2={question.option2}
                  option3={question.option3}
                  option4={question.option4}
                  id={question._id}
                  data={question}
                />
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestResult;
