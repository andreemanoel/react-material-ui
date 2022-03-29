import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { enviarFunc, searchFuncionario, updateFunc } from '../../store/thunks/funcionario.thunk';
import Alerts from '../../components/Alerts'
import { setDataNascimento, setEmail, setNome, setTelefone, setReset } from '../../store/slice/funcionario.slice';
import { IMaskInput } from 'react-imask';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(00) 00000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { value } })}
    />
  );
});

const Formulario = (props) => {
  const dispatch = useAppDispatch();

  const {getFuncionario} = useAppSelector(state => state.funcionario);

  const [message, setMessage] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    if(id){
      dispatch(searchFuncionario(id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [erros, setErros] = React.useState({
    nome: false,
    email: false,
    telefone: false,
    data: false
  });

  const [open, setOpen] = React.useState(false);

  const verificarErro = () => {
    let flag = false;
    if(getFuncionario.nome === '') {setErros({...erros, nome: true}); flag = true;}
    if(getFuncionario.contato.email === '') {setErros({...erros, email: true}); flag = true;}
    if(getFuncionario.contato.telefone === '') {setErros({...erros, telefone: true}); flag = true;}
    if(getFuncionario.data_nascimento === '') {setErros({...erros, data: true}); flag = true;}

    console.log(erros);
    if(flag){
      return true;
    }else {
      return false;
    }
  }

  const handleEnviar = () => {
    if(!verificarErro()){
      if(!getFuncionario.id){
        dispatch(
          enviarFunc({
            nome: getFuncionario.nome, 
            email: getFuncionario.contato.email, 
            telefone: getFuncionario.contato.telefone, 
            data_nascimento: getFuncionario.data_nascimento
          }));
          setMessage('Cliente cadastrado com sucesso!');
      }else {
        dispatch(
          updateFunc({
            id: getFuncionario.id, 
            nome: getFuncionario.nome, 
            email: getFuncionario.contato.email, 
            telefone: getFuncionario.contato.telefone, 
            data_nascimento: getFuncionario.data_nascimento
          }));
          setMessage('Cliente atualizado com sucesso!');
      }
      setOpen(true);
      dispatch(setReset());
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }

  const handleChange = (event) => {
    dispatch(setTelefone(event.target.value)); 
    setErros({...erros, telefone: false});
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} >
      <Typography
        style={{ fontWeight: 600 }}
        variant="h4"
        align='left'
        sx={{m: 1}}
      >
        {getFuncionario.id ? 'Editar funcionário' : 'Novo funcionário'}
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
            value={getFuncionario.nome}
            onChange={(event) => {dispatch(setNome(event.target.value)); setErros({...erros, nome: false});}}
            sx={{m: 1}}
            fullWidth
          />
          <TextField
            error={erros.email}
            id="email"
            label="Email"
            value={getFuncionario.contato.email}
            onChange={(event) => {dispatch(setEmail(event.target.value)); setErros({...erros, email: false})}}
            sx={{m: 1}}
            fullWidth
          />
        </div>
        <div style={{display: 'flex'}}>
          <TextField
            error={erros.telefone}
            id="telefone"
            label="Telefone"
            name="telefone"
            value={getFuncionario.contato.telefone}
            onChange={handleChange}
            sx={{m: 1}}
            fullWidth
            InputProps={{
              inputComponent: TextMaskCustom
            }}
          />
          <TextField
            error={erros.data}
            type="date"
            id="data"
            label="Data Nascimento"
            value={getFuncionario.data_nascimento}
            onChange={(event) => {dispatch(setDataNascimento(event.target.value)); setErros({...erros, data: false})}}
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
        {`${getFuncionario.id ? 'Atualizar' : 'Cadastrar'}`}
        </Button>
      </div>
      <Alerts message={message} open={open} setOpen={setOpen}/>
    </Paper>
  );
}

export default Formulario;