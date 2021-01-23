import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Images & Icons
import imgUrl from '../images/blogBkg.png';

//Material UI
import Grid from '@material-ui/core/Grid';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid blue',
    textAlign: 'center',
  },
  h1: {
    fontSize: '2.5em',
    fontFamily: 'Zapfino',
  },
  blog: {
    padding: '1%',
    marginTop: '0%',
    marginBottom: '65%',
    [theme.breakpoints.up('xl')]: {
      //marginTop: '25%',
    },
  },
}));

export default function Blog() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={styles.container}>
      <h1 className={classes.h1}>Blog</h1>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.blog}>
          <hr />
          <h2>Comming Soon</h2>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url(' + imgUrl + ')',
    //backgroundRepeat: 'no-repeat',
    margin: '0% 0% 0% 0%',
  },
};
