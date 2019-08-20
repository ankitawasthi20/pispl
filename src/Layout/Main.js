import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import Login from './Login';
import Box from '@material-ui/core/Box';


const Main=()=>{
    return <Box display="flex" flexDirection="row-reverse">
                <Paper  style={{width:250,height:300,zindex:1,margin:3}}>
                    <Login/>
                </Paper>
             </Box>

}
export default Main