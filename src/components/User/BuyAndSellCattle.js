import React, { useState } from 'react'

export default function BuyAndSellCattle() {
    const [formData, setFormData] = useState({
        sellerName: "",
        mobileNo: "",
        district: "",
        village: "",
        price: "",
        breed: "",
        image: null,
      });
    
      const [cattleList, setCattleList] = useState([]);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.image) {
          alert("Please upload an image of the cattle.");
          return;
        }
    
        setCattleList([...cattleList, formData]);
        setFormData({
          sellerName: "",
          mobileNo: "",
          district: "",
          village: "",
          price: "",
          breed: "",
          image: null,
        });
      };
    
      return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
          <h1>Sell Your Cattle</h1>
    
          {/* Form Section */}
          <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <div>
              <label>Seller Name:</label>
              <input
                type="text"
                name="sellerName"
                value={formData.sellerName}
                onChange={handleInputChange}
                required
                style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
              />
            </div>
    
            <div>
              <label>Mobile Number:</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
                required
                style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
              />
            </div>

            <div>
              <label>Village:</label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleInputChange}
                required
                style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
              />
            </div>

            <div>
              <label>District:</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleInputChange}
                required
                style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
              />
            </div>
    
            <div>
              <label>Breed:</label>
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleInputChange}
                required
                style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
              />
            </div>
    
            <div>
              <label>Price (₹):</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
              />
            </div>
    
            <div>
                <label htmlFor="">Description:</label>
                <textarea name="" id=""
               style={{ width: "100%", marginBottom: "10px", padding: "5px" }} 
               ></textarea>
            </div>
    
            <div>
              <label>Upload Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
                style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
              />
            </div>
    
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add Cattle
            </button>
          </form>
    
          {/* Display Section */}
          {cattleList.length > 0 && (
            <div>
              <h2>Available Cattle</h2>
              <table
                border="1"
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                }}
              >
                <thead>
                  <tr>
                    <th>Seller Name</th>
                    <th>Mobile No</th>
                    <th>District</th>
                    <th>Village</th>
                    <th>Price (₹)</th>
                    <th>Breed</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {cattleList.map((cattle, index) => (
                    <tr key={index}>
                      <td>{cattle.sellerName}</td>
                      <td>{cattle.mobileNo}</td>
                      <td>{cattle.district}</td>
                      <td>{cattle.village}</td>
                      <td>{cattle.price}</td>
                      <td>{cattle.breed}</td>
                      <td>
                        <img
                          src={URL.createObjectURL(cattle.image)}
                          alt="Cattle"
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
    }
