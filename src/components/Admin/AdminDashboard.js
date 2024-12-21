// import React from 'react';
// import  '../Admin/Dashboard.css';

// export default function AdminDashboard() {
//     return (
//         <div className="dashboard-page">
//             <aside className="dashboard-sidebar">
//                 <div className="dashboard-logo">HOTASH</div>
//                 <nav className="dashboard-menu">
//                     <ul>
//                         <li>Dashboard</li>
//                         <li>Products</li>
//                         <li>Orders</li>
//                         <li>Messages</li>
//                         <li>Notifications</li>
//                         <li>Settings</li>
//                     </ul>
//                 </nav>
//             </aside>
//             <main className="dashboard-main">
//                 <div className="dashboard-stats">
//                     <div className="stat-box green">Total Users: 277</div>
//                     <div className="stat-box pink">Last Month: 277</div>
//                     <div className="stat-box blue">Total Sales: $3,787,681</div>
//                 </div>
//                 <div className="best-selling">
//                     <h3>Best Selling Products</h3>
//                     <div className="product-filters">
//                         <select>
//                             <option>Show by</option>
//                         </select>
//                         <select>
//                             <option>Category</option>
//                         </select>
//                     </div>
//                     <table className="product-table">
//                         <thead>
//                             <tr>
//                                 <th>UID</th>
//                                 <th>Product</th>
//                                 <th>Category</th>
//                                 <th>Brand</th>
//                                 <th>Price</th>
//                                 <th>Stock</th>
//                                 <th>Rating</th>
//                                 <th>Order</th>
//                                 <th>Sales</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {Array.from({ length: 12 }).map((_, index) => (
//                                 <tr key={index}>
//                                     <td>#1</td>
//                                     <td>
//                                         <div className="product-info">
//                                             <img src="placeholder.jpg" alt="Product" />
//                                             <span>Tops and skirt set</span>
//                                         </div>
//                                     </td>
//                                     <td>Women</td>
//                                     <td>Richman</td>
//                                     <td>$21.00</td>
//                                     <td>380</td>
//                                     <td>⭐⭐⭐⭐⭐</td>
//                                     <td>120</td>
//                                     <td>$38k</td>
//                                     <td>
//                                         <button className="view-btn">View</button>
//                                         <button className="edit-btn">Edit</button>
//                                         <button className="delete-btn">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </main>
//         </div>
//     );
// }


import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function AdminDashboard() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
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
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
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
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default AdminDashboard