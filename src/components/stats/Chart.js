import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,Legend } from 'recharts';


const data = [
  { destination: 'Agra', visit_percentage: 24 },
  { destination: 'Kerala', visit_percentage: 22 },
  { destination: 'Rajasthan', visit_percentage: 20 },
  { destination: 'Jammu & Kashmir', visit_percentage: 12 },
  { destination: 'Assam', visit_percentage: 11 },
  { destination: 'Goa', visit_percentage: 4 },
  { destination: 'Andaman & Nicobar', visit_percentage: 4 },
  { destination: 'Shimla', visit_percentage: 3 },
  { destination: 'Pondicherry', visit_percentage: 0 },
];
const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };
  
const Chart = () => {
  return (
    <>
    <div className="heading">
        Top Tour Places Visited in India
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="destination" style={{fontSize:'15px'}}/>
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        {data.map((entry, index) => (
            <ReferenceLine key={index} x={entry.destination} stroke="#ccc" strokeWidth={1} strokeDasharray="3 3" />
            ))}
        <Line type="monotone" dataKey="visit_percentage" stroke="#8884d8" />
      <Legend />
      </LineChart>
    </ResponsiveContainer>
            </>
  );
};

export default Chart;
