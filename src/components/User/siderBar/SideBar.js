import React from 'react'
import "./SideBar.css";
import { Link, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BuyAndSellCattle from '../BuyAndSellCattle';

export default function SideBar() {
    return (
        <>
            {/* <div>SideBar</div> */}
            <div className='sideBar'>
                <ul className="sidebarList">
                    
                    <li>
                        <Link to="/userdash/Dashboard" className="title">
                            <span>
                                <DashboardIcon />
                            </span>
                            <span className="title">Dashboard</span>
                        </Link>
                        
                    </li>

                    <li>
                        <Link to="/userdash/buyandsell" className="title">
                            <span>
                                {/* <BuyAndSellCattle /> */}
                            </span>
                            <span className="title">Cattel Listing</span>
                        </Link>
                    </li>


                </ul>

            </div>



        </>

    )
}
