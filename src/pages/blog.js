import React, { useState } from 'react';
import {
  blogArray,
  titleArray,
  blurbArray,
  articleArray,
  dateArray,
} from '../components/blog_arrays';
import { Link } from 'react-router-dom';

//Reveal
import Pulse from 'react-reveal/Pulse';

//SingleLineGridList
import { makeStyles, Grid, GridList, GridListTile } from '@material-ui/core';

//image
import imgUrl from '../images/blogBkg.png';
import Headshot from '../images/headshot_bw.jpg';
import LinkedIn from '@material-ui/icons/LinkedIn';

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
    margin: '6% 0% 3% 0%',
  },
  gridList: {
    //border: '1px solid green',
    flexWrap: 'nowrap', //remove for a verticle gallery
    transform: 'translateZ(0)',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('xl')]: {
      justifyContent: 'center',
    },
  },
  GLT: {
    //border: '1px solid aqua',
    padding: '1%',
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
  images: {
    //border: '1px solid pink',
    padding: '1%',
    width: '100%',
  },
  blog: {
    //border: '1px solid purple',
    width: '80%',
    padding: '0% 10% 5% 10%',
    justifyContent: 'center',
    marginTop: '10%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '5%',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '3%',
    },
  },
  btn: {
    border: 'none',
    backgroundColor: 'white',
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
  socialMedia: {
    display: 'inline-block',
    float: 'right',
    transform: 'scale(1.2)',
    color: '#333333',
  },
}));

const Blog = (props) => {
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('');
  const [blurb, setBlurb] = useState('');
  const [article, setArticle] = useState('');
  const [date, setDate] = useState('');
  const classes = useStyles();
  return (
    <div className={classes.root} style={styles.bkg}>
      <Grid container spacing={0} className={classes.container}>
        <GridList className={classes.gridList} cols={0}>
          {blogArray.map((tile, i) => (
            <GridListTile key={tile.img} className={classes.GLT}>
              <button
                key={i}
                className={classes.btn}
                onClick={() => {
                  setActive(true);
                  setTitle(titleArray[i]);
                  setBlurb(blurbArray[i]);
                  setArticle(articleArray[i]);
                  setDate(dateArray[i]);
                }}
              >
                <img
                  className={classes.images}
                  src={blogArray[i].img}
                  alt={blogArray[i].title}
                />
              </button>
            </GridListTile>
          ))}
        </GridList>
        <Grid item xs={12} className={classes.blog}>
          <article>
            {!active && (
              <>
                <h2>{blogArray[0].title}</h2>
                {/* BLOG FEATURES */}
                <Grid container spacing={0}>
                  <Grid item xs={11}>
                    <row>
                      <h6 className={classes.h6}>
                        {' '}
                        Jenn Plaza
                        <br />
                        {blogArray[0].date}
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
                <br />
                <p>{blogArray[0].article}</p>
              </>
            )}
            {active && (
              <>
                <h2>{title}</h2>

                {/* BLOG FEATURES */}
                <Grid container spacing={0}>
                  <Grid item xs={11}>
                    <row>
                      <h6 className={classes.h6}>
                        {' '}
                        Jenn Plaza
                        <br />
                        {blogArray[0].date}
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
                <br />
                <p>{article}</p>
              </>
            )}
            <br />
            <hr />
            <footer>
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
                    Jenn Plaza is a Front - End Web Developer who is dedicated
                    to help people where the need is greatest, by connecting
                    skill, devotion, and disposition to promote project
                    transformation and departmental growth among peers.
                  </p>
                </Grid>
              </Grid>
            </footer>
          </article>
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
