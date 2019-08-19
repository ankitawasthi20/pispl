import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import Login from './Login';

const Main=()=>{
    return <div>
        <Paper  style={{width:250,zindex:1,margin:3}}>

            <Login/>

        </Paper>

    </div>

}
export default Main