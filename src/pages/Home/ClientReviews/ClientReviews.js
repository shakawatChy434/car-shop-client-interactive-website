import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ButtonBase, Container, Typography } from '@mui/material';
import './ClientReviews.css';
import footer2 from '../../../images/reviws-img/review2.jfif'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const ClientReviews = () => {
    return (
        <Box className="bg-reviews" sx={{ flexGrow: 1, pt: 5, pb: 20, }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12}>
                        <ButtonBase>
                            <Img sx={{ width: 120, height: 100, borderRadius: '50%', border: 1, }} alt="complex" src={footer2} />
                        </ButtonBase>
                    </Grid>
                    <Grid
                        item xs={12} lg={3}
                        sx={{ mt: 0, mx: 'auto', textAlign: 'center', }}
                    >
                        <Typography
                            sx={{ color: 'White', fontSize: '17px', }}
                            variant="h6"
                            display="block"
                            gutterBottom
                        >
                            DONALD SIMPSON
                        </Typography>
                        <Typography
                            sx={{ color: 'White', fontSize: '13px', }}
                            variant="button"
                            display="block"
                            gutterBottom
                        >
                            Customer
                        </Typography>
                    </Grid>
                    <Grid
                        item xs={12} lg={12}
                    >
                        <Typography
                            sx={{ color: 'White', fontSize: '13px', }}
                            variant="body1"
                            gutterBottom>
                            "Fusce interdum ipsum egestas urna amet fringilla, et placerat ex venenatis.  Aliquet luctus pharetra. <br /> Proin sed fringilla lectus... ar sit amet tellus in mollis. Proin nec egestas nibh,  eget egestas urna. <br />Phasellus sit amet vehicula nunc. In hac habitasse platea dictumst."
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ClientReviews;

