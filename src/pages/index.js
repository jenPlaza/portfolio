import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AboutMe from '../components/Home/AboutMe/aboutme';
import Portfolio from '../components/Home/Portfolio/portfolio';

//Images & Icons
import imgUrl from '../images/unite.jpg';

//Material UI
import Grid from '@material-ui/core/Grid';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid blue',
    marginTop: '-44%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-35%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '-15%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-10%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '-28% 0% 0% 0%',
    },
  },
  aboutMeRow: {
    padding: '1%',
    marginTop: '30%',
    marginBottom: '10%',
    [theme.breakpoints.up('lg')]: {
      marginTop: '-5%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '-3%',
    },
  },
  portfolioRow: {
    backgroundColor: 'white',
    marginTop: '-25%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-17%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-16%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '-15%',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={styles.container}>
      <h2>Home</h2>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.aboutMeRow}>
          <AboutMe />
        </Grid>

        <Grid item xs={12} className={classes.portfolioRow}>
          <Portfolio />
        </Grid>
      </Grid>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundRepeat: 'no-repeat',
    //margin: '-44% 0% 0% 0%',
  },
};
