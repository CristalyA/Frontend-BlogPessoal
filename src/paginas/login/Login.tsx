import React, {useState, useEffect, ChangeEvent} from "react";
import {Link, useNavigate } from 'react-router-dom';
import {Box, Grid, Typography, TextField, Button} from '@mui/material';
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import './Login.css'

function Login(){

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id:0,
        nome:'',
        usuario:'',
        senha:'',
        foto:'',
        token:''
    })

    let navigate = useNavigate();
    const [token,setToken] = useLocalStorage('token');


    function updateModel(event:ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
    }

    async function logar(event:ChangeEvent<HTMLFormElement>){
        event.preventDefault();
        try{
            await login (`/usuarios/logar`,userLogin, setToken)

            alert('Usuário logado com sucesso!');
        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar! ');
        }
    }

    useEffect(()=>{
        if(token !== ''){
            navigate('/home')
        }
    },[token]);

    return (
<Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={logar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) =>updateModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem conta ?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                            </Link>
                        </Box>
            </Box>
</Grid>
    <Grid xs={6} className='imagem'>

    </Grid>
</Grid>
    );
}
export default Login;