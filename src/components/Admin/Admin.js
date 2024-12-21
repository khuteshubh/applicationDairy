// import React from 'react'
// import AdminHeader from './AdminHeader'
// // import { Outlet } from 'react-router-dom'
// import "../Admin/Admin.css"
// // import { Link } from 'react-router-dom'

// export default function Admin() {
//   return (
//     <>
//     <AdminHeader/>
//     {/* <!-- Sidebar --> */}
  
//     </>
//   )
// }



import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../Footer";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";  // Import Sidebar

export default function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="admin-container d-flex">
      {/* Sidebar */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      
      {/* Main content area */}
      <div className="main-content flex-grow-1">
        <AdminHeader OpenSidebar={OpenSidebar} />
        
        {/* Page content from Outlet */}
        <Outlet />
        
        {/* <Footer /> */}
      </div>
    </div>
  );
}