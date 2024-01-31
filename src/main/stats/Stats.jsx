import "./stats.scss";
// icons
import icon_1 from "./images/box-tick.png";
import icon_2 from "./images/3d-rotate.png";
import icon_3 from "./images/shopping-cart.png";
import icon_4 from "./images/coin.png";

// trend-icon
import up from "./images/up.png";
import down from "./images/down.png";

// trend-image
import uptrend from "./images/up-trend.png";
import downtrend from "./images/down-trend.png";

const Orders = () => {
  return (
    <div className="Stats-container">
      <div className="Item">
        <div className="Item-top">
          <img src={icon_1} alt="icon1" />
          <img src={uptrend} alt="uptrend" />
        </div>
        <div className="Item-mid">
          Total Order
          <br />
          <span>350</span>
        </div>
        <div className="Item-bottom">
          <span style={{ backgroundColor: "#34CAA520", color: "#34CAA5" }}>
            <img src={up} alt="up" />
            23.5%
          </span>
          vs. previous month
        </div>
      </div>
      <div className="Item">
        <div className="Item-top">
          <img src={icon_2} alt="icon2" />
          <img src={downtrend} alt="downtrend" />
        </div>
        <div className="Item-mid">
          Total Refund
          <br />
          <span>270</span>
        </div>
        <div className="Item-bottom">
          <span style={{ backgroundColor: "#ED544E20", color: "#ED544E" }}>
            <img src={down} alt="down" />
            30.6%
          </span>
          vs. previous month
        </div>
      </div>
      <div className="Item">
        <div className="Item-top">
          <img src={icon_3} alt="icon3" />
          <img src={downtrend} alt="downtrend" />
        </div>
        <div className="Item-mid">
          Average Sales
          <br />
          <span>1567</span>
        </div>
        <div className="Item-bottom">
          <span style={{ backgroundColor: "#ED544E20", color: "#ED544E" }}>
            <img src={down} alt="down" />
            18.9%
          </span>
          vs. previous month
        </div>
      </div>
      <div className="Item">
        <div className="Item-top">
          <img src={icon_4} alt="icon4" />
          <img src={uptrend} alt="uptrend" />
        </div>
        <div className="Item-mid">
          Total Income
          <br />
          <span>$350.000</span>
        </div>
        <div className="Item-bottom">
          <span style={{ backgroundColor: "#34CAA520", color: "#34CAA5" }}>
            <img src={up} alt="up" />
            58.4%
          </span>
          vs. previous month
        </div>
      </div>
    </div>
  );
};

export default Orders;
