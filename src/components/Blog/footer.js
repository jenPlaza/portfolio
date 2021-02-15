import React from 'react';

//SingleLineGridList
import { makeStyles, Grid } from '@material-ui/core';

//image
import Headshot from '../../images/headshot_bw.jpg';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid red',
  },
  headshot: {
    width: '120%',
    borderRadius: '50%',
    border: '1px solid #f5f5f5',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '95%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '50%',
    },
  },
  h6: {
    fontSize: '0.75em',
  },
  about: {
    fontSize: '0.9em',
    margin: '0% 7%',
    [theme.breakpoints.up('md')]: {
      margin: '2% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1% -5%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '1% -8%',
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <>
      <br />

      {/* <hr /> */}
      <footer className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={4} md={2}>
                <img
                  className={classes.headshot}
                  src={Headshot}
                  alt="A headshot of Jennifer Plaza"
                />
              </Grid>
              <Grid item xs={12} md={10} className={classes.about}>
                <row>
                  <h6>
                    WRITTEN BY
                    <br />
                    Jenn Plaza
                  </h6>
                </row>
                <p>
                  Jenn Plaza is a Front - End Web Developer who is dedicated to
                  help people where the need is greatest, by connecting skill,
                  devotion, and disposition to promote project transformation
                  and departmental growth among peers.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
