import MCQ from "../common_components/mcq";
import Timer from "../common_components/timer";
import { questions } from "../constants/test_data";
import "./test.css";
import "../common_styles/navbar.css";

function Test() {
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
          <div className="test-que-index-main">
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            >
              INDEX
            </span>
            <div className="test-que-index">
              {questions.map((question, index) => {
                return (
                  <a href="#a" className="test-que-index-link">
                    {index + 1}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="test-timer">
            <span>Time Remaining</span>
            <Timer />
          </div>
        </div>
        <div className="test-main">
          <div className="test-title">Aptitude and Reasoning</div>
          <div className="test-main-rules">
            <span className="test-main-rules-heading">
              Please follow these guidlines before starting the test
            </span>
            <span> - This test contains a set of 10 Questions.</span>
            <span> - All questions are necessary</span>
            <span> - Each correct question awards 1 Mark</span>
            <span> - There is no negetive marking</span>
          </div>
          {questions.map((question, index) => {
            return (
              <MCQ
                question={question.question}
                option1={question.option1}
                option2={question.option2}
                option3={question.option3}
                option4={question.option4}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Test;
