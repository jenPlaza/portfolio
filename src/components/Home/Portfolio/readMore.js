import React, { useState } from 'react';
import {
  titleArray,
  descriptionArray,
  imageArray,
  hrefArray,
  repoArray,
  synopsisArray,
  styleTilesArray,
  lofiDArray,
  lofiMArray,
  hifiDArray,
  hifiMArray,
} from '../../portfolio_arrays';
import TabPanel from './tabPanel';

//Images & Icons
import imgUrl from '../../../images/modalBkgd.png';

//Material UI
import {
  makeStyles,
  Modal,
  Grid,
  AppBar,
  Tabs,
  Tab,
  GridListTile,
  Link,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
const useStyles = makeStyles((theme) => ({
  //MODAL
  container: {
    //border: '1px solid red',
    marginTop: '5%',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: '4%',
    },
    [theme.breakpoints.up(' lg')]: {
      marginTop: '10%',
    },
    [theme.breakpoints.up(' xl')]: {
      marginTop: '15%',
    },
  },
  btn: {
    border: 'none',
    padding: '5% 0% 3% 0%',
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      padding: '0% 0% 3% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '3%',
      padding: '0% 0% 0% 0%',
    },
  },
  openModalBtn: {
    color: 'turquoise',
    fontSize: '1.5rem',
    padding: '4% 2% 2% 0%',
    fontWeight: 'bold',
    border: 'none',
    backgroundColor: 'transparent',
    marginLeft: '0%',
  },
  modal: {
    overflowY: 'auto',
  },
  modalHeader: {
    background: '#333333',
    width: '75%',
    height: '50px',
    padding: '1%',
    textAlign: 'left',
    color: 'white',
    margin: 'auto',
    marginTop: '20%',
  },
  modalBody: {
    padding: '3%',
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundColor: 'white',
    width: '75%',
    margin: 'auto',
  },
  modalFooter: {
    background: 'white',
    height: '50px',
    width: '75%',
    margin: 'auto',
  },
  h2: {
    padding: '2%',
  },
  h4: {
    marginTop: '0%',
  },
  text: {
    padding: '3%',
  },
  btnCancel: {
    border: 'none',
    color: theme.palette.secondary.contrastText,
    fontWeight: 'bold',
    padding: '20px',
    backgroundColor: '#b71c1c',
  },
  links: {
    color: '#26BAAE',
  },
  //IMAGES
  images: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  thumbnail: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '35%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '25%',
    },
  },
  //TABS
  barContainer: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#333333',
    margin: '-4.5% -6% 0% -4.4%',
    width: '108.8%',
    padding: '1.5%',
  },
  icon: {
    transform: 'scale(2.5)',
    margin: '20% 20%',
    color: 'turquoise',
    [theme.breakpoints.up('xs')]: {
      margin: '1% 0% 0% 4%',
      padding: '1% 1% 1% 1%',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '1% 0% 0% 1%',
      padding: '1% 1% 1% 1%',
    },
  },
  tab: {
    padding: '1% 0% 0% 1%',
  },
  tabContainer: {
    //border: '1px solid orange',
    marginLeft: '-10%',
    width: '120%',
    [theme.breakpoints.up('sm')]: {
      margin: 0,
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      margin: 0,
      width: '100%',
    },
  },
  //DESIGN PROCESS
  dprocess: {
    flexGrow: 1,
    flexWrap: 'wrap',
    width: '100%',
    listStyleType: 'none',
  },
  framesContainer: {
    //border: '1px solid pink',
    justifyContent: 'center',
    marginLeft: '-5%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '-3%',
    },
    [theme.breakpoints.up('md')]: {
      margin: 0,
    },
  },
  gridList: {
    // border: '1px solid red',
    padding: '0% -1% 1% 1%',
    marginTop: '-1%',
    justifyContent: 'center',
    [theme.breakpoints.up('xs')]: {
      marginLeft: '-6%',
    },
    [theme.breakpoints.up('md')]: {
      margin: 0,
    },
  },
  paper: {
    backgroundColor: 'transparent',
  },
  itemContainer: {
    //border: '1px solid green',
    padding: '2%',
    listStyleType: 'none',
    [theme.breakpoints.up('xs')]: {
      width: 230,
      height: 180,
      marginBottom: '3%',
    },
    [theme.breakpoints.up('sm')]: {
      width: 530,
      height: 400,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '-10%',
      width: 400,
      height: 270,
    },
    [theme.breakpoints.up('lg')]: {
      margin: 'auto',
      width: 400,
      height: 300,
    },
  },
  frames: {
    width: '100%',
    border: '0.5px solid #f5f5f5',
    [theme.breakpoints.up('md')]: {
      width: '387px',
      height: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
    },
  },
  titleBar: {
    position: 'absolute',
    bottom: '0',
    zIndex: '1',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: '40px',
    width: '100%',
    color: '#f5f5f5',
    padding: ' 2% 0.5% 0% 5%',
    marginBottom: '0%',
    [theme.breakpoints.up('xs')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '100%',
    },
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ReadMore() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [repo, setRepo] = useState('');
  const [href, setHref] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [styleTiles, setStyleTile] = useState('');
  const [lofiD, setLofiD] = useState('');
  const [lofiM, setLofiM] = useState('');
  const [hifiD, setHifiD] = useState('');
  const [hifiM, setHifiM] = useState('');
  const [value, setValue] = useState(0);

  const handleOpen = (i) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const mapping = () => {
    descriptionArray.map((arr) => {
      return <p>{arr}</p>;
    });
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid className={classes.container}>
        {/* PROJECT LIST */}
        {imageArray.map((data, i, tile) => (
          <button
            key={i}
            className={classes.btn}
            onClick={() => {
              handleOpen();
              setTitle(titleArray[i]);
              setImage(imageArray[i]);
              setDescription(descriptionArray[i]);
              setRepo(repoArray[i]);
              setHref(hrefArray[i]);
              setSynopsis(synopsisArray[i]);
              setStyleTile(styleTilesArray[i]);
              setLofiD(lofiDArray[i]);
              setLofiM(lofiMArray[i]);
              setHifiD(hifiDArray[i]);
              setHifiM(hifiMArray[i]);
            }}
          >
            <img
              className={classes.images}
              key={i}
              src={tile[i]}
              alt={'project home page'}
            />
          </button>
        ))}
        <Modal
          id="modal"
          className={classes.modal}
          open={open}
          onClose={handleClose}
        >
          <form>
            <Grid container>
              <Grid item xs={12}>
                {/* MODAL HEADER */}
                <div className={classes.modalHeader}>
                  <h4 className={classes.h4}>Read More</h4>
                </div>
                {/* MODAL BODY */}
                <div className={classes.modalBody}>
                  <Grid container className={classes.barContainer}>
                    <AppBar position="static" className={classes.bar}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        TabIndicatorProps={{
                          style: {
                            backgroundColor: 'turquoise',
                          },
                        }}
                      >
                        <Tab
                          label="Featured Specialty Plates"
                          {...a11yProps(0)}
                        />
                        <Tab label="Project Synopsis" {...a11yProps(1)} />
                        <Tab label="Design Process" {...a11yProps(2)} />
                      </Tabs>
                    </AppBar>
                    {/* Project Description */}
                    <TabPanel value={value} index={0} className={classes.tab}>
                      <br />
                      <div className={classes.tabContainer}>
                        <a
                          className={classes.links}
                          href={href}
                          target="_blank"
                        >
                          <img
                            className={classes.thumbnail}
                            src={image}
                            alt={'project home page'}
                          />
                        </a>
                        <br />
                        <br />
                        <br />
                        <h5>{description}</h5>
                        <br />
                        <br />
                        <h4>
                          <a
                            className={classes.links}
                            href={href}
                            target="_blank"
                          >
                            Go To Site
                          </a>
                          <DoubleArrowIcon className={classes.icon} />
                        </h4>
                      </div>
                    </TabPanel>
                    {/* Project Synopsis */}
                    <TabPanel value={value} index={1} className={classes.tab}>
                      <Grid container className={classes.tabContainer}>
                        <Grid item xs={12} md={1}>
                          <DashboardIcon className={classes.icon} />
                        </Grid>
                        <Grid item xs={12}>
                          <br />
                          <h5>{synopsis}</h5>
                        </Grid>

                        <Grid item xs={12}>
                          <br />
                          <br />
                          <h5>
                            <a
                              className={classes.links}
                              href={repo}
                              target="_blank"
                            >
                              Visit the repository
                            </a>
                            <DoubleArrowIcon className={classes.icon} />
                          </h5>
                        </Grid>
                      </Grid>
                    </TabPanel>
                    {/* Project Design */}
                    <TabPanel value={value} index={2}>
                      <div className={classes.dprocess}>
                        <Grid container className={classes.framesContainer}>
                          <Grid item xs={12} md={1}>
                            <PhotoLibraryIcon className={classes.icon} />
                          </Grid>
                          <Grid item xs={12} md={11}>
                            <br />
                            <h5>
                              Images and optimization have been completed using
                              Adobe Photoshop and all frames have been created
                              using Adobe XD{' '}
                            </h5>
                            <br />
                            <br />
                          </Grid>
                          <Grid container className={classes.gridList}>
                            {/*    Style Tile */}
                            <Grid
                              item
                              xs={12}
                              md={6}
                              lg={4}
                              className={classes.paper}
                            >
                              <GridListTile className={classes.itemContainer}>
                                <div>
                                  <a
                                    href={`../portfolio/${styleTiles}`}
                                    target="_blank"
                                  >
                                    <img
                                      className={classes.frames}
                                      src={styleTiles}
                                    />
                                  </a>
                                  ß
                                  <h5 className={classes.titleBar}>
                                    Stile Tile
                                  </h5>
                                </div>
                              </GridListTile>
                            </Grid>

                            {/*    LOFI Desktop */}
                            <Grid
                              item
                              xs={12}
                              md={6}
                              lg={4}
                              className={classes.paper}
                            >
                              <GridListTile className={classes.itemContainer}>
                                <div>
                                  <a
                                    href={`../portfolio/${lofiD}`}
                                    target="_blank"
                                  >
                                    <img
                                      className={classes.frames}
                                      src={lofiD}
                                    />
                                    <h5 className={classes.titleBar}>
                                      LoFi Desktop wireframes
                                    </h5>
                                  </a>
                                </div>
                              </GridListTile>
                            </Grid>

                            {/*     LOFI Mobile*/}
                            <Grid
                              item
                              xs={12}
                              md={6}
                              lg={4}
                              className={classes.paper}
                            >
                              <GridListTile className={classes.itemContainer}>
                                <div>
                                  <a
                                    href={`../portfolio/${lofiM}`}
                                    target="_blank"
                                  >
                                    <img
                                      className={classes.frames}
                                      src={lofiM}
                                    />
                                    <h5 className={classes.titleBar}>
                                      LoFi Mobile wireframes
                                    </h5>
                                  </a>
                                </div>
                              </GridListTile>
                            </Grid>

                            {/*     HIFI Desktop*/}
                            <Grid
                              item
                              xs={12}
                              md={6}
                              lg={4}
                              className={classes.paper}
                            >
                              <GridListTile className={classes.itemContainer}>
                                <div>
                                  <a
                                    href={`../portfolio/${hifiD}`}
                                    target="_blank"
                                  >
                                    <img
                                      className={classes.frames}
                                      src={hifiD}
                                    />
                                    <h5 className={classes.titleBar}>
                                      HiFi Desktop wireframes{' '}
                                    </h5>
                                  </a>
                                </div>
                              </GridListTile>
                            </Grid>

                            {/*     HIFI Mobile*/}
                            <Grid
                              item
                              xs={12}
                              md={6}
                              lg={4}
                              className={classes.paper}
                            >
                              <GridListTile className={classes.itemContainer}>
                                <div>
                                  <a
                                    href={`../portfolio/${hifiM}`}
                                    target="_blank"
                                  >
                                    <img
                                      className={classes.frames}
                                      src={hifiM}
                                    />
                                    <h5 className={classes.titleBar}>
                                      HiFi Mobile wireframes
                                    </h5>
                                  </a>
                                </div>
                              </GridListTile>
                            </Grid>

                            {/*     EMPTY Box*/}
                            <Grid
                              item
                              xs={0}
                              md={6}
                              lg={4}
                              className={classes.paper}
                            >
                              <GridListTile
                                className={classes.itemContainer}
                              ></GridListTile>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    </TabPanel>
                  </Grid>
                </div>
                {/* MODAL FOOTER */}
                <div className={classes.modalFooter}>
                  <button className={classes.btnCancel} onClick={handleClose}>
                    Close
                  </button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Modal>
      </Grid>
    </>
  );
}
