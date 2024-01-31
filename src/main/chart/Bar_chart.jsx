import { Component } from "react";
import Chart from "react-apexcharts";

class Barchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
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
          name: "series-1",
          data: [60, 10, 20, 30, 40, 50, 60, 91, 30, 40, 45, 50],
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
