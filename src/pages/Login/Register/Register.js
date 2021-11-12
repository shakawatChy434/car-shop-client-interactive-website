import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    // Copy From Login part & edite this 
    // Work No:03 (State Declar )
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    //call useAuthe & using this registerUser,
    const { user, registerUser, singInUsingGoogle, loading, authError } = useAuth();

    // Work No:02 Handler for input field No :02
    const handleOnBlur = (e) => {
        const feild = e.target.name;
        const value = e.target.value;
        // console.log(feild, value);
        const newLoginData = { ...loginData };
        // console.log(newLoginData);
        newLoginData[feild] = value;
        setLoginData(newLoginData);
        // e.preventDefault();
    }
    // Work No:01 Handler No :01 
    const handleLogin = (e) => {
        //Add a condistion to check password
        if (loginData.password !== loginData.password2) {
            alert('Your Password does not match')
            return
        }
        // After useAuth Activities set email & password
        registerUser(loginData.email, loginData.password, loginData.name, history);
        // alert("hello");
        e.preventDefault();
    }
    // GoogleSing-In Handler
    const handleGoogleSingIn = () => {
        singInUsingGoogle();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 9, mx: 'auto', py: 10 }} item xs={12} sm={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div"> Create  a account </Typography>
                    {!loading &&
                        <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                // set a name 
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" /> <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your email"
                                // set a email 
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" /> <br />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="password"
                                // set a name  & type password
                                name="password"
                                type="password"
                                onBlur={handleOnBlur}
                                variant="standard" /> <br />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="re-type password"
                                // set a name  & type password
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" /> <br />

                            <Button
                                sx={{ width: '75%', m: 1 }}
                                variant="contained"
                                type="submit"
                            >Register</Button>
                            {/* Added a Register Button */}
                            <NavLink to="/login" style={{ textDecoration: 'none', }} >
                                <Button variant="text">Already have an account ? Please Login </Button>
                            </NavLink>

                            <p> <hr></hr> </p>
                            {/* Using Google Provider */}
                            <Button onClick={handleGoogleSingIn} variant="contained">Log-In with google</Button>
                        </form>
                    }
                    {/* set a loader by using MUI progress */}
                    {
                        loading && <CircularProgress />
                    }
                    {/* set a success message by using MUI alert */}
                    {
                        user?.email && <Alert severity="success">User created successfuly.!!!!!! — check it out!</Alert>
                    }
                    {/* set a error message by using MUI alert */}
                    {
                        authError && <Alert severity="error">{authError} </Alert>
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;