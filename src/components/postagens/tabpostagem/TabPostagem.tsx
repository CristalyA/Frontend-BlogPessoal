import React, {useState} from 'react';
import {AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import {TabContext, TabPanel} from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import App from '../../../App';

function TabPostagem(){
    const [value,setValue] = useState('1')

    function handleChange (event:React.ChangeEvent<{}>, newValue:string){
        setValue(newValue);
        
    }

    return (
        <>
        <TabContext value={value}>
        <AppBar position='static'>
            <Tabs centered indicatorColor='secondary' onChange={handleChange}>
                <Tab label='Todas as postagens' value='1'/>
                <Tab label='Sobre-nós' value='2'/>
            </Tabs>
        </AppBar>
        <TabPanel value='1'>
            <Box display='flex' flexWrap='wrap' justifyContent='textPrimary' component='h5'>
                <ListaPostagem/>
            </Box>
        </TabPanel>

        <TabPanel value='2'>
            <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className='titulo'>Sobre-nós</Typography>
            <Typography variant='body1' gutterBottom color='textPrimary' align='justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem minus id nam nisi eaque officiis eum, debitis numquam voluptatibus necessitatibus quo perferendis placeat optio blanditiis perspiciatis eos error cum. Rem?</Typography>
        </TabPanel>
        </TabContext>
        </>
    );
}
export default TabPostagem;