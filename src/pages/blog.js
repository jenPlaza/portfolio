import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Tada from 'react-reveal/Tada';

//image
import imgUrl from '../images/blogBkg.png';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid red',
  },
  container: {
    //border: '1px solid blue',
    textAlign: 'center',
    marginTop: '25%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0%',
    },
  },
  h1: {
    fontSize: '2.5em',
    margin: 'auto',
    marginTop: '15%',
    fontFamily: 'Zapfino',
    [theme.breakpoints.up('sm')]: {
      marginTop: '5%',
    },
  },
  blog: {
    padding: '1%',
    marginTop: '10%',
    marginBottom: '65%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.up('xl')]: {
      //marginTop: '25%',
    },
  },
}));

export default function Blog() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={styles.bkg}>
      <Grid container spacing={0} className={classes.container}>
        <h1 className={classes.h1}>Blog</h1>

        <Grid item xs={12} className={classes.blog}>
          <hr />
          <Tada>
            <h2>Coming Soon</h2>
          </Tada>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = {
  bkg: {
    backgroundImage: 'url(' + imgUrl + ')',
    //backgroundRepeat: 'no-repeat',
    margin: '0% 0% 0% 0%',
  },
};
