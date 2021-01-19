// JavaScript Document
import React from 'react';
import Pulse from 'react-reveal/Pulse';

//images
import logoButton from '../../images/logo_JPbtn.png';

//Material UI
import { makeStyles, Grid, Link } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Youtube from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //border: '1px solid pink',
    fontSize: '2.5em',
  },
  logob: {
    width: '65%',
    [theme.breakpoints.up('sm')]: {
      width: '55%',
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
    fontSize: '0.6em',
    //border: '1px solid aqua',
    marginTop: '3%%',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1em',
      margin: '0%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0% 0% 0% -9%',
      fontSize: '0.75em',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0% 0% 0% -9%',
      fontSize: '0.6em',
    },
  },
  a: {
    color: '#00d1be',
    textDecoration: 'none',
    fontSize: '1.2em',
    paddingRight: '1%',
  },
  iconsContainer: {
    marginTop: '5%',
    //border: '1px solid white',
    width: '90%',
    [theme.breakpoints.up('md')]: {
      margin: '-1% 0% 0% 4%',
    },
  },
  icons: {
    transform: 'scale(2)',
  },
  socialContainer: {
    marginTop: '2%',
    [theme.breakpoints.up('md')]: {
      margin: '-1% 0% 0% 4%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-3%',
    },
  },
  socialMedia: {
    display: 'inline-block',
    transform: 'scale(3)',
    margin: '10% 3% 5% 15%',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      transform: 'scale(3.5)',
    },
    [theme.breakpoints.up('md')]: {
      transform: 'scale(3)',
      display: 'block',
      marginTop: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      marginTop: '65%',
      transform: 'scale(2.2)',
    },
    [theme.breakpoints.up('xl')]: {
      display: 'block',
      marginTop: '50%',
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
          <a href="https://jenplaza.github.io/jennplaza/">
            <img src={logoButton} alt="Logo Button" className={classes.logob} />
          </a>
        </Grid>

        {/*  ABOUT */}
        <Grid item xs={12} md={9} className={classes.about}>
          <p>
            <Link
              className={classes.a}
              /* href="https://jenplaza.github.io/jennplaza-aboutme/"
               */
              //href="/jennplaza/about/"
              href="/jennplaza/about/"
            >
              Jenn Plaza's
            </Link>
            devotion to see products or services come to life is what drives her
            dedication to each project she begins. With joyfulness and optimism,
            she is....
          </p>
          <Grid container spacing={3} className={classes.iconsContainer}>
            <Grid item xs={1}>
              <PhoneIcon className={classes.icons} />
            </Grid>
            <Grid item xs={11}>
              <p>(407) 535.0537</p>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.iconsContainer}>
            <Grid item xs={1}>
              <HomeIcon className={classes.icons} />
            </Grid>
            <Grid item xs={11}>
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
