import React from 'react';
import { makeStyles, Grid, Link } from '@material-ui/core';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    color: '#00d1be',
    margin: '0%',
    textAlign: 'left',
    fontSize: '1.50em',
    [theme.breakpoints.up('xs')]: {
      margin: '-5% 0% 1% -3%',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '-35% 0% 1% -3%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '-50% 0% 1% -3%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '-3% 0% 1% 0%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '-13% 0% 1% 0%',
    },
  },
  h3: {
    fontSize: '1.8em',
    color: '#5CFFF1',
    margin: '0% 0% 3% 0%',
    [theme.breakpoints.up('sm')]: {
      margin: '-7% 0% 0% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0% 0% 11% 0%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '3% 0% 11% 0%',
    },
  },
  resume: {
    fontSize: '2.8em',
    margin: '-5% 0% 5% 0%',
    [theme.breakpoints.up('sm')]: {
      margin: '4% 0% 0% 0%',
      fontSize: '2.5em',
    },
    [theme.breakpoints.up('md')]: {
      margin: '10% 0% 0% 0%',
      fontSize: '2.5em',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '20% 0% -2% 0%',
      width: '120%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '3% 0% 11% 0%',
    },
  },
  portfolio: {
    fontSize: '1.9em',
    margin: '0% 0% 3% 0%',
    [theme.breakpoints.up('sm')]: {
      margin: '4% 0% 0% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '20% 0% -2% 0%',
      width: '120%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '3% 0% 11% 0%',
    },
  },
  info: {
    [theme.breakpoints.up('sm')]: {
      margin: '-1% 0% 1% 0%',
    },
  },
  socialContainer: {
    margin: '10% 0% 1% 0%',
    [theme.breakpoints.up('lg')]: {
      margin: '3% 0% 1% 0%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '7% 0% 1% 0%',
    },
  },
  languages: {
    margin: '10% 0% 1% 0%',
    [theme.breakpoints.up('xs')]: {
      margin: '15% 0% 15% 0%',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '11% 0% 1% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '5% 0% 1% 0%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '12% 0% 1% 0%',
    },
  },
  socialMedia: {
    margin: '8% 0% 1% 5%',
    paddingRight: '1%',
    transform: 'scale(1.3)',
    [theme.breakpoints.up('sm')]: {
      margin: '3% 0% 1% 0%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '3% 0% 1% 0%',
    },
  },
}));

//exporting a class footer
export default function About() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.root}>
      {/*  CONTACT ME */}
      <Grid container xs={12}>
        <Grid item xs={12}>
          <h3 className={classes.h3}>Let's get in touch </h3>
        </Grid>
        <Grid container xs={12} className={classes.info}>
          <Grid item xs={2} sm={1}>
            <Link
              color="inherit"
              href="mailto:jennyp.plaza%20gmail%2ecom?subject=Reference from JP_Portfolio: "
            >
              <MailIcon className={classes.socialMedia} />
            </Link>
          </Grid>
          <Grid item xs={10} sm={11}>
            <a
              style={{ color: '#00d1be' }}
              href="mailto:jennyp.plaza%20gmail%2ecom?subject=Reference from JP_Portfolio: "
            >
              jennyp.plaza@gmail.com
            </a>
          </Grid>

          <Grid item xs={2} sm={1}>
            <Link
              color="inherit"
              href="https://www.linkedin.com/in/jennifer-plaza-7a5110a22/"
              target="_blank"
            >
              <PhoneIcon className={classes.socialMedia} />
            </Link>
          </Grid>
          <Grid item xs={10} sm={11}>
            <p>407.535.0537</p>
          </Grid>
          <Grid item xs={2} sm={1}>
            <HomeIcon className={classes.socialMedia} />
          </Grid>
          <Grid item xs={10} sm={11}>
            <address>422 Harbor Point Blvd, Orlando Fl. 32835</address>
          </Grid>
        </Grid>
      </Grid>
      {/*  FOLLOW ME */}
      <Grid container xs={12} className={classes.socialContainer}>
        <Grid item xs={12}>
          <h3 className={classes.h3}>Follow Me</h3>
        </Grid>
        <Grid container xs={12} className={classes.info}>
          <Grid item xs={2} sm={1}>
            <Link
              color="inherit"
              href="https://github.com/jenPlaza"
              target="_blank"
            >
              <GitHub className={classes.socialMedia} />
            </Link>
          </Grid>
          <Grid item xs={10} sm={11}>
            <a style={{ color: '#00d1be' }} href="https://github.com/jenPlaza">
              https://github.com/jenPlaza
            </a>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Link
              color="inherit"
              href="https://www.linkedin.com/in/jennifer-plaza-7a516a24/"
              target="_blank"
            >
              <LinkedIn className={classes.socialMedia} />
            </Link>
          </Grid>
          <Grid item xs={10} sm={11}>
            <a
              style={{ color: '#00d1be' }}
              href="https://www.linkedin.com/in/jennifer-plaza-7a516a24/"
            >
              https://www.linkedin.com/jenPlaza
            </a>
          </Grid>
        </Grid>
      </Grid>
      {/*  LANGUAGES */}
      <Grid container xs={12} className={classes.languages}>
        <Grid item xs={12}>
          <h3 className={classes.h3}>Languages</h3>
        </Grid>
        <Grid container xs={12} className={classes.info}>
          <Grid item xs={12}>
            <p>English</p>
            <p>Spanish</p>
          </Grid>
        </Grid>
      </Grid>
      {/*  RESUME and PORTFOLIO Links */}
      <Grid container className={classes.info}>
        <Grid item xs={12}>
          <h3 className={classes.resume}>
            <Link
              style={{ color: 'turquoise' }}
              href="https://jenplaza.github.io/jennplaza-resume/"
              to="resume"
            >
              My Resume
            </Link>
          </h3>
        </Grid>
        <Grid item xs={12}>
          <h3 className={classes.portfolio}>
            <a
              style={{ color: '#e2b575' }}
              //href="https://jenplaza.github.io/jennplaza/#portfolio"
              href="/portfolio/#projects"
            >
              Back To My Portfolio
            </a>
          </h3>
        </Grid>
      </Grid>
    </Grid>
  );
}
