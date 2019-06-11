import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Sitebar = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                Home
            </NavbarBrand>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/day-one" className="site-link">Day One</Link>
                </NavItem>
                <NavItem>
                    <Link to="/day-two" className="site-link">Day Two</Link>
                </NavItem>
                <NavItem>
                    <Link to="/day-three" className="site-link">Day Three</Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Sitebar;