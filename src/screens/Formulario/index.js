import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from '@mui/material';
import { useAppDispatch } from '../../store/hooks';
import { enviarFunc } from '../../store/thunks/funcionario.thunk';
import Alerts from '../../components/Alerts'

const Formulario = () => {
  const dispatch = useAppDispatch();

  const [erros, setErros] = React.useState({
    nome: true,
    email: true,
    telefone: true,
    data: true
  });
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [data, setData] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const verificarErro = () => {
    let flag = false;
    if(nome === '') {setErros({...erros, nome: true}); flag = true;}
    if(email === '') {setErros({...erros, email: true}); flag = true;}
    if(telefone === '') {setErros({...erros, telefone: true}); flag = true;}
    if(data === '') {setErros({...erros, data: true}); flag = true;}

    console.log(erros);
    if(flag){
      return true;
    }else {
      return false;
    }
  }
  const handleEnviar = () => {
    if(!verificarErro()){
      dispatch(enviarFunc({nome, email, telefone, data}));
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
      setNome('');
      setEmail('');
      setTelefone('');
      setData('');
    }
  }
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} >
      <Typography
        style={{ fontWeight: 600 }}
        variant="h4"
        align='left'
        sx={{m: 1}}
      >
        Novo funcionário
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <div style={{display: 'flex'}}>
          <TextField
            error={erros.nome}
            id="nome"
            label="Nome"
            value={nome}
            onChange={(event) => {setNome(event.target.value); setErros({...erros, nome: false});}}
            sx={{m: 1}}
            fullWidth
          />
          <TextField
            error={erros.email}
            id="email"
            label="Email"
            value={email}
            onChange={(event) => {setEmail(event.target.value); setErros({...erros, email: false})}}
            sx={{m: 1}}
            fullWidth
          />
        </div>
        <div style={{display: 'flex'}}>
          <TextField
            error={erros.telefone}
            id="telefone"
            label="Telefone"
            value={telefone}
            onChange={(event) => {setTelefone(event.target.value); setErros({...erros, telefone: false})}}
            sx={{m: 1}}
            fullWidth
          />
          <TextField
            error={erros.data}
            type="date"
            id="data"
            label="Data Nascimento"
            value={data}
            onChange={(event) => {setData(event.target.value); setErros({...erros, data: false})}}
            sx={{m: 1}}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </div>
      </Box>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" sx={{m: 1}} onClick={handleEnviar}>
          Enviar
        </Button>
      </div>
      <Alerts message="Cliente cadastrado com sucesso!" open={open} setOpen={setOpen}/>
    </Paper>
  );
}

export default Formulario;