import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Typography } from '@mui/material';
import { setDialog } from '../../store/slice/application.slice';
import MTableHeader from '../../components/MTableHeader';
import MTableBody from '../../components/MTableBody';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170, align: 'center' },
  { id: 'nome', label: 'Nome', minWidth: 170, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
  { id: 'telefone', label: 'Telefone', minWidth: 170, align: 'center' },
  { id: 'data_nascimento', label: 'Data nascimento', minWidth: 170, align: 'center' },
  { id: 'opcoes', label: 'Opções', minWidth: 170, align: 'center' }
];

const TableFuncionarios = () => {
  const {funcionarios} = useAppSelector(state => state.funcionario);

  const dispatch = useAppDispatch();

  const handleDelete = (id) => {
    dispatch(setDialog({visible: true, title: 'Deseja realmente excluir?', id:id}));
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography 
        style={{ fontWeight: 600 }}
        variant="h4"
        align='left'
        sx={{m: 1}}
      >
        Funcionários
      </Typography>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <MTableHeader columns={columns}/>
          <MTableBody funcionarios={funcionarios} handleDelete={handleDelete}/>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default TableFuncionarios;