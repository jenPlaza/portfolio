import React, { useState } from 'react';
import {
  blogArray,
  titleArray,
  blurbArray,
  articleArray,
  dateArray,
} from './blog_arrays';

//SingleLineGridList
import { makeStyles, Grid, GridList, GridListTile } from '@material-ui/core';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid pink',
  },
  container: {
    //border: '1px solid orange',
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
}));

const SideBarRight = (props) => {
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState('');
  const [blurb, setBlurb] = useState('');
  const [article, setArticle] = useState('');
  const [date, setDate] = useState('');
  const classes = useStyles();

  return (
    <aside className={classes.root}>
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
      </Grid>
    </aside>
  );
};

export default SideBarRight;
