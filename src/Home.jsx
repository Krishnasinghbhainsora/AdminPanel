import React from 'react'
import 
{ BsListCheck, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

function Home() {
const data =[
  {
    name: 'Python',
    students: 2000,
    fees: 5000
  },
  {
    name: 'JavaScript',
    students: 2000,
    fees: 8000
  },
  {
    name: 'PHP',
    students: 1000,
    fees: 5000
  },
  {
    name: 'Java',
    students: 6000,
    fees: 10000
  },
  {
    name: 'C#',
    students: 1000,
    fees: 8000
  },
  {
    name: 'C++',
    students: 1500,
    fees: 8000
  },];

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                   
                   
                    
                </div>
                <h1>20000+</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>FEES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>Courses Based</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>STUDENTS PLACEMENT</h3>
                    <BsListCheck className='card_icon'/>

                </div>
                <h1>15000+</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>STUDENTS REPORT</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>450+</h1>
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
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students"  fill="#FFA755" />
                <Bar dataKey="fees" fill="#76E674" />
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
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip  />
                <Legend />
                <Line type="monotone" dataKey="students" stroke="#FFA755" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="fees" stroke="#76E674" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home