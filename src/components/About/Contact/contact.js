import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import emailme from '../../../images/emailJen.png';
import printme from '../../../images/printMe.png';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '-10% 0% 5% 0%',
    //border: '1px solid red',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-1%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '-15% 0% 5% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '21%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '13%',
    },
  },
  h1: {
    fontSize: '2.5em',
    fontFamily: 'Zapfino',
    color: 'white',
  },
  h3: {
    fontSize: '1.5em',
    fontFamily: 'Lato Bold',
    color: '#e2b575',
    float: 'left',
    marginTop: '3%',
    [theme.breakpoints.up('sm')]: {
      margin: '0%',
    },
  },
  btnContainer: {
    marginTop: '5%',
    [theme.breakpoints.up('xl')]: {
      marginBottom: '-4%',
    },
  },
  eBtn: {
    width: '95%',
    [theme.breakpoints.up('sm')]: {
      //marginTop: '4%',
      width: '75%',
    },
    [theme.breakpoints.up('md')]: {
      width: '95%',
    },
    [theme.breakpoints.up('lg')]: {
      //marginTop: '-1%',
      //width: '37%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '-7%',
      width: '75%',
    },
  },
  eBtn2: {
    width: '95%',
    marginTop: '-35%',
    [theme.breakpoints.up('sm')]: {
      margin: '-12% 0% 30% 0%',
      width: '75%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      marginTop: '-15%',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '0%',
      width: '50%',
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
        <Grid container className={classes.btnContainer}>
          <Grid item xs={6} md={3} lg={2}>
            {/* <PrintButton /> */}
            <a href="resume_2021.pdf" download>
              <img
                className={classes.eBtn}
                src={printme}
                alt={'test'}
                /* onClick={this.print} */
              />
            </a>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <br />
            <br />
            <a href="mailto:jennyp.plaza%40gmail%2ecom?subject=Reference from JP_Portfolio: ">
              <img className={classes.eBtn2} src={emailme} alt={'test'} />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
