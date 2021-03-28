import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
<<<<<<< HEAD
import { DialogTitle } from "@material-ui/core"

function Modal({ open, handleClose, content, title }) {
=======

function Modal({ open, handleClose, content }) {
  console.log(content)
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
<<<<<<< HEAD
          <DialogTitle>{title}</DialogTitle>
=======
>>>>>>> cfa0e94fb6fd0cf2aab43a009068b3b1e650da4b
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Modal
