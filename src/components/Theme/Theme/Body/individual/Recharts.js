import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 2009,
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 2010,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 2011,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 2012,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 2013,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 2014,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 2015,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Recharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';
  constructor(props){
    super(props)
    this.state = {
      individual:'',
      blocks:[],
    }
}

  render() {
    console.log(this.props);
    return (
      <div  style={{ width: '100%' }}>
      <ResponsiveContainer  width="100%" height={300}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
