// JavaScript Document
import React from 'react';
import { Bounce, Rotate } from 'react-reveal';

//Material UI
import { makeStyles, Grid, Link } from '@material-ui/core';

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid pink',
    flexGrow: 1,
    color: '#00d1be',
    fontFamily: 'lato',
    width: '90%',
    marginTop: '20%',
    margin: 'auto',
    fontSize: '1em',
    [theme.breakpoints.up('sm')]: {
      marginTop: '6%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '8%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '8%',
    },
  },
  container: {
    [theme.breakpoints.up('md')]: {
      width: '180%',
    },
  },
  h1: {
    fontSize: '2.5em',
    color: 'white',
    fontFamily: 'grandstander',
    marginBottom: '3%',
    [theme.breakpoints.up('xl')]: {
      marginBottom: '3.5%',
    },
  },
  about: {
    //border: '1px solid orange',
    fontSize: '2.2em',
    color: '#e2b575',
    //color: 'turquoise',
    marginTop: '15%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '17%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.50em',
      marginTop: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.50em',
      marginTop: '3%',
    },
  },
  button: {
    position: 'absolute',
    fontSize: '0.8em',
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
    [theme.breakpoints.up('lg')]: {
      height: '175px',
      width: '175px',
      marginTop: '2%',
    },
    '&:hover': {
      background: 'transparent',
      transform: 'rotate(360deg) scale(1)',
      border: '3px solid turquoise',
      color: '#e2b575',
      textDecoration: 'none',
    },
  },
  btnText: {
    paddingTop: '35%',
    fontWeight: 'bold',
    fontSize: '1.2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2em',
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
          <Bounce top>
            <Grid item xs={12} sm={8} md={8} lg={4}>
              <a
                className={classes.button}
                href="/portfolio/aboutme/"
                //href="/jennplaza/about"
                //href="https://jenplaza.github.io/jennplaza-aboutme/"
                value="About Me"
              >
                <Rotate count={10} duration={10000}>
                  <p className={classes.btnText}>About Me</p>
                </Rotate>
              </a>
            </Grid>
          </Bounce>
        </Grid>
      </Grid>
    </div>
  );
}
