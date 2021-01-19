import React, { useState } from 'react';
import { recommendations } from '../arrays';

//Material UI
import { makeStyles, Modal, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  openModalBtn: {
    color: 'turquoise',
    fontSize: '1.5rem',
    padding: '4% 2% 2% 0%',
    fontWeight: 'bold',
    border: 'none',
    backgroundColor: 'transparent',
    marginLeft: '0%',
  },
  modalHeader: {
    background: '#333333',
    width: '50%',
    height: '50px',
    padding: '1%',
    textAlign: 'left',
    color: 'white',
    margin: 'auto',
    marginTop: '20%',
  },
  modalBody: {
    padding: '3%',
    backgroundColor: 'white',
    width: '50%',
    margin: 'auto',
    //listStyleType: 'none'
  },
  modalFooter: {
    background: 'white',
    height: '50px',
    width: '50%',
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
}));

export default function ReadMore() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (id) => {
    setOpen(true);
    alert(id);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //loop through object array
  const listItems = recommendations.map((use, i) => (
    <div key={use.id}>
      <h2 className={classes.h2}>{use.title}</h2>
      <h3 name={use.title} className={classes.text}>
        {use.text}
      </h3>
    </div>
  ));
  const btnIds = recommendations.map((use, i) => (
    <div key={i}>{use.title}</div>
  ));

  return (
    <div>
      <button
        id={btnIds}
        className={classes.openModalBtn}
        type="button"
        onClick={handleOpen}
      >
        <u>Read More</u>
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="ReadMore"
      >
        <form>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.modalHeader}>
                <h4 className={classes.h4}>Read More</h4>
              </div>

              <div className={classes.modalBody}>{listItems}</div>
              <div className={classes.modalFooter}>
                <button className={classes.btnCancel} onClick={handleClose}>
                  Close
                </button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Modal>
    </div>
  );
}
