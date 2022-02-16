import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, Tooltip } from 'recharts';

export function Chart({ data }){

  const myArr = Object.getOwnPropertyNames(data.comAporte).map(item =>{
    return {
      name: item,
      comAporte: data.comAporte[item],
      semAporte: data.semAporte[item]
    }
  })
  
  return (
    <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <BarChart
      data={myArr} 
      margin={{
        top: 40,
        right: 0,
        left: 0,
        bottom: 0,
      }}>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Bar dataKey="semAporte" name="Sem Aporte" stackId="a" fill="#000" maxBarSize={25}/>
        <Bar dataKey="comAporte" name="Com Aporte" stackId="a" fill="#ED8E53" maxBarSize={25}/>
        <Legend />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}