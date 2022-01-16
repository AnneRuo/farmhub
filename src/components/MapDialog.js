import React, { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const MapDialog = ({btnTxt, farm, id}) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  // Not a good solution, Google Maps API key and location from database would be better
  const locations = {
    1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212971.1364656444!2d24.20293058364727!3d60.269299232748736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468dec163e312e0d%3A0xa00b553b98e1010!2s02880%20Veikkola!5e0!3m2!1sfi!2sfi!4v1642183858982!5m2!1sfi!2sfi",
    2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1407393.1079348759!2d23.090546126077285!3d61.91692690146424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469208e3444a0ecb%3A0x2600b5523c1904f1!2sViikki%2C%2000790%20Helsinki!5e0!3m2!1sfi!2sfi!4v1642183972040!5m2!1sfi!2sfi",
    3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164192.2499748957!2d22.48453723936861!3d61.38744047802481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf554593da5d%3A0x6adfe3bd1e0b22c0!2sTampere!5e0!3m2!1sfi!2sfi!4v1642184026303!5m2!1sfi!2sfi",
    4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615224.0104986454!2d24.302398403840453!3d60.52416217304011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bced0293515%3A0x1700e2273aff4e3e!2sEtel%C3%A4esplanadi%2C%20Helsinki!5e0!3m2!1sfi!2sfi!4v1642184087300!5m2!1sfi!2sfi",
  }

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
   useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen("paper")}>
        {btnTxt}
      </Button>
      <Dialog 
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        width="600px"
        height="500px"
        maxWidth={'md'} 
      >
        <DialogTitle id="scroll-dialog-title">{farm}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
              <div>
              <iframe 
              src={locations[id]}
              width="600"
              height="450"
              style={{ border: "0" }}
              loading="lazy">
              </iframe>
              </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MapDialog;

MapDialog.propTypes = {
    btnTxt: PropTypes.string,
    farm: PropTypes.string,
    location: PropTypes.string,
    id: PropTypes.string,
  }