import "./subjective_question.css";
import "../screens/test.css";

function SubjectiveQuestion() {
  return (
    <div className="test-unit">
      <div className="test-question">This is a test question?</div>
      <div>
        <textarea className={"sub-input-multiline"} rows={5} />
      </div>
    </div>
  );
}

export default SubjectiveQuestion;
