import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';
import {Box, Grid} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import {addToken} from '../../../store/tokens/Actions';
import {toast} from 'react-toastify';
import './Navbar.css';

function Navbar(){

    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    function goLogout(){
        dispatch(addToken(''))
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    let navBarComponent;

    if (token !== '') {
      navBarComponent = (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Grid container justifyContent="space-between">
              <Box style={{ cursor: 'pointer' }}>
                <Typography variant="h5" color="inherit">
                  BlogPessoal Cris
                </Typography>
              </Box>
  
              <Box display="flex" justifyContent="start">
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Link to="/home" style={{ color: 'black' }}>
                    <Typography variant="h6" color="inherit">
                      Home
                    </Typography>
                  </Link>
                </Box>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Link to="/posts" style={{ color: 'black' }}>
                    <Typography variant="h6" color="inherit">
                      Postagens
                    </Typography>
                  </Link>
                </Box>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Link to="/temas" style={{ color: 'black' }}>
                    <Typography variant="h6" color="inherit">
                      Temas
                    </Typography>
                  </Link>
                </Box>
                <Box mx={1} style={{ cursor: 'pointer' }}>
                  <Link to="/formularioTema" style={{ color: 'black' }}>
                    <Typography variant="h6" color="inherit">
                      Cadastrar tema
                    </Typography>
                  </Link>
                </Box>
                <Box mx={1} style={{ cursor: 'pointer', color:'black' }} onClick={goLogout}>
                  <Typography variant="h6" color="inherit">
                    Logout
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      );
    }
  
    return( 
      <>
        {navBarComponent}
      </>
    );
  }
  
  export default Navbar;