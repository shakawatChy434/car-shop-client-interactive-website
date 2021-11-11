import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, } from "react-router-dom";

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CARS CORNER
                    </Typography>
                    {/* Create Navigation Link */}
                    <Link to="/home">
                        <Button style={{ textDecoration: 'none', color: 'white', margin: 0, border: 0, }} color="inherit">Home</Button>
                    </Link>
                    <Link to="/product">
                        <Button style={{ textDecoration: 'none', color: 'white', }} color="inherit">Product</Button>
                    </Link>
                    <NavLink to="/login">
                        <Button style={{ textDecoration: 'none', color: 'white', }} color="inherit">Login</Button>
                    </NavLink>

                    {/* {user?.email ? (
                        <Button onClick={logOut} color="inherit">Logout</Button>
                    ) : (
                        <NavLink to="/login">
                            <Button style={{ textDecoration: 'none', color: 'white', }} color="inherit">Login</Button>
                        </NavLink>
                    )
                    } */}

                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;