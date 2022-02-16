import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

export function Chart({ data }){

  let myArr = [];

  const test = Object.keys(data).forEach((item) => {
    Object.keys(data[item]).forEach((values) => {
      myArr = [...myArr, {
        name: values,
        comAporte: data.comAporte[values],
        semAporte: data.semAporte[values],
      }]
    })
  })

  console.log(myArr)
  
  // Sample data
  const dataTest = [
    { name: '0', comAporte: 1000, semAporte: 1000 },
    { name: '1', comAporte: 1103.2737397822002, semAporte: 1003.273739782199 },
    { name: '2', comAporte: 1206.8855709147763, semAporte: 1006.5581969365594 },
    { name: '3', comAporte: 1310.8366002208454, semAporte: 1009.853406548969 },
    { name: '4', comAporte: 1415.1279381469494, semAporte: 1013.1594038201774 },
    { name: '5', comAporte: 1519.7606987749612, semAporte: 1016.4762240661724 },
    { name: '6', comAporte: 1624.7359998339643, semAporte: 1019.8039027185573 },
    { name: '7', comAporte: 1730.0549627121918, semAporte: 1023.1424753249288 },
    { name: '8', comAporte: 1835.7187124690122, semAporte: 1026.4919775492574 },
    { name: '9', comAporte: 1941.7283778469462, semAporte: 1029.8524451722683 },
    { name: '10', comAporte: 2048.0850912837323, semAporte: 1033.2239140918239 },
  ];
  return (
    <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
      <BarChart
      data={dataTest} 
      margin={{
        top: 40,
        right: 0,
        left: 0,
        bottom: 0,
      }}>
        <XAxis dataKey="name"/>
        <YAxis />
        <Bar dataKey="semAporte" stackId="a" fill="#000" maxBarSize={25}/>
        <Bar dataKey="comAporte" stackId="a" fill="#ED8E53" maxBarSize={25}/>
        <Legend/>
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}