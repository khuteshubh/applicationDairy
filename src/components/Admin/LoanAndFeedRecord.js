import React, { useState } from 'react';

export default function CattleFeedManagement() {
  const [feedRecords, setFeedRecords] = useState([
    {
      farmerId: 'F001',
      farmerName: 'John Doe',
      date: '01/12/2024',
      feedType: 'Green Fodder',
      quantity: 100,
      unitPrice: 15,
      totalCost: 1500,
      amountPaid: 1000,
      amountLeft: 500,
      dueDate: '05/12/2024',
      supplier: 'ABC Feeds',
      remarks: 'Delivered',
    },
    {
      farmerId: 'F002',
      farmerName: 'Jane Smith',
      date: '02/12/2024',
      feedType: 'Dry Fodder',
      quantity: 50,
      unitPrice: 20,
      totalCost: 1000,
      amountPaid: 500,
      amountLeft: 500,
      dueDate: '06/12/2024',
      supplier: 'XYZ Feeds',
      remarks: 'Pending',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  
  const filteredRecords = feedRecords.filter(
    (record) =>
      record.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.farmerId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Cattle Feed Management</h1>
      
    
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by Farmer Name or ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '8px', width: '300px' }}
        />
      </div>

     
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Farmer ID</th>
            <th>Farmer Name</th>
            <th>Date</th>
            <th>Feed Type</th>
            <th>Quantity (kg)</th>
            <th>Unit Price (₹)</th>
            <th>Total Cost (₹)</th>
            <th>Amount Paid (₹)</th>
            <th>Amount Left (₹)</th>
            <th>Payment Due Date</th>
            <th>Supplier</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {feedRecords.map((record, index) => {
           
            const isHighlighted =
              record.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              record.farmerId.toLowerCase().includes(searchQuery.toLowerCase());

            return (
              <tr
                key={index}
                style={{
                  backgroundColor: isHighlighted ? 'yellow' : 'white',
                  fontWeight: isHighlighted ? 'bold' : 'normal',
                }}
              >
                <td>{record.farmerId}</td>
                <td>{record.farmerName}</td>
                <td>{record.date}</td>
                <td>{record.feedType}</td>
                <td>{record.quantity}</td>
                <td>{record.unitPrice}</td>
                <td>{record.totalCost}</td>
                <td>{record.amountPaid}</td>
                <td>{record.amountLeft}</td>
                <td>{record.dueDate}</td>
                <td>{record.supplier}</td>
                <td>{record.remarks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
