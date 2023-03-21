import "./mcq.css";
import "../screens/test.css";

function MCQResult(props) {
  function getBackgroundColor(userAnswer, realAnswer, id) {
    if (realAnswer === id) {
        return "#7aca0c";
      }
    if (userAnswer !== id) {
      return "transparent";
    }
    if (userAnswer === realAnswer && userAnswer === id) {
      return "#7aca0c";
    }
    return "red";
  }

  return (
    <div className="test-unit" key={props.id}>
      <div className="test-question">{props.question}</div>

      <div className="mcq-options">
        <div
          className="mcq-input"
          style={{
            background: getBackgroundColor(
              props.data.userAnswer,
              props.data.answer,
              "A"
            ),
          }}
        >
          <input
            type={"radio"}
            radioGroup={props.id}
            name={props.id}
            id={"A"}
            disabled={true}
            checked={props.data.userAnswer === "A"}
          />
          <span>{props.option1}</span>
        </div>
        <div
          className="mcq-input"
          style={{
            background: getBackgroundColor(
              props.data.userAnswer,
              props.data.answer,
              "B"
            ),
          }}
        >
          <input
            type={"radio"}
            radioGroup={props.id}
            name={props.id}
            id={"B"}
            disabled={true}
            checked={props.data.userAnswer === "B"}
          />
          <span>{props.option2}</span>
        </div>
        <div
          className="mcq-input"
          style={{
            background: getBackgroundColor(
              props.data.userAnswer,
              props.data.answer,
              "C"
            ),
          }}
        >
          <input
            type={"radio"}
            radioGroup={props.id}
            name={props.id}
            id={"C"}
            disabled={true}
            checked={props.data.userAnswer === "C"}
          />
          <span>{props.option3}</span>
        </div>
        <div
          className="mcq-input"
          style={{
            background: getBackgroundColor(
              props.data.userAnswer,
              props.data.answer,
              "D"
            ),
          }}
        >
          <input
            type={"radio"}
            radioGroup={props.id}
            name={props.id}
            id={"D"}
            disabled={true}
            checked={props.data.userAnswer === "D"}
          />
          <span>{props.option4}</span>
        </div>
      </div>
    </div>
  );
}

export default MCQResult;
