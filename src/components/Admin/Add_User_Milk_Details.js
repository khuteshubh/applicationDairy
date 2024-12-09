import React, { useState } from 'react'

export default function Add_User_Milk_Details() {
    const [userData, setUserData] = useState([]);
    const [formData, setFormData] = useState({
      date: "",
      cattle: "cow",
      id: "",
      name: "",
      litre: 0,
      pricePerLitre: 0,
      totalAmount: 0,
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Add the new data to the state
      setUserData((prevData) => [
        ...prevData,
        {
          ...formData,
          litre: parseFloat(formData.litre),
          pricePerLitre: parseFloat(formData.pricePerLitre),
          totalAmount:
            parseFloat(formData.litre) * parseFloat(formData.pricePerLitre),
        },
      ]);
  
      // Clear the form
      setFormData({
        date: "",
        cattle: "cow",
        id: "",
        name: "",
        litre: 0,
        pricePerLitre: 0,
        totalAmount: 0,
      });
    };
  
    return (
      <>
        
        <div className="container2">
          <div className="row">
            <div className="col-xl-3 data">
              <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
                <br />
                <label htmlFor="cattle">Cattle</label>
                <select
                  id="cattle_type"
                  name="cattle"
                  value={formData.cattle}
                  onChange={handleInputChange}
                  required
                >
                  <option value="cow">Cow</option>
                  <option value="buffalo">Buffalo</option>
                </select>{" "}
                <br />
                <label htmlFor="id">Id No:</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                />
                <br />
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />{" "}
                <br />
                <label htmlFor="litre">Litre:</label>
                <input
                  type="number"
                  name="litre"
                  value={formData.litre}
                  onChange={handleInputChange}
                />{" "}
                <br />
                <label htmlFor="pricePerLitre">P/Lit</label>
                <input
                  type="number"
                  name="pricePerLitre"
                  value={formData.pricePerLitre}
                  onChange={handleInputChange}
                />{" "}
                <br />
                <label htmlFor="totalAmount">Tamt</label>
                <input
                  type="number"
                  name="totalAmount"
                  value={formData.totalAmount}
                  readOnly
                />{" "}
                <br />
                <button type="submit">Save</button>
              </form>
            </div>
              <div className="col-xl-9 show">
                  <table className="table">
                  <thead>
                      <tr>
                      <th>Date</th>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Cattle</th>
                      <th>Litre</th>
                      <th>P/Lit</th>
                      <th>Total Amount</th>
                      </tr>
                  </thead>
                  <tbody>
                      {userData.map((data, index) => (
                      <tr key={index}>
                          <td>{data.date}</td>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.cattle}</td>
                          <td>{data.litre}</td>
                          <td>{data.pricePerLitre}</td>
                          <td>{data.totalAmount}</td>
                      </tr>
                      ))}
                  </tbody>
                  </table>
              </div>
          </div>
        </div>
      </>
    );
}



//   return (
//     <>
//       <nav class="navbar navbar-expand-lg bg-body-tertiary">
//         <div class="container-fluid">
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <form class="d-flex" role="search">
//               <input
//                 class="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button class="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//       <div className="container2">
//         <div className="row">
//           <div className="col-xl-3 data">
//             <form action="">
//               <label htmlFor="">Date</label>
//               <input type="date" name="" id="" />
//               <br />
//               <label htmlFor="">Cattle</label>
//               <select id="cattle_type" name="cattle_type" required>
//                 <option value="cow">Cow</option>
//                 <option value="buffalo">Buffalo</option>
//               </select>{" "}
//               <br />
//               <label htmlFor="">Id No:</label>
//               <input type="text" />
//               <br />
//               <label htmlFor="">Name:</label>
//               <input type="" className="name" /> <br />
//               <label htmlFor="">Litre:</label>
//               <input type="number" /> <br />
//               <label htmlFor="">P/Lit</label>
//               <input type="number" name="" id="" /> <br />
//               <label htmlFor="">Tamt</label>
//               <input type="number" name="" id="" /> <br />
//               <button type="submit">Save</button>
//             </form>
//           </div>
//           <div className="col-xl-9 show"></div>
//         </div>
//       </div>
//     </>
//   );
// }