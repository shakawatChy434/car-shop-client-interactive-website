import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ButtonBase, Container, Typography } from '@mui/material';
import videoPlayer from '../../../images/video-img/video-play-icon-9.jpg'
import { styled } from '@mui/system';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const WellcomeArea = () => {
    return (
        <Box sx={{ flexGrow: 1, pt: 10, pb: 10, }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12} >
                        <Typography
                            sx={{ fontWeight: 'bold' }}
                            variant="h4"
                            component="div"
                            gutterBottom>
                            WELCOME TO
                        </Typography>
                        <Typography
                            sx={{ fontWeight: 'bold', color: 'red', mt: -6.5, ml: 52, }}
                            variant="h4"
                            component="div"
                            gutterBottom>
                            MOTORS
                        </Typography>
                        <Typography
                            sx={{ fontStyle: 'oblique' }}
                            variant="body1"
                            gutterBottom
                        >
                            With specialists on hand to help with any part of the car shopping or vehicle ownership experience, Motors provides financing, <br /> car service and a great selection of vehicles for luxury car shoppers in Chicago, IL. Motors is ultimate Car Dealer, <br />
                            Automotive, Auto Dealer WordPress theme.
                        </Typography>

                        <ButtonBase sx={{ width: 100, height: 100, mt: 3, }}>
                            <Img alt="complex" src={videoPlayer} />
                        </ButtonBase>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default WellcomeArea;