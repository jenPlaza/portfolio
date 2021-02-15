import React, { useState } from 'react';
//SingleLineGridList
import { makeStyles, Grid } from '@material-ui/core';

//image
import imgUrl from '../images/blogBkg.png';
import SideBar from '../components/Blog/sideBar';
import Article from '../components/Blog/article';
import Footer from '../components/Blog/footer';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid green',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  container: {
    //border: '1px solid aqua',
    padding: '4%',
    margin: '6% 0% 3% 0%',
  },
  article: {
    //border: '1px solid orange',
    marginTop: '10%',
  },
}));

const Blog = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={styles.bkg}>
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={12}>
          <SideBar />
        </Grid>
        <Grid item xs={12} className={classes.article}>
          <Article />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;

const styles = {
  bkg: {
    backgroundImage: 'url(' + imgUrl + ')',
  },
};
