// JavaScript Document
import React from 'react';
import { Link } from 'react-router-dom';
import Pulse from 'react-reveal/Pulse';

//images
import logoButton from '../../images/logo_JPbtn.png';

//Material UI
import { makeStyles, Grid } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Youtube from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid pink',
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '2%',
  },
  logob: {
    width: '65%',
    [theme.breakpoints.up('sm')]: {
      width: '45%',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
      marginLeft: '10%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%',
      marginLeft: '20%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '15%',
      marginLeft: '25%',
    },
  },
  about: {
    //border: '1px solid aqua',
    marginTop: '3%%',
    [theme.breakpoints.up('md')]: {
      margin: '0% 0% 0% -9%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0% 0% 0% -9%',
    },
  },
  a: {
    color: '#00d1be',
    textDecoration: 'none',
    fontSize: '1.2em',
    paddingRight: '1%',
  },
  iconsContainer: {
    //border: '1px solid white',
    marginTop: '3%',
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '1%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0% 0% 0% 4%',
    },
  },
  icons: {
    transform: 'scale(1.2)',
  },
  socialContainer: {
    marginTop: '2%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-2%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '-4% 0% 0% 4%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-3%',
    },
  },
  socialMedia: {
    display: 'inline-block',
    transform: 'scale(1.4)',
    margin: '3% 3% 10% 15%',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.up('md')]: {
      transform: 'scale(1.6)',
      display: 'block',
      marginTop: '70%',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      marginTop: '45%',
    },
    [theme.breakpoints.up('xl')]: {
      display: 'block',
      marginTop: '30%',
    },
  },
}));

//exporting a class footer
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.whiteSpace}></Grid>
        {/*  LOGO */}

        <Grid item xs={3} md={2}>
          <a href="/portfolio/">
            <img src={logoButton} alt="Logo Button" className={classes.logob} />
          </a>
        </Grid>

        {/*  ABOUT */}
        <Grid item xs={12} md={9} className={classes.about}>
          <p>
            <Link className={classes.a} to="/portfolio/aboutme/">
              Jenn Plaza's
            </Link>
            devotion to see products or services come to life is what drives her
            dedication to each project she begins. With joyfulness and optimism,
            she is....
          </p>
          <Grid container spacing={1} className={classes.iconsContainer}>
            <Grid item xs={2} sm={1}>
              <PhoneIcon className={classes.icons} />
            </Grid>
            <Grid item xs={10}>
              <p>(407) 535.0537</p>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.iconsContainer}>
            <Grid item xs={2} sm={1}>
              <HomeIcon className={classes.icons} />
            </Grid>
            <Grid item xs={10}>
              <address>442 Harbor Point Blvd, Orlando Fl. 32835</address>
            </Grid>
          </Grid>
        </Grid>

        {/*  SOCIAL */}
        <Grid item xs={12} md={1} className={classes.socialContainer}>
          <Pulse duration={2000} forever>
            <div>
              <Link
                color="inherit"
                href="https://github.com/jenPlaza"
                target="_blank"
              >
                <GitHub className={classes.socialMedia} />
              </Link>
              <Link
                color="inherit"
                href="https://www.linkedin.com/in/jennifer-plaza-7a516a24/"
                target="_blank"
              >
                <LinkedIn className={classes.socialMedia} />
              </Link>
              <Link
                color="inherit"
                href="https://www.youtube.com/channel/UCcdNksuPEwQ62VRNDxtwbzQ"
                target="_blank"
              >
                <Youtube className={classes.socialMedia} />
              </Link>
            </div>
          </Pulse>
        </Grid>
      </Grid>
    </div>
  );
}
