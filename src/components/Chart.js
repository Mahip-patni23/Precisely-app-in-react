import React from 'react'
import './Chart.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({title, data, dataKey, grid}) {

    return (
        <div className="chart">
            <h5 className="chart_title">{title}</h5>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name" stroke="black"></XAxis>
                    <YAxis stroke="black"></YAxis>
                    <Bar type="monotone" dataKey={dataKey} stroke="black"></Bar>
                    <Tooltip></Tooltip>
                    {grid && <CartesianGrid stroke="grey" strokeDasharray="5 5"></CartesianGrid>}
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart