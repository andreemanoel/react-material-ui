import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button, Typography } from '@mui/material';
import { setDialog } from '../../store/slice/application.slice';
import MTableHeader from '../../components/MTableHeader';
import MTableBody from '../../components/MTableBody';
import fetchFuncionario from '../../store/thunks/funcionario.thunk';
import { useHistory } from 'react-router-dom';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170, align: 'center' },
  { id: 'nome', label: 'Nome', minWidth: 170, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
  { id: 'telefone', label: 'Telefone', minWidth: 170, align: 'center' },
  { id: 'data_nascimento', label: 'Data nascimento', minWidth: 170, align: 'center' },
  { id: 'opcoes', label: 'Opções', minWidth: 170, align: 'center' }
];

const TableFuncionarios = (props) => {
  const dispatch = useAppDispatch();

  const history = useHistory();

  const {funcionarios} = useAppSelector(state => state.funcionario);

  const handleDelete = (id) => {
    dispatch(setDialog({visible: true, title: 'Deseja realmente excluir?', id:id}));
  }

  const handleUpdate = (id) => {
    history.push(`/adicionar/${id}`);
  }

  const handleNovoFunc = () => {
    history.push(`/adicionar`);
  }

  React.useEffect(() => {
    dispatch(fetchFuncionario());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <MTableBody funcionarios={funcionarios} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </Table>
      </TableContainer>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" sx={{m: 1}} onClick={handleNovoFunc}>
          Novo funcionário
        </Button>
      </div>
    </Paper>
  );
}

export default TableFuncionarios;