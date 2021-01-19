import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    height: 'auto',
    fontSize: '1.50em',
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
    color: '#5CFFF1',
    fontSize: '1.8em',
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
    color: '#00E0CE',
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
          <h5>Web Design & Development, Nov 2017 – Nov 2020</h5>
          <h5>Internet Marketing, Mar 2017 – Nov 2017</h5>
          <br />
          <h4 className={classes.h4}>
            <b>Miami Dade Community College</b>
          </h4>
          <h5>Associate of Arts (AA), 1997 – 1999</h5>
          <h3 className={classes.h3}>Experience</h3>
          <h4 className={classes.h4}>
            <b>IT Implementation and Support Coordinator</b>
          </h4>
          <h5>
            {' '}
            at AHLEI- American Hotel & Lodging Educational Institute
            <br />
            <i> January 2013 - January 2017 (4 years 1 month)</i>
          </h5>
          <br />
          <h4 className={classes.h4}>
            <b>Marketing Coordinator</b>
          </h4>
          <h5>
            {' '}
            at American Hotel & Lodging Educational Institute
            <br />
            <i>January 2010 - December 2012 (3 years)</i>
          </h5>
          <br />
          <h4 className={classes.h4}>
            <b>Certification Agent</b>
          </h4>
          <h5>
            {' '}
            at American Hotel & Lodging Educational Institute
            <br />
            <i> October 2006 - December 2009 (3 years 3 months)</i>
          </h5>
          <h3 className={classes.h3}>Skills</h3>
          <h5>- Well-versed in both English & Spanish</h5>
          <h5>- Efficient time management skills</h5>
          <h5>- Disciplined and well organized</h5>
          <h5>-Proficient in Microsoft Office</h5>
          <h5>- Efficient in Git/ Version Control</h5>
          <h5>- Efficient in Adobe XD</h5>
          <h5>-Efficient in coding Html, CSS, JavaScript</h5>
          <h5>- Knowledgeable in coding C#</h5>
          <h5>- Efficient in Bootstrap, React, and Express frameworks</h5>
          <h5>-Knowledgeable in Photoshop, InDesign</h5>
          <h5>- Knowledgeable in WordPress</h5>
          <h5>-Knowledgeable in using Sequel Pro, My SQL Workbench</h5>
        </Grid>
      </Grid>
    </div>
  );
}
