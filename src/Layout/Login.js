import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login=()=>{
    return <div>
        <TextField
    id="outlined-email-input"
    label="User Name"  
    type="email"
    name="UserName"
    
    margin="normal"
    variant="outlined"/>

<TextField
    id="outlined-email-input"
    label="Password"  
    type="email"
    name="Password"
    
    margin="normal"
    variant="outlined"/>

<Button variant="contained" color="primary" >
        Login
      </Button>
      <Button variant="contained" color="secondary" >
        Register
      </Button>

    </div>
}

export default Login
