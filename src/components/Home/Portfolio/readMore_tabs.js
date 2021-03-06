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

//Material UI
import { AppBar, Tabs, Tab } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

//Images & Icons
import imgUrl from '../../../images/modalBkgd.png';

//Material UI
import { makeStyles, Modal, Grid } from '@material-ui/core';
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
      width: '75%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '30%',
    },
  },
  //TABS
  barContainer: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#333333',
    margin: '-4.4% -6% 0% -4.5%',
    width: '109%',
    padding: '1.5%',
  },
  icon: {
    transform: 'scale(2.5)',
    margin: '20% 20%',
    color: 'turquoise',
  },
  tab: {
    padding: '3%',
  },
  //DESIGN PROCESS
  dprocess: {
    flexGrow: 1,
    flexWrap: 'wrap',
    width: '100%',
  },
  framesContainer: {
    justifyContent: 'center',
  },
  frames: {
    width: '100%',
    border: '0.5px solid #f5f5f5',
  },
  gridList: {
    padding: '0% 1% 1% 1%',
    marginTop: '-1%',
    justifyContent: 'center',
  },
  paper: {
    listStyleType: 'none',
    backgroundColor: 'transparent',
  },
  itemContainer: {
    padding: '2%',
    width: 400,
    height: 270,
    [theme.breakpoints.up('lg')]: {
      width: 530,
      height: 400,
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
  const [projectType, setProjectType] = useState('');
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
                    <TabPanel value={value} index={0}>
                      <br />
                      <a className={classes.links} href={href} target="_blank">
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
                          Go To Site >>
                        </a>
                      </h4>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Grid container className={classes.tab}>
                        <Grid item xs={12} md={1}>
                          <DashboardIcon className={classes.icon} />
                        </Grid>
                        <Grid item xs={12} md={11}>
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
                              Visit the repository >>
                            </a>
                          </h5>
                        </Grid>
                      </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <div className={classes.dprocess}>
                        <Grid
                          container
                          id="portfolio"
                          className={classes.framesContainer}
                        >
                          <Grid item xs={12} md={1}>
                            <PhotoLibraryIcon className={classes.icon} />
                          </Grid>
                          <Grid item xs={12} md={11}>
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
                                  <img
                                    className={classes.frames}
                                    src={styleTiles}
                                  />
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
                                  <img className={classes.frames} src={lofiD} />
                                  <h5 className={classes.titleBar}>
                                    LoFi Desktop wireframes
                                  </h5>
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
                                  <img className={classes.frames} src={lofiM} />
                                  <h5 className={classes.titleBar}>
                                    LoFi Mobile wireframes
                                  </h5>
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
                                  <img className={classes.frames} src={hifiD} />
                                  <h5 className={classes.titleBar}>
                                    HiFi Desktop wireframes{' '}
                                  </h5>
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
                                  <img className={classes.frames} src={hifiM} />
                                  <h5 className={classes.titleBar}>
                                    HiFi Mobile wireframes
                                  </h5>
                                </div>
                              </GridListTile>
                            </Grid>

                            {/*     EMPTY Box*/}
                            <Grid
                              item
                              xs={12}
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
