import React from 'react'
import { BsCarFront, BsCarFrontFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Repas from './Repas';
import Users from './Users';

export default function Dasboard() {

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: 'Page C',
        uv: 4000,
        pv: 2400,
        amt: 2400
    }, {
        name: 'Page D',
        uv: 1890,
        pv: 4800,
        amt: 2500
    },

    {
        name: 'Page E',
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: 'Page G',
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: 'Page H',
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: 'Page I',
        uv: 4400,
        pv: 2100,
        amt: 1400
    },
    {
        name: 'Page J',
        uv: 2000,
        pv: 1400,
        amt: 1000
    },
    {
        name: 'Page K',
        uv: 4500,
        pv: 1300,
        amt: 1100
    },
    {
        name: 'Page L',
        uv: 4400,
        pv: 2100,
        amt: 1400
    },
    {
        name: 'Page M',
        uv: 2000,
        pv: 1400,
        amt: 1000
    },
    {
        name: 'Page H',
        uv: 4500,
        pv: 1300,
        amt: 1100
    },
]
const datas = Array.from({ length: 10 }, (_, rowIndex) =>
Array.from({ length: 6 }, (_, colIndex) => `${rowIndex + 1}-${colIndex + 1}`)
);

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Dashbord</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3> Utilisateurs</h3>
                    <BsFillArchiveFill className='card_icon' />
                </div>
                <h1>106</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Destinations</h3>
                    <BsFillGrid3X3GapFill className='card_icon' />
                </div>
                <h1>34</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Utilisateurs</h3>
                    <BsPeopleFill className='card_icon' />
                </div>
                <h1>1509</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3> Transactions</h3>
                    <BsFillBellFill className='card_icon' />
                </div>
                <h1>1703</h1>
            </div>
        </div>
        
        
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8"/>
                    <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r : 8 }}/>
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
                </LineChart>
            </ResponsiveContainer>
        </div>

        <div className='user-Card'> 
          <Users />
          <Repas />
        </div>
    </main>
  )
}
