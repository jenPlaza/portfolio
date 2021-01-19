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
    textAlign: 'left',
  },
  aboutMeRow: {
    padding: '1%',
    marginTop: '30%',
    marginBottom: '10%',
  },
  portfolioRow: {
    backgroundColor: 'white',
    marginTop: '8%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '8%',
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={styles.container}>
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
    margin: '-39% 0% 0% 0%',
  },
};
