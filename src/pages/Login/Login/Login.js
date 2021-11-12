import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    // Work No:03 (State Declar )
    const [loginData, setLoginData] = useState([]);
    //call useAuthe & using this registerUser,
    const { user, logInUser, loading, authError, singInUsingGoogle } = useAuth();
    // Redirect to exact location;
    const location = useLocation();
    const history = useHistory()


    // Work No:02 Handler for input field No :02
    const handleOnBlur = (e) => {
        const feild = e.target.name;
        const value = e.target.value;
        // console.log(feild, value);
        const newLoginData = { ...loginData };
        newLoginData[feild] = value;
        setLoginData(newLoginData);
        // e.preventDefault();
    }
    // Work No:01 Handler No :01 
    const handleLogin = (e) => {
        logInUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    // GoogleSing-In Handler
    const handleGoogleSingIn = () => {
        singInUsingGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 9, mx: 'auto', py: 10 }} item xs={12} sm={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div"> Login </Typography>
                    {!loading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            // set a name & type
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}

                            variant="standard" /> <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="password"
                            // set a name  & type password
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" /> <br />

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit"
                        >Login</Button>
                        {/* Added a Register Button */}
                        <NavLink to="/register" style={{ textDecoration: 'none', }} >
                            <Button variant="text">New User ? Please Regisrer </Button>
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
                        user?.email && <Alert severity="success">Log-In successfuly.</Alert>
                    }
                    {/* set a error message by using MUI alert */}
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;