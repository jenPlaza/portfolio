import React from 'react';
import { Link } from 'react-router-dom';

//Reveal
import Pulse from 'react-reveal/Pulse';

//SingleLineGridList
import { makeStyles, Grid } from '@material-ui/core';
import LinkedIn from '@material-ui/icons/LinkedIn';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid red',
  },
  container: {
    //border: '1px solid blue',
    marginTop: '5%',
    [theme.breakpoints.up('sm')]: {
      margin: '6% 0% -3% 0%',
    },
  },
  header: {
    //border: '1px solid aqua',
    width: '80%',
    padding: '0%',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-3%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-4%',
    },
  },
  h6: {
    fontSize: '0.75em',
  },
  socialMedia: {
    display: 'inline-block',
    float: 'right',
    transform: 'scale(1.2)',
    color: '#333333',
    marginTop: '-8%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '25%',
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={12} className={classes.header}>
          <Grid container spacing={0}>
            <Grid item xs={11}>
              <row>
                <h6 className={classes.h6}>
                  {' '}
                  Jenn Plaza
                  <br />
                </h6>
              </row>
            </Grid>
            <Grid item xs={1} md={1}>
              <Pulse duration={2000} forever>
                <div>
                  <Link
                    color="inherit"
                    href="https://www.linkedin.com/in/jennifer-plaza-7a516a24/"
                    target="_blank"
                  >
                    <LinkedIn className={classes.socialMedia} />
                  </Link>
                </div>
              </Pulse>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};
export default Header;
