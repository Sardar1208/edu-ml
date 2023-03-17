import "./mcq.css";
import "../screens/test.css";

function MCQ(props) {
  return (
    <div className="test-unit">
      <div className="test-question">{props.question}</div>
      
      <div className="mcq-options">
        <div className="mcq-input">
          <input type={"radio"} radioGroup={"x"} name={"x"} />
          <span>{props.option1}</span>
        </div>
        <div className="mcq-input">
          <input type={"radio"} radioGroup={"x"} name={"x"} />
          <span>{props.option2}</span>
        </div>
        <div className="mcq-input">
          <input type={"radio"} radioGroup={"x"} name={"x"} />
          <span>{props.option3}</span>
        </div>
        <div className="mcq-input">
          <input type={"radio"} radioGroup={"x"} name={"x"} />
          <span>{props.option4}</span>
        </div>
      </div>
    </div>
  );
}

export default MCQ;
