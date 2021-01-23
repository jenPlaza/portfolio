import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    height: 'auto',
    //border: '1px solid yellow',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '3%',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '-2%',
    },
  },
  container: {
    //border: '1px solid pink',
    height: '730px',
  },
  resume: {
    color: '#00CCBB',
    ////border: '1px solid orange',
    height: 'auto',
    [theme.breakpoints.up('lg')]: {
      borderRight: '4px double #e2b575',
    },
  },
  h3: {
    color: '#adfff8',
    fontSize: '1.6em',
    margin: '10% 0% 3% 0%',
    [theme.breakpoints.up('sm')]: {
      margin: '5% 0% 1% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0% 0% 1% 0%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '0% 0% 1% 0%',
    },
  },
  h4: {
    color: '#5CFFF1',
    fontSize: '1.2em',
  },
  h5: {
    fontSize: '1em',
    [theme.breakpoints.up('lg')]: {
      listStyleType: 'none',
    },
  },
  ul: {
    [theme.breakpoints.up('lg')]: {
      listStyleType: 'none',
    },
  },
}));

//exporting a class footer
export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={10} className={classes.container}>
        <Grid item xs={12} lg={6} className={classes.resume}>
          <h3 className={classes.h3}>Education</h3>
          <h4 className={classes.h4}>
            <b>Full Sail University</b>
          </h4>
          <h5 className={classes.h5}>
            Web Design & Development (BS), Nov 2017 – Nov 2020
          </h5>
          <h5 className={classes.h5}>
            Internet Marketing, Mar 2017 – Nov 2017
          </h5>
          <br />

          <h3 className={classes.h3}>Experience</h3>
          <h4 className={classes.h4}>
            <b>Undergraduate Student</b>
          </h4>
          <h5 className={classes.h5}>
            {' '}
            Full Sail University
            <br />
            <i> March 2017 - Noveber 2020</i>
          </h5>
          <br />
          <h4 className={classes.h4}>
            <b>IT Implementation & Support COORD</b>
          </h4>
          <h5 className={classes.h5}>
            {' '}
            American Hotel & Lodging Educational Institute
            <br />
            <i> January 2013 - January 2017 </i>
          </h5>
          <br />
          <h4 className={classes.h4}>
            <b>Marketing COORD</b>
          </h4>
          <h5 className={classes.h5}>
            {' '}
            American Hotel & Lodging Educational Institute
            <br />
            <i>January 2010 - December 2012 </i>
          </h5>
          <br />

          <h3 className={classes.h3}>Skills</h3>
          <h4 className={classes.h4}>WEB DEVELOPMENT</h4>
          <h5 className={classes.h5}>
            <ul className={classes.ul}>
              <li>Efficient in Git/ Version Control</li>
              <li>Efficient Adobe software suite </li>
              <li>Efficient in Html, CSS, JavaScript</li>
              <li>
                Efficient in using Bootstrap, React, Material UI, and Express 
              </li>
              <li>Efficient in User Interface Design</li>
              <li>
                Efficient in database management using Sequel Pro, MySQL
                Workbench
              </li>
              <li>Proficient in WordPress, Ektron </li>
              <li>Knowledgeable in coding C# </li>
            </ul>
          </h5>

          <h4 className={classes.h4}>SOCIAL</h4>
          <h5 className={classes.h5}>
            Proficient in:
            <ul className={classes.ul}>
              <li>Creative</li>
              <li>Problem Solver</li>
              <li>Organized</li>
              <li>Fast Learner</li>
              <li>Team Player</li>
              <li>Customer Service</li>
              <li>Time Management</li>
            </ul>
          </h5>

          <h4 className={classes.h4}>MANEGERIAL</h4>
          <h5 className={classes.h5}>
            <ul className={classes.ul}>
              <li>Bilingual, English & Spanish</li>
              <li>Proficient in Microsoft Office</li>
              <li>
                Efficient in customizing Salesforce & Sharepoint workflows
              </li>
              <li>Efficient in Writing Proposals for Business Projects</li>
              <li>Efficient in using Planning Software</li>
            </ul>
          </h5>
        </Grid>
      </Grid>
    </div>
  );
}
