// JavaScript Document
import React from 'react';
import { Link } from 'react-router-dom';
import { Bounce, Rotate } from 'react-reveal';

//Material UI
import { makeStyles, Grid } from '@material-ui/core';

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid pink',
    flexGrow: 1,
    overflow: 'hidden',
    fontSize: '1em',
    color: '#00d1be',
    fontFamily: 'lato',
    width: '90%',
    marginTop: '5%',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-8%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '-8%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '0%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '9%',
    },
  },
  container: {
    [theme.breakpoints.up('md')]: {
      width: '180%',
    },
  },
  h1: {
    fontSize: '1.75em',
    color: 'white',
    fontFamily: 'Montseratt',
    marginBottom: '3%',
    [theme.breakpoints.up('xl')]: {
      marginBottom: '2%',
    },
  },
  about: {
    //border: '1px solid orange',
    fontSize: '1.4em',
    color: '#e2b575',
    //color: 'turquoise',
    marginTop: '15%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '15%',
    },
    [theme.breakpoints.up('md')]: {
      //fontSize: '2.50em',
      marginTop: '0%',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2em',
      backgroundColor: 'rgba(24, 8, 0, 0.2)',
      marginTop: '12%',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.2em',
      backgroundColor: 'rgba(24, 8, 0, 0.2)',
      marginTop: '15%',
    },
  },
  button: {
    fontSize: '0.85em',
    textAlign: 'center',
    color: '#0A0300',
    float: 'left',
    padding: '5px 10px 5px 10px',
    marginTop: '5%',
    display: 'block',
    height: '125px',
    width: '125px',
    borderRadius: '50%',
    background: 'turquoise',
    transition: '1s ease-in-out',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2em',
    },
    [theme.breakpoints.up('lg')]: {
      height: '217px',
      width: '217px',
      marginTop: '8%',
      fontSize: '1em',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '10%',
      //fontSize: '0.75em',
    },
    '&:hover': {
      background: 'transparent',
      transform: 'rotate(360deg) scale(1)',
      border: '3px solid turquoise',
      color: '#e2b575',
      textDecoration: 'none',
      [theme.breakpoints.up('md')]: {
        color: '#0A0300',
      },
      [theme.breakpoints.up('lg')]: {
        color: '#e2b575',
        fontSize: '0.9em',
      },
    },
  },
  btnText: {
    paddingTop: '35%',
    fontWeight: 'bold',
    fontSize: '1.2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.7em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1em',
    },
  },
}));

//exporting a class footer
export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} md={7} className={classes.about}>
          <h1 className={classes.h1}>Jenn Plaza</h1>
          <p>
            A new graduate in Web Design and Development, Jenn's objective is to
            find a professional environment where she can diversify and improve
            upon the skills gained during the time at Full Sail University. She
            is eager to contribute to a culture that has a mission that will be
            rewarding both mentally and financially.
          </p>

          <Grid item xs={12} sm={8} md={8} lg={4}>
            <Bounce top>
              <Link
                className={classes.button}
                to="/portfolio/aboutme"
                value="About Me"
              >
                <Rotate count={10} duration={10000}>
                  <p className={classes.btnText}>About Me</p>
                </Rotate>
              </Link>
            </Bounce>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
