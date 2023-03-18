import "./mcq.css";
import "../screens/test.css";

function MCQ(props) {

  const handleChange = (val) => {
    console.log(val.target.id);
    let res = {
      id: val.target.name,
      andwer: val.target.id,
    }
    for(let i = 0; i<= props.list.length; i++) {
      const input = props.list[i];
      console.log(input);
      if(input.id === val.target.id) {
        continue;
      }
      let temp = props.list;
      temp.add(res);
      props.setList(temp);
      return;
    }
  }

  return (
    <div className="test-unit" key={props.id}>
      <div className="test-question">{props.question}</div>
      
      <div className="mcq-options">
        <div className="mcq-input">
          <input type={"radio"} radioGroup={props.id} name={props.id} id={"A"} onChange={handleChange} />
          <span>{props.option1}</span>
        </div>
        <div className="mcq-input">
          <input type={"radio"} radioGroup={props.id} name={props.id} id={"B"} onChange={handleChange} />
          <span>{props.option2}</span>
        </div>
        <div className="mcq-input">
          <input type={"radio"} radioGroup={props.id} name={props.id} id={"C"} onChange={handleChange} />
          <span>{props.option3}</span>
        </div>
        <div className="mcq-input">
          <input type={"radio"} radioGroup={props.id} name={props.id} id={"D"} onChange={handleChange} />
          <span>{props.option4}</span>
        </div>
      </div>
    </div>
  );
}

export default MCQ;
