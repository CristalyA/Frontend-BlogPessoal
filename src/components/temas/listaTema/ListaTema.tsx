import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Box } from '@mui/material';
import {Card ,CardActions, CardContent, Button , Typography} from '@material-ui/core';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import Tema from '../../../models/Tema';
import './ListaTema.css';


function ListaTema(){

    const[temas,setTemas]= useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    let navigate = useNavigate();

    useEffect(()=>{
        if(token == ''){
          toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
          navigate("/login")
        }
      }, [token])

    async function getTema(){
        await busca('/temas',setTemas,{
            headers:{
                'Authorization':token
            }
        })
    }

    useEffect(()=> {
        getTema()
    },[temas.length])

    return (
    <>
    {
        temas.map(tema =>(
        <Box m={2}>
            <Card>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom> Tema</Typography>
                    <Typography variant='h5' component='h2'>
                        {tema.descricao}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box display='flex' justifyContent='center' mb={1.5}>
                        <Link to={`/formularioTema/${tema.id}`} className='text-decorator0-none'>
                            <Box mx={1}>
                                <Button variant='contained' className='marginLeft' size='small' color='primary'> Atualizar </Button>
                            </Box>
                        </Link>
                    <Link to={`/deletarTema/${tema.id}`} className='text-decorator-none'>
                        <Box mx={1}>
                            <Button variant='contained' size='small' color='secondary'>Deletar</Button>
                        </Box>
                    </Link>
                    </Box>
                </CardActions>
            </Card>
        </Box>
      ))  }
    </>
    );
}
export default ListaTema;