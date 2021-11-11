import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Login.css'


const Login = () => {
    // Add a Form Handler
    const handleLogin = (e) => {
        e.preventDefault();
    }
    return (
        <Box
            className="login-bg"
            sx={{ flexGrow: 1, py: 5 }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid item
                        sx={{
                            mt: 12, mx: 'auto',
                        }}
                        xs={6} md={6}>
                        <Typography
                            sx={{ fontWeight: 600, }}
                            variant="h5"
                            gutterBottom
                            component="div">
                            Log-In
                        </Typography>
                        <form onSubmit={handleLogin}>

                            <TextField
                                sx={{ width: '75%', m: 1, textAlign: 'center', }}
                                id="standard-basic"
                                label=" Your Email"
                                // set a name & type
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"

                                // onBlur={handleOnBlur}

                                variant="standard" /> <br />
                            <TextField
                                sx={{ width: '75%', m: 1, }}
                                id="standard-basic"
                                label="password"
                                // set a name  & type password
                                type="password"
                                name="password"
                                // onBlur={handleOnBlur}
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
                            <p

                            > <hr></hr> </p>
                            {/* Using Google Provider */}
                            <Button
                                // onClick={handleGoogleSingIn}
                                variant="contained">Log-In with google</Button>
                        </form>
                    </Grid>


                </Grid>
            </Container>
        </Box>
    );
};

export default Login;