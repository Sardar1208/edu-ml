import MCQ from "../common_components/mcq";
import Timer from "../common_components/timer";
import "./test.css";
import "../common_styles/navbar.css";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

function Test(props) {
  const [list, setList] = useState([]);
  const [questions, setQuestions] = useState(null);

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    fetchTestData();
  }, []);

  async function fetchTestData() {

    const practice = state?.res || null;
    if(practice != null) {
      setQuestions(practice);
      return;
    }

    const req = await fetch(
      "https://education-y04h.onrender.com/user/questions",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(list);
    var data = {
      questions: list,
    };

    // do the POST api call and submit test results
    const req = fetch("https://education-y04h.onrender.com/user/submit-test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("auth_token").toString(),
      },
      body: JSON.stringify(data),
    });
    toast.promise(req, {
      loading: "Loading",
      success: async (data) => {
        console.log(data);
        let res = data.json().then((response) => {
          console.log(response);
          navigate("/test_result", { state: { res: response } });
        });
      },
      error: (err) => `${err.response.data}`,
    });
  };

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

      {questions != null ? (
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
            <form onSubmit={async (e) => await handleSubmit(e)}>
              {questions.map((question, index) => {
                return (
                  <MCQ
                    question={question.question}
                    option1={question.option1}
                    option2={question.option2}
                    option3={question.option3}
                    option4={question.option4}
                    id={question._id}
                    list={list}
                    setList={setList}
                    isEditable={true}
                  />
                );
              })}
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Test;
