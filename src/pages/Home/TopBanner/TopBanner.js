import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './TopBanner.css';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { AiOutlineCar } from 'react-icons/ai';

const TopBanner = () => {
    return (
        <Box  className="top-bg" sx={{ flexGrow: 1, py: 45, mb: 4 }}>
            <Container>
                <Grid container spacing={2} sx={{ my: 0, ms: 'auto', }}>
                    <Grid item xs={12} lg={12}>
                        <Typography
                            sx={{ color: 'white', fontWeight: 900, }}
                            variant="h3"
                            gutterBottom
                            component="div">
                            Marchedis-Benz AMG GT 2021
                        </Typography>
                        <Typography
                            sx={{ color: 'yellow', fontWeight: 900, }}
                            variant="h3"
                            gutterBottom
                            component="div">
                            $320
                        </Typography>
                        <Typography
                            sx={{ color: 'white', fontWeight: 900, mt: -9, ml: 23 }}
                            variant="h6"
                            gutterBottom
                            component="div">
                            /MO
                        </Typography>
                        <Typography
                            sx={{ color: 'white', py: 5 }}
                            variant="h5"
                            gutterBottom component="div">
                            FOR 36 MONTHS
                        </Typography>
                        <Button
                            sx={{ color: 'white', m: 2, py: 2, px: 3, border: 1, }}
                            variant="outlined"> <AiOutlineCar style={{ marginRight: '20px' }} />   Test Drive</Button>
                        <Button
                            sx={{ color: 'white', m: 2, py: 2, px: 5, }}
                            variant="contained">Learn More</Button>
                    </Grid >
                </Grid>
            </Container>
        </Box >
    );
};

export default TopBanner;