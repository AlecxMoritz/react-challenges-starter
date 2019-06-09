import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Sitebar = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand>
                <Link to="/" className="site-link">Home</Link>
            </NavbarBrand>
            <Nav className="ml-auto">
                <NavItem>
                    <NavLink>
                        <Link to="/day-one" className="site-link">Day One</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/day-two" className="site-link">Day Two</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/day-three" className="site-link">Day Three</Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Sitebar;