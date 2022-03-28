import * as React from 'react';
import moment from 'moment';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IconButton, Typography } from '@material-ui/core';
import BorderColor from '@material-ui/icons/BorderColor';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { setDialog } from '../../store/slice/application.slice';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170, align: 'center' },
  { id: 'nome', label: 'Nome', minWidth: 170, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
  { id: 'telefone', label: 'Telefone', minWidth: 170, align: 'center' },
  { id: 'data_nascimento', label: 'Data nascimento', minWidth: 170, align: 'center' },
  { id: 'opcoes', label: 'Opções', minWidth: 170, align: 'center' }
];

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {funcionarios} = useAppSelector(state => state.funcionario);

  const dispatch = useAppDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id) => {
    dispatch(setDialog({visible: true, title: 'Deseja realmente excluir?', id:id}));
  }

  return (
    <>
    <Typography style={{ fontWeight: 600 }} variant="h4" align='left'>
      Funcionários
    </Typography>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {funcionarios
              .map((func, index) => {
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
                      <IconButton>
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
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={funcionarios.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}