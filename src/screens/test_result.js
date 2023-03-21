import MCQ from "../common_components/mcq";
import Timer from "../common_components/timer";
import { questions } from "../constants/test_data";
import "./test.css";
import "../common_styles/navbar.css";
import { useEffect, useState } from "react";
import MCQResult from "../common_components/mcq_result";

let data = {
  marks_obtained: 2,
  testResult: [
    {
      _id: "6412a5d697a7da8672d7f84a",
      question:
        "Ankita's weight is 20% less than that of her grandmother. The grandmother weight 26 kg less than grandmother's husband, whose weight is 81 kg. If Ankita's brother is 8 kg heavier than Ankita, then what is the weight (in kg) of Anikita's brother?",
      option1: "60",
      option2: "19",
      option3: "36",
      option4: "52",
      level: "E",
      answer: "A",
      year: "2022",
      shift: "21st shift 3",
      label: "Profit & Loss",
      userAnswer: "D",
      status: "Correct",
    },
    {
      _id: "6412a5d697a7da8672d7f849",
      question:
        "A and B can do a work in 12 days and 18 days, respectively. They worked together for 4 days after which B was replaced by C and the remaining work was completed by A and C in the next 4 days. In how many days will C alone complete 50% of the same work?",
      option1: "24",
      option2: "36",
      option3: "21",
      option4: "18",
      level: "M",
      answer: "D",
      year: "2022",
      shift: "20th shift 3",
      label: "Time & Work",
      userAnswer: "D",
      status: "Correct",
    },
  ],
  recommend_questions: [
    {
      Id: 0,
      question:
        "A and B can do a work in 12 days and 18 days, respectively. They worked together for 4 days after which B was replaced by C and the remaining work was completed by A and C in the next 4 days. In how many days will C alone complete 50% of the same work?",
    },
    {
      Id: 1,
      question:
        "Ankita's weight is 20% less than that of her grandmother. The grandmother weight 26 kg less than grandmother's husband, whose weight is 81 kg. If Ankita's brother is 8 kg heavier than Ankita, then what is the weight (in kg) of Anikita's brother?",
    },
  ],
};

function TestResult() {
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
                src="/profile_icon.png"
                alt={"profile"}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <span>Test Submitted</span>
          </div>
          {data.testResult.map((question, index) => {
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
          })}
        </div>
      </div>
    </div>
  );
}

export default TestResult;
