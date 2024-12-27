// import React from 'react'

// const AddMilkRecord = () => {
//   return (
//     <>
//     <div className="container1">
        
//           <div class="col-xl-8">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Animal</th>
//                   <th>Milk (Ltr)</th>
//                   <th>Payment</th>
//                   <th>Average Fat</th>
//                   <th>Member</th>
//                   <th>F7 Manual Liters</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Buffalo</td>
//                   <td>20.00</td>
//                   <td>280.00</td>
//                   <td>5.00</td>
//                   <td>1</td>
//                   <td>Manual Liters</td>
//                 </tr>
//                 <tr>
//                   <td>Cow</td>
//                   <td>0.00</td>
//                   <td>0.00</td>
//                   <td>0.00</td>
//                   <td>0</td>
//                   <td>Manual Fat</td>
//                 </tr>
//                 <tr>
//                   <td>Total</td>
//                   <td>20.00</td>
//                   <td>280.00</td>
//                   <td>5.00</td>
//                   <td>1</td>
//                   <td>Empty</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* <div class="footer-buttons">
//             <span>F5 Edit</span>
//             <span>F6 Print Slip</span>
//             <span>F10 Report Shift</span>
//             <span>F11 Local Sale</span>
//         </div> */}
//         </div>
//       </div>
//     </>
//   )
// }

// export default AddMilkRecord



import React, { useEffect, useState } from "react";
// import Add_Milk_Record from "./Add_Milk_Record";
import "./Add_Milk_Record.css";

const AddMilkRecord = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("milkRecords")) || [];
    setRecords(storedRecords);
  }, []);

  return (
    <div className="container1">
      <h2 className="text-center">Milk Records</h2>
      <div className="col-xl-8">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Animal</th>
              <th>Milk (Ltr)</th>
              <th>Fat</th>
              <th>SNF</th>
              <th>Payment</th>
              <th>Farmer</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.time}</td>
                <td>{record.cattle}</td>
                <td>{record.litre}</td>
                <td>{record.fat}</td>
                <td>{record.snf}</td>
                <td>{record.totalAmount}</td>
                <td>{record.farmer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddMilkRecord;