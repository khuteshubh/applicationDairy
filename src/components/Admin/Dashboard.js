import React from 'react';
import  '../Admin/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <aside className="dashboard-sidebar">
                <div className="dashboard-logo">HOTASH</div>
                <nav className="dashboard-menu">
                    <ul>
                        <li>Dashboard</li>
                        <li>Products</li>
                        <li>Orders</li>
                        <li>Messages</li>
                        <li>Notifications</li>
                        <li>Settings</li>
                    </ul>
                </nav>
            </aside>
            <main className="dashboard-main">
                <div className="dashboard-stats">
                    <div className="stat-box green">Total Users: 277</div>
                    <div className="stat-box pink">Last Month: 277</div>
                    <div className="stat-box blue">Total Sales: $3,787,681</div>
                </div>
                <div className="best-selling">
                    <h3>Best Selling Products</h3>
                    <div className="product-filters">
                        <select>
                            <option>Show by</option>
                        </select>
                        <select>
                            <option>Category</option>
                        </select>
                    </div>
                    <table className="product-table">
                        <thead>
                            <tr>
                                <th>UID</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Rating</th>
                                <th>Order</th>
                                <th>Sales</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <tr key={index}>
                                    <td>#1</td>
                                    <td>
                                        <div className="product-info">
                                            <img src="placeholder.jpg" alt="Product" />
                                            <span>Tops and skirt set</span>
                                        </div>
                                    </td>
                                    <td>Women</td>
                                    <td>Richman</td>
                                    <td>$21.00</td>
                                    <td>380</td>
                                    <td>⭐⭐⭐⭐⭐</td>
                                    <td>120</td>
                                    <td>$38k</td>
                                    <td>
                                        <button className="view-btn">View</button>
                                        <button className="edit-btn">Edit</button>
                                        <button className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
