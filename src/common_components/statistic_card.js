import { CircularProgressbar } from "react-circular-progressbar";
import "./statistic_card.css";

function StatisticCard(props) {
  return (
    <div className="statistic">
      <div style={{ width: "3rem" }}>
        <CircularProgressbar value={"75"} text={"75%"} />
      </div>
      <div className="statistic-info">
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {props.title}
        </span>
      </div>
    </div>
  );
}

export default StatisticCard;
