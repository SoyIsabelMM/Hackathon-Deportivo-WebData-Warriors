import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: 1993, num_matches: 171 },
  { year: 1994, num_matches: 494 },
  { year: 1995, num_matches: 564 },
  { year: 1996, num_matches: 781 },
  { year: 1997, num_matches: 797 },
  { year: 1998, num_matches: 636 },
  { year: 1999, num_matches: 670 },
  { year: 2000, num_matches: 993 },
  { year: 2001, num_matches: 953 },
  { year: 2002, num_matches: 701 },
  { year: 2003, num_matches: 851 },
  { year: 2004, num_matches: 1016 },
  { year: 2005, num_matches: 741 },
  { year: 2006, num_matches: 763 },
  { year: 2007, num_matches: 910 },
  { year: 2008, num_matches: 1034 },
  { year: 2009, num_matches: 836 },
  { year: 2010, num_matches: 790 },
  { year: 2011, num_matches: 1022 },
  { year: 2012, num_matches: 927 },
  { year: 2013, num_matches: 942 },
  { year: 2014, num_matches: 788 },
  { year: 2015, num_matches: 938 },
  { year: 2016, num_matches: 867 },
  { year: 2017, num_matches: 885 },
  { year: 2018, num_matches: 830 },
  { year: 2019, num_matches: 1075 },
  { year: 2020, num_matches: 298 },
  { year: 2021, num_matches: 1077 },
  { year: 2022, num_matches: 571 },
];

export default class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis
            dataKey="year"
            tick={{ fill: "white" }}
            axisLine={{ stroke: "white" }}
          />
          <YAxis tick={{ fill: "white" }} axisLine={{ stroke: "white" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="num_matches"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
