import React, {useEffect, useState} from 'react';
import {Avatar, Grid, Paper, TextField} from '@mui/material'
import '../Login.css';
import '../button2.css';
import '../Button1.css';

function Login () {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const [submit, setSubmit] = useState({submit : false});
    const url = 'http://localhost:8080/api/auth';

    useEffect(() =>{
        const request = {'url': url, body:{"email":mail,"password":password}}
        try {
            if (submit.submit){ 
                console.log(request)
                UseFetchPOST(request);
            }
        } catch(e){
            console.log(e);
        }

    },[submit]);

    return (
        <div id = "backgroundid">
            <Grid id = "gridid" align='center'>
                <Paper elevation={10} id = "paperid">
                    <Avatar id = "avatarid">Eci Task</Avatar>
                        <p>
                            <h2 id = "h2id">Log in</h2>
                        </p>

                    <p>
                        <TextField 
                        id = "emailid" 
                        label = "Email" 
                        placeholder = "Enter your Email" 
                        value={mail} 
                        onChange={(e) => {setMail(e.target.value);}}/>
                    </p>

                    <p>
                        <TextField 
                        id = "passwordid" 
                        label = "password" 
                        value={password}  
                        placeholder = "Enter your password" 
                        type = "password"
                        onChange={(e) => {setPassword(e.target.value)}}/>
                    </p>

                    <p>
                        <button 
                        className="myButton myButton" >
                        Sign Up
                        </button>

                        <button
                        className="button button1" 
                        onClick={ () => {
                        setSubmit({submit : true})}} >
                        Log in
                        </button>
                    </p>

                </Paper>
            </Grid>
        </div>
    )
}

let UseFetchPOST = async (requestParams) => {
    let responseRequest = ''
    let dataResponse = ''
    let loading = ''
    let error = ''
        try {
            const url = requestParams.url;
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                body: JSON.stringify(requestParams.body)
            };
            
            fetch(url, requestOptions)
                .then(
                    response => response.json())
                .then(data => console.log("TOKEN " + data.token, "date exp " + data.expirationDate ))
                .then(loading = false)
        } catch(e){
            loading = false;
            error = e;
        }
        return {responseRequest,dataResponse, loading, error}
    }

export default Login;