import React, { useState } from 'react';
import {
  titleArray,
  descriptionArray,
  imageArray,
  hrefArray,
  repoArray,
} from '../../arrays';

//Material UI
import { makeStyles, Modal, Grid } from '@material-ui/core';

//Images & Icons
import imgUrl from '../../../images/modalBkgd.png';

const useStyles = makeStyles((theme) => ({
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
    /* [theme.breakpoints.up('xl')]: {
      marginTop: '6%',
    }, */
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
  images: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      //paddingLeft: '13%',
    },
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
}));

export default function ReadMore() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [repo, setRepo] = useState('');
  const [href, setHref] = useState('');

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
              setDescription(descriptionArray[i]);
              setRepo(repoArray[i]);
              setHref(hrefArray[i]);
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
          aria-labelledby="ReadMore"
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
                  <h2>{title}</h2>
                  <br />
                  <br />
                  <h5>{description}</h5>
                  <br />
                  <br />
                  <h4>
                    <a className={classes.links} href={href} target="_blank">
                      Go To Site
                    </a>
                  </h4>
                  <h5>
                    <a className={classes.links} href={repo} target="_blank">
                      Visit the repository
                    </a>
                  </h5>
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
