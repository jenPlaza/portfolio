// JavaScript Document
import React from 'react';
import { recommendations } from '../arrays';
import ReadMore from './readMore';

//material UI
import { makeStyles, Grid, GridListTile } from '@material-ui/core';

//styles
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    marginTop: '10%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '5%'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '5%'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '2%'
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '-3%'
    }
  },
  container: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '7%'
    }
  },
  paper: {
    listStyleType: 'none',
    justifyContent: 'center',
    padding: '1%',
    //border: '1px solid purple',
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '115%',
      columns: '2',
      margin: '1% 0% 0% -10%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '115%',
      columns: '4',
      margin: '2% 0% 0% -10%'
    }
  },
  itemContainer: {
    padding: '0.5%',
    //border: '1px solid grey',
    [theme.breakpoints.up('md')]: {
      height: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: '2.5%',
      marginRight: '2%'
    },
    [theme.breakpoints.up('xl')]: {
      height: 'auto'
    }
  },
  images: {
    width: '80%',
    padding: '3% 2% 3% 0%',
    [theme.breakpoints.up('md')]: {
      width: '40%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%'
    }
  },
  header: {
    fontFamily: 'Zapfino',
    fontSize: '1.65em',
    zIndex: '2',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5em'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '4%',
      fontSize: '3em'
    }
  },
  h3: {
    fontSize: '1em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.7em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5em',
      margin: '-45% 0% 0% 15%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '75%',
      fontSize: '1.5em',
      margin: '5% 0% 1% 0%'
    }
  },
  h4: {
    fontSize: '0.5em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.2em'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1em',
      marginLeft: '15%'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1em',
      margin: '0% 0% 1% 0%'
    }
  },
  titleBar: {
    zIndex: '2',
    margin: '3% 0% 0% -8%',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      margin: '-25% 0% 0% 35%'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0% 0% 0% 0%'
    }
  }
}));

//exporting a class footer
export default function Recommendations() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <h1 className={classes.header}>Recommendations</h1>
        </Grid>
        <Grid item xs={12}>
          <GridListTile className={classes.paper}>
            {recommendations.map((tile, i) => (
              <>
                <Grid container className={classes.itemContainer}>
                  <Grid item xs={6} md={12}>
                    <a
                      href={tile.href}
                      title={tile.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={classes.images}
                        src={tile.img}
                        alt={tile.title}
                      />
                    </a>
                  </Grid>
                  <Grid item xs={6} lg={12} className={classes.titleBar}>
                    <h3 className={classes.h3}>
                      <b>{tile.title}</b>
                    </h3>
                    <h4 className={classes.h4}>{tile.blurb}</h4>
                    <ReadMore />
                  </Grid>
                </Grid>
              </>
            ))}
          </GridListTile>
        </Grid>
      </Grid>
    </div>
  );
}
