import React, { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Login from "./Login";

const LoginForm = ({btnTxt, setIsLoggedIn}) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

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
        width="300px"
        height="300px"
        maxWidth={'md'} 
      >
        <DialogContent className="login-form" dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <form className="form">
              <Login isloggedIn={setIsLoggedIn}/>
            </form>
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}

export default LoginForm;

LoginForm.propTypes = {
    btnTxt: PropTypes.string,
    setIsLoggedIn: PropTypes.boolean,
}