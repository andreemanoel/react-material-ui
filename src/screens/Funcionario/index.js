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
import { useAppSelector } from '../../store/hooks';
import { Typography } from '@material-ui/core';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'nome', label: 'Nome', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'telefone', label: 'Telefone', minWidth: 170 },
  { id: 'data_nascimento', label: 'Data nascimento', minWidth: 170 }
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const {funcionarios} = useAppSelector(state => state.funcionario);

  console.log(funcionarios);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <Typography variant="h3" align='left'>
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
              .map((func) => {
                return (
                  <TableRow tabIndex={-1} key={func.id}>
                    <TableCell key={func.id}>
                      {func.id}
                    </TableCell>
                    <TableCell key={func.id}>
                      {func.nome}
                    </TableCell>
                    <TableCell key={func.id}>
                      {func.contato.email}
                    </TableCell>
                    <TableCell key={func.id}>
                      {func.contato.telefone}
                    </TableCell>
                    <TableCell key={func.id}>
                      {moment(func.data_nascimento).format('DD/MM/YYYY')}
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