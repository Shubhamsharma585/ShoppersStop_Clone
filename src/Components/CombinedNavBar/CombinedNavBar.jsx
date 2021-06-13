import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Home from "../../Pages/Home"
import Log from "./Log"
import Reg from "./Reg"
import NavBar from "../Navbar/NavBar"



const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: "460px",  
      backgroundColor: theme.palette.background.paper,
      border: '0px solid #000',
      borderRadius: "4px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 0, 0),
    },
    paper2: {
        width: "760px",  
        backgroundColor: theme.palette.background.paper,
        border: '0px solid #000',
        borderRadius: "4px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 0),
      },
  }));


function Combinedhome()
{

    const classes = useStyles();
    const [openlogin, setOpenlogin] = React.useState(false);
    const [openregi, setOpenregi] = React.useState(false);
  
    const handleOpenlogin = () => {
      setOpenlogin(true);
      setOpenregi(false);
    };

    const handleCloselogin = () => {
      setOpenlogin(false);
    };

    const handleOpenregi = () => {
        setOpenregi(true);
        setOpenlogin(false);
      };
    
      const handleCloseregi = () => {
        setOpenregi(false);
      };



    return(
        <div>
      

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openlogin}
        onClose={handleCloselogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={openlogin}>
          <div className={classes.paper}>
             <Log handleCloselogin={handleCloselogin} handleOpenregi={handleOpenregi}/>   
          </div>
        </Fade>
      </Modal>





      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openregi}
        onClose={handleCloseregi}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={openregi}>
          <div className={classes.paper2}>
             <Reg handleCloseregi={handleCloseregi} handleOpenlogin={handleOpenlogin}/>   
          </div>
        </Fade>
      </Modal> 


        
        <NavBar handleOpenlogin={handleOpenlogin} handleOpenregi={handleOpenregi} />



        </div>
    )
}

export default Combinedhome;  