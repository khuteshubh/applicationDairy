import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import "../User/CusHeader.css";
export default function CusHeader() {
    const handleLogout = () => {
        // Logic for logout (e.g., clearing tokens, redirecting to login page)
        alert('Logged out successfully!');
    };
  return (
    <Navbar  variant="dark" expand="lg">
            <div className="Nav_container">
                <Navbar.Brand href="/">Dairy Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Profile" id="profile-dropdown" align="end">
                            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <Button
                                
                                className="w-100"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
  )
}
