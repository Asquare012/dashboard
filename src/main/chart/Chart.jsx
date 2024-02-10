import "./chart.scss";
import Barchart from "./Bar_chart";
import arrow from "./Arrow - Down.png";

const Charts = () => {
  return (
    <div className="Charts-container">
      <div className="Chart-title">
        <div className="Title-left">Sales Trends</div>
        <div className="Title-right">
          Sort by :
          <span>
            Weekly <img src={arrow} alt="arrow" height="13px" />
          </span>
        </div>
      </div>
      <div className="Chart-section">
        <Barchart />
      </div>
    </div>
  );
};

export default Charts;
