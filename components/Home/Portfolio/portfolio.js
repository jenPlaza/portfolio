// JavaScript Document
import React from 'react';
import ReadMore from './readMore';
import Jello from 'react-reveal/Jello';

//material UI
import { makeStyles, Grid } from '@material-ui/core';

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: 'wrap',
    width: '100%',
    marginTop: '28%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '10%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '10%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '12%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '0%',
    },
  },
  container: {
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Zapfino',
    fontSize: '3em',
    position: 'absolute',
    zIndex: '1',
    color: '#0A0300',
    [theme.breakpoints.up('sm')]: {
      fontSize: '4em',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '7%',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5.5em',
    },
  },
}));

//exporting a class footer
export default function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container id="portfolio" className={classes.container}>
        <Jello duration={25000} forever>
          <Grid item xs={12}>
            <h1 className={classes.header}>Portfolio</h1>
          </Grid>
        </Jello>
        <ReadMore />
      </Grid>
    </div>
  );
}
