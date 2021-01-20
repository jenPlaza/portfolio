import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import logo from '../images/green-handprint-md.png';

//exporting a class footer
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="transparent" dark expand="md">
        <NavbarBrand href="/portfolio/">
          <img className="w-25" src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler
          className="navbar-toggler ml-auto mr-5"
          onClick={toggle}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto">
            <div>
              {/* HOME */}
              <NavItem>
                <Link to="/portfolio/">Home</Link>
              </NavItem>

              {/* ABOUT */}
              <NavItem>
                <Link to="/portfolio/aboutme">About</Link>
              </NavItem>

              {/* BLOG */}
              <NavItem>
                <Link to="/portfolio/blog">Blog</Link>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
