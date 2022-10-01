import React from 'react';
import {Avatar, Grid, Paper, TextField} from '@mui/material'
import '../Login.css'
import Loginbutton from './Loginbutton';
import '../button2.css'

const Login = () => {
    return (
        <div id = "backgroundid">
            <Grid id = "gridid" align='center'>
                <Paper elevation={10} id = "paperid">
                    <Avatar id = "avatarid">Eci Task</Avatar>
                        <p>
                            <h2 id = "h2id">Log in</h2>
                        </p>
                    <p>
                        <TextField id = "emailid" label = "Email" placeholder = "Enter your Email"/>
                    </p>
                    <p>
                        <TextField id = "passwordid" label = "password" placeholder = "Enter your password" type = "password"/>
                    </p>
                    <p>
                        <button className="myButton myButton" variant = "contained">Sign Up</button>
                        <Loginbutton/>
                    </p>
                </Paper>
            </Grid>
        </div>
    )
}

export default Login;