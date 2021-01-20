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
import Jello from 'react-reveal/Jello';
import logo from '../../images/logo_jenPlaza.png';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    //border: '1px solid red',
    float: 'left',
    margin: '0% 0% 5% -8%',
    width: '68%',
    [theme.breakpoints.up('sm')]: {
      margin: '0% 0% 0% -5%',
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '-13% 0% 0% 0%',
      width: '55%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '-5% 0% 0% 0%',
      width: '40%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '-1% 0% 0% 5%',
      width: '25%',
    },
  },
  navbar: {
    //border: '1px solid pink',
    height: '100px',
    marginTop: '12%',
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '10%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '7.5% 0% 0% 5%',
    },
  },
  navItem: {
    color: '#00d1be !important',
    fontSize: '2em !important',
    margin: '30% 35% 0% -30%',
    display: 'inline-block',
  },
  navItemContainer: {
    margin: '-22% 0% 0% -6%',
    //border: '1px solid green',
    width: '450px',
    fontSize: '1.5em',
    [theme.breakpoints.up('sm')]: {
      margin: '-10% 0% 0% 20%',
      width: '500px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '-40%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-32%',
    },
  },
  navbarBrand: {
    width: '80%',
    //border: '1px solid aqua',
    margin: '-10% 0% 0% -5%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  navLink: {
    color: '#00d1be',
  },
}));

//exporting a class footer
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const classes = useStyles();
  return (
    <div>
      <Navbar color="transparent" dark expand="md" className={classes.navbar}>
        <NavbarBrand className={classes.navbarBrand} href="/portfolio/">
          <Jello duration={25000} forever>
            <img
              className="w-75"
              //className={classes.img}
              src={logo}
              alt="Logo"
            />
          </Jello>
        </NavbarBrand>
        <NavbarToggler
          className="navbar-toggler ml-auto mr-5"
          onClick={toggle}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto">
            <div className={classes.navItemContainer}>
              {/* HOME */}
              <NavItem className={classes.navItem}>
                <Link className={classes.navLink} to="/portfolio/">
                  Home
                </Link>
              </NavItem>
              {/* ABOUT */}
              <NavItem className={classes.navItem}>
                <Link className={classes.navLink} to="/portfolio/aboutme">
                  About
                </Link>
              </NavItem>
              {/* BLOG */}
              <NavItem className={classes.navItem}>
                <Link className={classes.navLink} to="/portfolio/blog/">
                  Blog
                </Link>
              </NavItem>
              {/* RESUME */}
              <NavItem className={classes.navItem}>
                <Link
                  className={classes.navLink}
                  to="https://jenplaza.github.io/jennplaza-resume/"
                >
                  Resume
                </Link>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
