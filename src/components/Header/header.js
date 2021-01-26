import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

/* platform sizes
xs = 375 px,
  sm = 768 px,
  md = 992 px,
  lg = 1500 px,
  xl = 2000 px, */

const useStyles = makeStyles((theme) => ({
  img: {
    //border: '1px solid red',
    float: 'left',
    margin: '12% 0% 5% 0%',
    width: '75%',
    [theme.breakpoints.up('sm')]: {
      margin: '28% 0% 0% 0%',
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '25% 0% 0% 0%',
      width: '55%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '18% 0% 0% 5%',
      width: '25%',
    },
  },
  navbar: {
    //border: '1px solid pink',
    paddingLeft: '5%',
    height: '165px',
    marginTop: '0%',
    width: '95%',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      height: '135px',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0% 0% 0% 0%',
      height: '200px',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '0% 0% 0% 0%',
      height: '220px',
    },
  },
  navItem: {
    color: '#00d1be !important',
    fontSize: '1em !important',
    padding: '1%',
    margin: '19% 4% 0% -1%',
    display: 'inline-block',
    [theme.breakpoints.up('sm')]: {
      marginTop: '11%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '55%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '62%',
    },
  },
  navItemContainer: {
    margin: '-22% 0% 0% 0%',
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
      <nav
        style={{
          background:
            useLocation().pathname === '/blog' ? 'transparent' : 'black',
        }}
      >
        <Navbar
          color="transparent"
          dark
          expand="md"
          className={classes.navbar}
          /* style={{
        navbarTogglerIcon:
          useLocation().pathname === '/blog' ? 'navbar-light' : 'navbar-dark', 
      }}*/
        >
          <NavbarBrand className={classes.navbarBrand} href="/portfolio/">
            <Jello duration={25000} forever>
              <img className={classes.img} src={logo} alt="Logo" />
            </Jello>
          </NavbarBrand>
          <NavbarToggler
            className="navbar-toggler ml-auto"
            onClick={toggle}
            //style={{color:useLocation().pathname === '/blog' ? 'transparent' : 'bg-light',}}
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
                  <a
                    className={classes.navLink}
                    href="resume_2021.pdf"
                    download
                  >
                    Resume
                  </a>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
    </div>
  );
};

export default Header;
