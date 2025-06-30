import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid
} from 'recharts';

import { FaInfoCircle, FaNetworkWired, FaShieldAlt, FaCode } from 'react-icons/fa';
import { BsSignal } from "react-icons/bs";
import { RiFolderSettingsFill, RiBaseStationLine } from "react-icons/ri";

const userData = [
  { type: 'Мэдээлэл технологийн тасаг', count: 25, icon: <FaInfoCircle size={30} /> },
  { type: 'Холбооны тасаг', count: 35, icon: <FaNetworkWired size={30} /> },
  { type: 'Кибер аюулгүй байдлын тасаг', count: 20, icon: <FaShieldAlt size={30} /> },
  { type: 'Программ хангамжийн тасаг', count: 9, icon: <FaCode size={30} /> },
  { type: 'Дохиолол хяналтын тасаг', count: 13, icon: <BsSignal size={30} /> },
  { type: 'Засварын тасаг', count: 4, icon: <RiFolderSettingsFill size={30} /> },
  { type: 'Суурийн зангилаа', count: 4, icon: <RiBaseStationLine size={30} /> },
];

const genderData = [
  { name: 'Male', value: 60 },
  { name: 'Female', value: 40 },
];

const lineData = [
  { month: 'Jan', users: 30 },
  { month: 'Feb', users: 45 },
  { month: 'Mar', users: 60 },
  { month: 'Apr', users: 55 },
  { month: 'May', users: 70 },
  { month: 'Jun', users: 75 },
];

const GENDER_COLORS = ['#8884d8', '#82ca9d'];
const USER_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC', '#FF4444', '#00BFA5'];

export default function Dashboard() {
  return (
    <div style={{ padding: 20, maxWidth: '100%', boxSizing: 'border-box' }}>
      <h2>Тасаг албад</h2>

      <div style={{
        display: 'flex',
        gap: 20,
        marginBottom: 40,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {userData.map(({ type, count, icon }, idx) => (
          <div
            key={type}
            className="hover-card"
            style={{
              border: `2px solid ${USER_COLORS[idx % USER_COLORS.length]}`,
              borderRadius: 10,
              padding: 20,
              width: 160,
              height: 140,
              textAlign: 'center',
              boxShadow: '0 0 8px rgba(0,0,0,0.1)',
              fontWeight: '600',
              cursor: 'pointer',
              backgroundColor: '#f9f9f9',
              color: USER_COLORS[idx % USER_COLORS.length],
              flexShrink: 0,
              transition: 'all 0.3s ease',
              transform: 'scale(1)',
            }}
          >
            <div style={{ marginBottom: 10 }}>{icon}</div>
            <div style={{ fontSize: 16 }}>{type}</div>
            <div style={{ fontSize: 24, marginTop: 8 }}>{count}</div>
          </div>
        ))}
      </div>

      <h2>Хүйсийн харьцаа ба Сарын хэрэглэгчдийн өсөлт</h2>
      <div style={{
        display: 'flex',
        gap: 40,
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
        <div style={{
          flex: '1 1 400px',
          height: 300,
          boxShadow: '0 0 8px rgba(0,0,0,0.1)',
          borderRadius: 10,
          backgroundColor: '#fff',
          padding: 10,
        }}>
          <PieChart width={400} height={300}>
            <Pie
              data={genderData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {genderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div style={{
          flex: '1 1 500px',
          height: 300,
          boxShadow: '0 0 8px rgba(0,0,0,0.1)',
          borderRadius: 10,
          backgroundColor: '#fff',
          padding: 10,
        }}>
          <LineChart
            width={500}
            height={300}
            data={lineData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
      </div>
      <style>
        {`
          .hover-card:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            z-index: 1;
          }
        `}
      </style>
    </div>
  );
}
