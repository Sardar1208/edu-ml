import "./statistic_card.css";

function StatisticCard(props) {
  return (
    <div className="statistic">
      <div>
        <img
          width={"60px"}
          height={"40px"}
          src={"/youtube_logo.png"}
          alt={"thumbnail"}
        />
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
