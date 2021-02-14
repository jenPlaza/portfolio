import React, { useState } from 'react';

//SingleLineGridList
import { makeStyles, Grid } from '@material-ui/core';

//image
import imgUrl from '../images/blogBkg.png';
import SideBarRight from '../components/Blog/sideBarRight';
import Article from '../components/Blog/article';
import Header from '../components/Blog/header';
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
  sbr: {
    //border: '1px solid green',
    [theme.breakpoints.up('sm')]: {},
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('xl')]: {},
  },
  article: {
    //border: '1px solid orange',
    marginTop: '10%',
    [theme.breakpoints.up('sm')]: {},
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('xl')]: {},
  },
  footer: {
    // border: '1px solid purple',
    [theme.breakpoints.up('sm')]: {},
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('xl')]: {},
  },
}));

const Blog = (props) => {
  /*   const [active, setActive] = useState(false);
  const [title, setTitle] = useState('');
  const [blurb, setBlurb] = useState('');
  const [article, setArticle] = useState('');
  const [date, setDate] = useState('');
  const [md, setMd] = useState(''); */
  const classes = useStyles();

  return (
    <div className={classes.root} style={styles.bkg}>
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={12} className={classes.sbr}>
          <SideBarRight />
        </Grid>
        <Grid item xs={12} className={classes.article}>
          <Article />
        </Grid>
        <Grid item xs={12} className={classes.footer}>
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
