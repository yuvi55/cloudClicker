"use client"

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PieCharts = (props:any) => {
    const colors = [
        "#8884d8",
        "#FA8072",
        "#AF69EE",
        "#3DED97",
        "#3AC7EB",
        "#F9A603",
      ];
      const data = props.data
    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
              <Pie
                data={data}
                dataKey="data.clicks"
                nameKey="id"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                label
              >
                {data.map((entry:any, index:any) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </>
      );
}

export default PieCharts