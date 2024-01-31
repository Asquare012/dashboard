import "./orders.scss";
// images
import icon from "./images/icon.png";
import one from "./images/one.png";
import two from "./images/two.png";
import three from "./images/three.png";
import four from "./images/four.png";
import five from "./images/five.png";

const Orders = () => {
  return (
    <div className="Orders-container">
      <div className="Container-title">
        <div>Last Orders</div>
        <div style={{ color: "#34CAA5" }}>See All</div>
      </div>
      <div className="Container-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <img src={one} alt="one" height="20px" /> Marcus Bergson
              </td>
              <td>Nov 15, 2023</td>
              <td>$80,000</td>
              <td style={{ color: "#34CAA5" }}>Paid</td>
              <td>
                <img src={icon} alt="icon" />
                View
              </td>
            </tr>
            <tr>
              <td>
                <img src={two} alt="two" height="20px" /> Jaydon Vaccaro
              </td>
              <td>Nov 15, 2023</td>
              <td>$150,000</td>
              <td style={{ color: "#ED544E" }}>Refund</td>
              <td>
                <img src={icon} alt="icon" />
                View
              </td>
            </tr>
            <tr>
              <td>
                <img src={three} alt="three" height="20px" /> Corey Schleifer
              </td>
              <td>Nov 14, 2023</td>
              <td>$87,000</td>
              <td style={{ color: "#34CAA5" }}>Paid</td>
              <td>
                <img src={icon} alt="icon" />
                View
              </td>
            </tr>
            <tr>
              <td>
                <img src={four} alt="four" height="20px" />
                Cooper Press
              </td>
              <td>Nov 14, 2023</td>
              <td>$100,000</td>
              <td style={{ color: "#ED544E" }}>Refund</td>
              <td>
                <img src={icon} alt="icon" />
                View
              </td>
            </tr>
            <tr>
              <td>
                <img src={five} alt="five" height="20px" />
                Phillip Lubin
              </td>
              <td>Nov 13, 2023</td>
              <td>$78,000</td>
              <td style={{ color: "#34CAA5" }}>Paid</td>
              <td>
                <img src={icon} alt="icon" />
                View
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
