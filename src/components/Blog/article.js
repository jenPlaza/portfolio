import React, { useState } from 'react';
import { titleArray, dateArray, imageArray, imageAlts } from './blog_arrays';
import Fetch from './fetch';
import Header from './header';

//SingleLineGridList
import { makeStyles, Grid } from '@material-ui/core';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    border: '0.5px solid #f5f5f5',
    borderBottom: '2px solid #3d3d3d',
    padding: '6% 2% 3% 2%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '0%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '-4%',
    },
  },
  container: {
    //border: '1px solid blue',
  },
  blog: {
    // border: '1px solid purple',
  },
  h2: {
    fontFamily: 'Montseratt',
    textAlign: 'center',
    fontSize: '3em',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.5em',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5em',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '5em',
    },
  },
  h6: {
    //date
    fontSize: '0.75em',
    margin: '-3% 0% 5% 0%',
    padding: '0% 3% 0% 3%',
    [theme.breakpoints.up('sm')]: {
      margin: '-5% 0% 2% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '-2% 0% 0% 0%',
    },
  },
  images: {
    //border: '1px solid pink',
    padding: '1% 3% 5% 3%',
    width: '100%',
  },
}));

const Article = (props) => {
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [alt, setAlt] = useState('');
  const classes = useStyles();

  return (
    <article className={classes.root}>
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={12} className={classes.blog}>
          {/* BUTTON CLICKED = FALSE */}
          {!active && (
            <>
              <h2 className={classes.h2}>{titleArray[0]}</h2>
              <Header />
              <h6 className={classes.h6}> {dateArray[0]}</h6>
              <br />
              <img
                className={classes.images}
                src={imageArray[0]}
                alt={imageAlts[0]}
              />

              <br />
              <section>
                <Fetch />
              </section>
            </>
          )}

          {/* BUTTON CLICKED = TRUE */}
          {active && (
            <>
              <h2 className={classes.h2}>{title}</h2>
              <Header />
              <h6 className={classes.h6}> {date}</h6>
              <br />
              <img className={classes.image} src={image} alt={alt} />

              <br />
              <section>
                <Fetch />
              </section>
            </>
          )}
        </Grid>
      </Grid>
    </article>
  );
};

export default Article;
