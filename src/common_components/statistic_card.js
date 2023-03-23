import { CircularProgressbar } from "react-circular-progressbar";
import "./statistic_card.css";

function StatisticCard(props) {
  return (
    <div className="statistic">
      <div style={{ width: "3rem" }}>
        <img width={"100%"} height={"100%"} src={"/youtube_logo.png"} alt={"thumbnail"}/>
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
