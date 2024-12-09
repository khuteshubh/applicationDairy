import React from 'react';

export default function FarmerRecord() {
  return (
    <div>
      <h1>Farmer Milk Record</h1>
      <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name of the Milk Producer</th>
            <th>Milk Received at the Cooperative (liters/kilograms)</th>
            <th>Rate (in Rupees)</th>
            <th>Milk Bill Amount (in Rupees)</th>
            <th>Amount Retained (in Rupees)</th>
            <th>Feed Deduction Amount (in Rupees)</th>
            <th>Final Amount</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>Sample Name</td>
            <td>25 L</td>
            <td>40</td>
            <td>1000</td>
            <td>200</td>
            <td>150</td>
            <td>5000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
