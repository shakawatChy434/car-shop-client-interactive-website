import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';




const SearchInventory = () => {
    return (
        <Box sx={{ flexGrow: 1, }}>
            <Container sx={{ bgcolor: 'black', pb: 10, pt: 5, mt: -15, }}>
                <Typography
                    sx={{ textAlign: 'center', color: 'white', fontWeight: 700, pb: 2, }}
                    variant="h4"
                    gutterBottom component="div">
                    <AiOutlineCar style={{ marginRight: '20px' }} /> Search Inventory
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3}>
                        <TextField
                            sx={{ bgcolor: 'white', borderRadius: 1, }}
                            defaultValue="Choose Year"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <TextField
                            sx={{ bgcolor: 'white', borderRadius: 1, }}
                            defaultValue="Choose Make"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <TextField
                            sx={{ bgcolor: 'white', borderRadius: 1 }}
                            defaultValue="Choose Model"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={2}>
                        <NavLink
                            style={{ textDecoration: 'none', }}
                            to="/product">
                            <Button
                                sx={{ px: 3, border: 1, fontWeight: 700, }}
                                variant="outlined">
                                <BsSearch style={{ marginRight: '20px' }} /> Search
                            </Button>
                        </NavLink>


                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default SearchInventory;