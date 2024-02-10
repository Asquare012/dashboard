import { Component } from "react";
import Chart from "react-apexcharts";

class Barchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "Account-bar",
          background: "#ffffff",
          foreColor: "#737373",
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          colors: ["#B0F2E2"],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
      series: [
        {
          name: "Amount",
          data: [
            9100, 6600, 4600, 3100, 2500, 5055, 7888, 4991, 5200, 4000, 9770,
            5000,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="chart-box">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Barchart;
