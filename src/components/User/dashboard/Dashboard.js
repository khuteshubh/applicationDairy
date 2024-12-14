import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="container mt-4">
            <div className="row">
                
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-header bg-primary text-white">
                            <h5>Key Information</h5>
                        </div>
                        <div className="card-body">
                            <h6>Recent Invoices</h6>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">Invoice #12345 - 500 - Paid</li>
                                <li className="list-group-item">Invoice #12346 - 300 - Due</li>
                            </ul>
                            <h6>Recent Payments</h6>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">Payment P5678 - 500 - Success</li>
                                <li className="list-group-item">Payment P5679 - 200 - Pending</li>
                            </ul>
                            <h6>Upcoming Milk Schedules</h6>
                            <ul className="list-group">
                                <li className="list-group-item">Dec 7, 2024 - 6:00 AM - Milk Collection</li>
                                <li className="list-group-item">Dec 8, 2024 - 6:00 AM - Milk Collection</li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-warning text-dark">
                            <h5>Notifications</h5>
                        </div>
                        <div className="card-body">
                            <h6>Due Payments</h6>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">Invoice  - 300 - Due Dec 10</li>
                            </ul>
                            <h6>Upcoming Collections</h6>
                            <ul className="list-group">
                                <li className="list-group-item">Dec 7, 2024 - 6:00 AM - Milk Collection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
