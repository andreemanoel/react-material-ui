import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setDialog } from '../store/slice/application.slice';
import { deleteFunc } from '../store/thunks/funcionario.thunk';


const MDialog = () => {
  const dispatch = useAppDispatch();

  const { dialog } = useAppSelector(state => state.application)

  const handleClose = () => {
    dispatch(setDialog({visible: false, title: '', id: null}));
  };

  const handleDelete = () => {
    dispatch(deleteFunc(dialog.id));
    window.location.reload();
  }

  return (
      <Dialog
        open={dialog.visible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title" >
          {dialog.title}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDelete} color="error">Confirmar</Button>
        </DialogActions>
      </Dialog>
  );
}

export default MDialog;