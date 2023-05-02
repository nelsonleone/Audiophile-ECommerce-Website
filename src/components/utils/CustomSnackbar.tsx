import { Snackbar, SnackbarCloseReason } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import { useState, useEffect, memo, SyntheticEvent, forwardRef } from "react"
import { Colors } from "../styled/utils";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref,
 ) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
 })

function CustomSnackbar({open,snackbarMessage}:{open:boolean,snackbarMessage:string}){
   const [openSnackbar,setOpenSnackbar] = useState(open ? true :  false)

   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway')return;
      setOpenSnackbar(false);
   }

   useEffect(() => {
      open ? setOpenSnackbar(true) : setOpenSnackbar(false)
   },[open])

   return(
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} style={{backgroundColor:Colors.DARK_ORANGE}} >
           <span style={{marginLeft:"1em"}}>{snackbarMessage}</span>
         </Alert>
      </Snackbar>
   )
}

export default memo(CustomSnackbar)