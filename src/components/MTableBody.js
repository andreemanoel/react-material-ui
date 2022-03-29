import { BorderColor, DeleteForever } from '@material-ui/icons';
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material';
import moment from 'moment';
import React from 'react';

const MTableBody = ({funcionarios, handleDelete, handleUpdate}) => {
  return (
    <TableBody>
      {funcionarios 
        .map((func) => {
          return (
            <TableRow tabIndex={-1} key={func.id} >
              <TableCell key={func.id} align="center">
                {func.id}
              </TableCell>
              <TableCell key={func.nome} align="center">
                {func.nome}
              </TableCell>
              <TableCell key={func.contato.email} align="center">
                {func.contato.email}
              </TableCell>
              <TableCell key={func.contato.telefone} align="center">
                {func.contato.telefone}
              </TableCell>
              <TableCell key={func.data_nascimento} align="center">
                {moment(func.data_nascimento).format('DD/MM/YYYY')}
              </TableCell>
              <TableCell key={`button${func.id}`} align="center">
                <IconButton onClick={() => handleUpdate(func.id)}>
                  <BorderColor color="primary" />
                </IconButton>
                <IconButton onClick={() => handleDelete(func.id)}>
                  <DeleteForever color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  )
}

export default MTableBody;