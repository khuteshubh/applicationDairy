
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

import "./NavigationBar.css";
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar = () => {
    const handleLogout = () => {
        // Logic for logout (e.g., clearing tokens, redirecting to login page)
        alert('Logged out successfully!');
    };

    const navigate = useNavigate();

    const selectionRoute = (route) => {
        if (route) {
            navigate(route);
        }
    };

    return (
        
        <Navbar variant="dark" expand="lg">
              <div className="Nav_container">
                <Navbar.Brand href="/buyandsell">Dairy Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                  <Nav className="ms-auto">
                    <NavDropdown title="Profile" id="profile-dropdown" align="end">
                      <NavDropdown.Item href="/userdash/myProfile">
                        My Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/userdash/settings">
                        Settings
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <Button className="w-100" onClick={handleLogout}>
                        Logout
                      </Button>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
        
    );
};

export default NavigationBar;

