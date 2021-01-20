import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import PrintButton from './printButton';
import imgUrl from '../../../images/emailJen.png';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '-10% 0% 5% 0%',
    //border: '1px solid red',
    [theme.breakpoints.up('md')]: {
      margin: '-15% 0% 5% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '5%',
    },
  },
  h1: {
    fontSize: '4em',
    fontFamily: 'Zapfino',
    color: 'white',
  },
  h3: {
    fontSize: '2.5em',
    fontFamily: 'Lato Bold',
    color: '#e2b575',
    float: 'left',
    marginTop: '7%',
    [theme.breakpoints.up('sm')]: {
      margin: '0%',
    },
  },
  eBtn: {
    width: '58%',
    margin: '-5% 0% 0% -5%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '4%',
      width: '54%',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      marginTop: '-2%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-1%',
      width: '37%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '2%',
    },
  },
}));

//exporting a class footer
export default function About() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <h1 className={classes.h1}>Contact Me</h1>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={5} lg={6}>
          <h3 className={classes.h3}>
            Want to work together or just chat about life, feel free to contact
            me.
          </h3>
        </Grid>
        <Grid item xs={6} sm={5} md={3} lg={2}>
          <PrintButton />
        </Grid>
        <Grid item xs={6} sm={5} md={4} lg={3}>
          <br />
          <br />
          <a href="mailto:jennyp.plaza%40gmail%2ecom?subject=Reference from JP_Portfolio: ">
            <img className={classes.eBtn} src={imgUrl} alt={'test'} />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
