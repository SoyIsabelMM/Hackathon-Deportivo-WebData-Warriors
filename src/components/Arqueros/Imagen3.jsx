import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Win",
    "Resultados del equipo local": 9162,
    fill: "green",
  },
  {
    name: "Lose",
    "Resultados del equipo local": 4675,
    fill: "red",
  },
  {
    name: "Draw",
    "Resultados del equipo local": 4110,
    fill: "yellow",
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/bar-chart-has-no-padding-jphoc";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            tick={{ fill: "white" }}
            axisLine={{ stroke: "white" }}
          />
          <YAxis tick={{ fill: "white" }} axisLine={{ stroke: "white" }} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="Resultados del equipo local"
            fill="white"
            background={{ fill: "white" }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
