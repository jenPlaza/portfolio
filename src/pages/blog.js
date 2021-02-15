import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Blog/header';
import Footer from '../components/Blog/footer';
import Fetch from '../components/Blog/fetch';
import {
  blogArray,
  titleArray,
  blurbArray,
  articleArray,
  dateArray,
  imageArray,
  imageAlts,
  hashtagArray,
} from '../components/Blog/blog_arrays';

//SingleLineGridList
import { makeStyles, Grid, GridList, GridListTile } from '@material-ui/core';

//image
import imgUrl from '../images/blogBkg.png';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid red',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  container: {
    //border: '1px solid blue',
    padding: '4%',
    margin: '6% 0% 3% 0%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '-1%',
    },
  },
  gridList: {
    //border: '1px solid green',
    transform: 'translateZ(0)',
    [theme.breakpoints.down('xl')]: {
      flexWrap: 'nowrap', //remove for a verticle gallery
    },
  },
  GLT: {
    // border: '1px solid aqua',
    padding: '2%',
    width: '70%',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    [theme.breakpoints.up('md')]: {
      width: '35%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '25%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '15%',
    },
  },
  btn: {
    border: 'none',
    backgroundColor: 'white',
  },
  images: {
    //border: '1px solid pink',
    padding: '1%',
    width: '100%',
  },
  article: {
    border: '0.5px solid #f5f5f5',
    borderBottom: '2px solid #3d3d3d',
    padding: '6% 2% 3% 2%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '3%',
    },
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
  postImage: {
    //border: '1px solid pink',
    padding: '1% 3% 5% 3%',
    width: '100%',
  },
}));

const Blog = (props) => {
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('');
  const [blurb, setBlurb] = useState('');
  const [article, setArticle] = useState('');
  const [date, setDate] = useState('');
  const [md, setMd] = useState('');
  const [image, setImage] = useState('');
  const [alt, setAlt] = useState('');
  const [hashtag, setHashtag] = useState('');
  const classes = useStyles();

  return (
    <div className={classes.root} style={styles.bkg}>
      <Grid container spacing={0} className={classes.container}>
        <GridList className={classes.gridList} cols={0}>
          {blogArray.map((tile, i) => (
            <GridListTile key={tile.img} className={classes.GLT}>
              <Route
                render={({ history }) => (
                  <button
                    key={i}
                    className={classes.btn}
                    onClick={() => {
                      setActive(true);
                      setTitle(titleArray[i]);
                      setImage(imageArray[i]);
                      setAlt(imageAlts[i]);
                      setBlurb(blurbArray[i]);
                      setArticle(articleArray[i]);
                      setDate(dateArray[i]);
                      setHashtag(hashtagArray[i]);
                      history.push(`/portfolio/blog#${hashtag}`);
                    }}
                  >
                    <img
                      className={classes.images}
                      src={blogArray[i].img}
                      alt={blogArray[i].title}
                    />
                  </button>
                )}
              />
            </GridListTile>
          ))}
        </GridList>
        <Grid item xs={12} className={classes.article}>
          <article>
            {/* BUTTON CLICKED = FALSE */}
            {!active && (
              <>
                <div></div>
              </>
            )}

            {/* BUTTON CLICKED = TRUE */}
            {active && (
              <>
                <h2 className={classes.h2}>{title}</h2>
                <Header />
                <h6 className={classes.h6}> {date}</h6>
                <br />
                <img className={classes.postImage} src={image} alt={alt} />

                <br />
                <section>
                  <Fetch />
                </section>
                <Redirect to={`/portfolio/blog#${hashtag}`} />
              </>
            )}
          </article>
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
