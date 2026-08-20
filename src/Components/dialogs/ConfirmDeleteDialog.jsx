import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const ConfirmDeleteDialog = ({ open, handelClose, deleteHandler }) => {
    return (
        <Dialog open={open} onClose={handelClose} >
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this group?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handelClose}>No</Button>
                <Button onClick={deleteHandler} color='error'>Yes</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDeleteDialog