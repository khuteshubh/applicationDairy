import React, { useState } from "react";
import "./FarmerRecord.css";
import { useNavigate } from "react-router-dom"; // Correct import

export default function FarmerRecord() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedFarmer, setSelectedFarmer] = useState("");
  const [records, setRecords] = useState([
    {
      dateTime: "22/08/2024, 01:28:31 pm",
      shift: "evening",
      cattleType: "Cow",
      fat: 5,
      snf: 9,
      weight: 10,
      rate: 40,
      amount: 400,
    },
    {
      dateTime: "22/08/2024, 01:45:44 pm",
      shift: "evening",
      cattleType: "Buffalo",
      fat: 4.5,
      snf: 10,
      weight: 23,
      rate: 36,
      amount: 828,
    },
    {
      dateTime: "22/08/2024, 02:02:51 pm",
      shift: "evening",
      cattleType: "Cow",
      fat: 3.6,
      snf: 8,
      weight: 25,
      rate: 28.8,
      amount: 720,
    },
    {
      dateTime: "23/08/2024, 10:41:04 am",
      shift: "morning",
      cattleType: "Buffalo",
      fat: 8.9,
      snf: 9,
      weight: 5.5,
      rate: 71.2,
      amount: 391.6,
    },
    {
      dateTime: "23/08/2024, 12:00:06 pm",
      shift: "evening",
      cattleType: "Cow",
      fat: 5,
      snf: 9,
      weight: 5,
      rate: 60,
      amount: 300,
    },
  ]);

  const navigate = useNavigate(); // Correctly initialize useNavigate

  const handleGenerateReport = () => {
    navigate("/milkreport"); // Redirects to the MilkReport page
  };

  return (
    <div className="milk-record-container">
      {/* Filters */}
      <div className="filters">
        <label>
          Select start date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          Select end date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <label>
          Select a farmer:
          <select
            value={selectedFarmer}
            onChange={(e) => setSelectedFarmer(e.target.value)}
          >
            <option value="">Select Farmer</option>
            <option value="Pablo Pande">Pablo Pande</option>
            <option value="John Doe">John Doe</option>
          </select>
        </label>
        <button onClick={handleGenerateReport}>Generate Report</button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>SHIFT</th>
              <th>Cattle Type</th>
              <th>FAT</th>
              <th>SNF</th>
              <th>Weight/Li</th>
              <th>Rate/Li</th>
              <th>Amount/₹</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.dateTime}</td>
                <td>{record.shift}</td>
                <td>{record.cattleType}</td>
                <td>{record.fat}</td>
                <td>{record.snf}</td>
                <td>{record.weight}</td>
                <td>{record.rate}</td>
                <td>{record.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Stats */}
      <div className="footer-stats">
        <table>
          <thead>
            <tr>
              <th>Total & Avg</th>
              <th>Total Entries</th>
              <th>Avg FAT</th>
              <th>Avg SNF</th>
              <th>Avg Degree/%</th>
              <th>Total Milk/L</th>
              <th>Total Amount/₹</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Summary</td>
              <td>{records.length}</td>
              <td>
                {(
                  records.reduce((sum, record) => sum + record.fat, 0) /
                  records.length
                ).toFixed(2)}
              </td>
              <td>
                {(
                  records.reduce((sum, record) => sum + record.snf, 0) /
                  records.length
                ).toFixed(2)}
              </td>
              <td>--</td>
              <td>
                {records.reduce((sum, record) => sum + record.weight, 0)}
              </td>
              <td>
                {records.reduce((sum, record) => sum + record.amount, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}



// import React, { useEffect, useState } from "react";
// import "./FarmerRecord.css";

// const FarmerRecord = () => {
//   const [records, setRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredRecords, setFilteredRecords] = useState([]);

//   useEffect(() => {
//     const storedRecords = JSON.parse(localStorage.getItem("milkRecords")) || [];
//     setRecords(storedRecords);
//   }, []);

//   useEffect(() => {
//     if (searchTerm) {
//       const filtered = records.filter((record) =>
//         record.farmer.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredRecords(filtered);
//     } else {
//       setFilteredRecords(records);
//     }
//   }, [searchTerm, records]);

//   return (
//     <div className="milk-record-container">
//       <h2 className="text-center">Search Farmer Records</h2>

//       <div className="filters">
//         <label>
//           Search by Farmer Name:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Enter farmer name"
//           />
//         </label>
//       </div>

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Animal</th>
//               <th>Milk (Ltr)</th>
//               <th>Fat</th>
//               <th>SNF</th>
//               <th>Payment</th>
//               <th>Farmer</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.date}</td>
//                 <td>{record.time}</td>
//                 <td>{record.cattle}</td>
//                 <td>{record.litre}</td>
//                 <td>{record.fat}</td>
//                 <td>{record.snf}</td>
//                 <td>{record.totalAmount}</td>
//                 <td>{record.farmer}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default FarmerRecord;
