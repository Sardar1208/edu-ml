import { CircularProgressbar } from "react-circular-progressbar";
import "./statistic_card.css";

function StatisticCard(props) {
  return (
    <div className="statistic">
      <div style={{ width: "6rem" }}>
        <CircularProgressbar value={"75"} text={"75%"} />
      </div>
      <div className="statistic-info">
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {props.title}
        </span>
        <span
          style={{
            fontSize: "1.1rem",
            color: "gray",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          {props.subtitle}
        </span>
        <span style={{ fontSize: "1rem", color: "gray" }}>
          Test attempted at 12 August 2022 (15:00)
        </span>
      </div>
    </div>
  );
}

export default StatisticCard;
