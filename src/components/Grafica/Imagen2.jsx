import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#FF5733"];

const series = [
    {
        name: "Brazil",
        data: [
            { "year": 2010, value: 0.0 },
            { "year": 2011, value: 343.1 },
            { "year": 2012, value: 1022.6666666667 },
            { "year": 2013, value: 947.0 },
            { "year": 2014, value: 1238.3333333333 },
            { "year": 2015, value: 1345.6666666667 },
            { "year": 2016, value: 1272.5714285714 },
            { "year": 2017, value: 1567.5 },
            { "year": 2018, value: 1739.2857142857 },
            { "year": 2019, value: 1695.6 },
            { "year": 2020, value: 1718.5 },
            { "year": 2021, value: 1760.3636363636 },
            { "year": 2022, value: 1824.5 },
        ],
    },
    {
        name: "Germany",
        data: [
            { "year": 2010, value: 0.0 },
            { "year": 2011, value: 496.25 },
            { "year": 2012, value: 1368.125 },
            { "year": 2013, value: 1311.5 },
            { "year": 2014, value: 1429.4545454545 },
            { "year": 2015, value: 1548.25 },
            { "year": 2016, value: 1325.4545454545 },
            { "year": 2017, value: 1534.125 },
            { "year": 2018, value: 1569.3333333333 },
            { "year": 2019, value: 1577.0 },
            { "year": 2020, value: 1604.0 },
            { "year": 2021, value: 1614.7 },
            { "year": 2022, value: 1649.3333333333 },
        ],
    },
    {
        name: "Argentina",
        data: [
            { "year": 2010, value: 0.0 },
            { "year": 2011, value: 364.4285714286 },
            { "year": 2012, value: 1187.75 },
            { "year": 2013, value: 1277.6 },
            { "year": 2014, value: 1280.125 },
            { "year": 2015, value: 1468.7142857143 },
            { "year": 2016, value: 1535.6666666667 },
            { "year": 2017, value: 1468.7142857143 },
            { "year": 2018, value: 1450.625 },
            { "year": 2019, value: 1593.125 },
            { "year": 2020, value: 1629.5 },
            { "year": 2021, value: 1671.7272727273 },
            { "year": 2022, value: 1760.3333333333 },
        ],
    },
    {
        name: "France",
        data: [
            { "year": 2010, value: 0.0 },
            { "year": 2011, value: 544.8571428571 },
            { "year": 2012, value: 961.4285714286 },
            { "year": 2013, value: 880.3333333333 },
            { "year": 2014, value: 1021.0 },
            { "year": 2015, value: 1032.3333333333 },
            { "year": 2016, value: 992.2307692308 },
            { "year": 2017, value: 1246.8571428571 },
            { "year": 2018, value: 1504.0769230769 },
            { "year": 2019, value: 1724.5 },
            { "year": 2020, value: 1745.0 },
            { "year": 2021, value: 1761.0 },
            { "year": 2022, value: 1787.5 },
        ],
    },
    {
        name: "Spain",
        data: [
            { "year": 2010, value: 0.0 },
            { "year": 2011, value: 946.2 },
            { "year": 2012, value: 1494.4 },
            { "year": 2013, value: 1575.6666666667 },
            { "year": 2014, value: 1344.2857142857 },
            { "year": 2015, value: 1181.4 },
            { "year": 2016, value: 1234.3333333333 },
            { "year": 2017, value: 1174.4 },
            { "year": 2018, value: 1380.8333333333 },
            { "year": 2019, value: 1611.8 },
            { "year": 2020, value: 1639.0 },
            { "year": 2021, value: 1657.0 },
            { "year": 2022, value: 1706.5 },
        ],
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/line-chart-width-multi-series-64tbt';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={300}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" type="category" allowDuplicatedCategory={false} />
                    <YAxis dataKey="value" />
                    <Tooltip />
                    <Legend />
                    {series.map((s, index) => (
                        <Line dataKey="value" data={s.data} name={s.name} key={s.name} stroke={colors[index]} />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
