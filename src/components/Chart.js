import React from "react";
import "./Chart.css";
import { Chart } from "react-google-charts";

export const data = [
    ["Universities",
     "Active applicants"
    ],
    ["University of Oslo", 1000],
    ["University of Melbourne", 1170],
    ["University of Auckland", 660],
    ["University of Amsterdam", 1030],
    ["NUS", 1000],
  ];
  

function Chart1() {
  return (
    <div className="chart">
      <h3 className="chart_title">Trending Universities On Precisely</h3>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
      />
    </div>
  );
}

export default Chart1;
