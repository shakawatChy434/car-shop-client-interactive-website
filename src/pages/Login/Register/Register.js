import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    // Add a Form Handler
    const handleLogin = (e) => {
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{
                    mt: 15, mx: 'auto', py: 10
                }}
                    item xs={12} sm={12} md={6}>
                    < Typography variant="h6" gutterBottom component="div" >
                        Create a new account
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            // set a name 
                            name="name"
                            type="text"
                            // onBlur={handleOnBlur}
                            variant="standard" /> <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            // set a email 
                            name="email"
                            type="email"
                            // onBlur={handleOnBlur}
                            variant="standard" /> <br />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="password"
                            // set a name  & type password
                            name="password"
                            type="password"
                            // onBlur={handleOnBlur}
                            variant="standard" /> <br />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="re-type password"
                            // set a name  & type password
                            type="password"
                            name="password2"
                            // onBlur={handleOnBlur}
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
                        <Button
                            //  onClick={handleGoogleSingIn} 
                            variant="contained">Log-In with google</Button>
                    </form>

                </Grid>



            </Grid >
        </Container >
    );
};

export default Register;