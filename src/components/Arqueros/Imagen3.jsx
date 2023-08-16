// import React, { PureComponent } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//     {
//         name: 'Win',
//         'Resultados de local': 9162,
//         color: 'green',
//     },
//     {
//         name: 'Lose',
//         'Resultados de local': 4675,
//         color: 'red'
//     },
//     {
//         name: 'Draw',
//         'Resultados de local': 4110,
//         color: 'yellow'
//     }
// ];

// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

//     render() {
//         return (
//             <ResponsiveContainer width="100%" height="100%">
//                 <BarChart
//                     width={500}
//                     height={300}
//                     data={data}
//                     margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                     }}
//                     barSize={30}
//                 >
//                     <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <CartesianGrid strokeDasharray="3 3" />
//                     {data.map(item => (
//                         <Bar key={item.name} dataKey="Resultados de local" fill={item.color} background={{ fill: '#eee' }} />
//                     ))}
//                 </BarChart>
//             </ResponsiveContainer>
//         );
//     }
// }

import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Win',
        value: 9162,
        color: 'green',
    },
    {
        name: 'Lose',
        value: 4675,
        color: 'red'
    },
    {
        name: 'Draw',
        value: 4110,
        color: 'yellow'
    }
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/bar-chart-has-no-padding-jphoc';

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
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="value" fill={data.map(() => (data.color))} background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
