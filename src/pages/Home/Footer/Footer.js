import React from 'react';
import './Footer.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { MdOutlineComment } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiTwitter, FiYoutube } from 'react-icons/fi';
import { ButtonBase, Container, Typography } from '@mui/material';

// images
import footer1 from '../../../images/footer-img/footer1.jfif'
// import footer2 from '../../../images/footer-img/footer2.jfif'
import footer3 from '../../../images/footer-img/footer3.jfif'
import footer4 from '../../../images/footer-img/footer4.jfif'
import footer6 from '../../../images/footer-img/footer6.jfif'


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


const Footer = () => {
    return (


        <Box className="footer-bg" sx={{ flexGrow: 1, textAlign: 'left', py: 10, }}>
            <Container>
                {/* First Part */}
                <Grid container spacing={3} sx={{ pb: 10 }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Typography style={{ fontSize: '15px', fontWeight: 550, color: 'yellow', }} variant="h6" gutterBottom component="div">
                            MOTORS CARS THEME
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <Typography variant="body1" gutterBottom>
                                Fusce interdum ipsum egestas urna amet fringilla, et placerat ex venenatis. Aliquet luctus pharetra. Proin sed fringilla lectus... ar sit amet tellus in mollis. Proin nec egestas nibh, eget egestas urna. Phasellus sit amet vehicula nunc. In hac habitasse platea dictumst.
                            </Typography>
                        </Typography>
                        <hr />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Typography style={{ fontSize: '15px', fontWeight: 550, color: 'white' }} variant="h6" gutterBottom component="div">
                            PHOTO GALLERY
                        </Typography>

                        <Typography>
                            <ButtonBase sx={{ width: 80, height: 80 }}>
                                <Img alt="complex" src={footer1} />
                            </ButtonBase>
                            <ButtonBase sx={{ width: 90, height: 80 }}>
                                <Img alt="complex" src={footer3} />
                            </ButtonBase>
                            <ButtonBase sx={{ width: 80, height: 80 }}>
                                <Img alt="complex" src={footer6} />
                            </ButtonBase>
                            <ButtonBase sx={{ width: 80, height: 80 }}>
                                <Img alt="complex" src={footer4} />
                            </ButtonBase>
                            <ButtonBase sx={{ width: 90, height: 80 }}>
                                <Img alt="complex" src={footer3} />
                            </ButtonBase>
                            <ButtonBase sx={{ width: 80, height: 80 }}>
                                <Img alt="complex" src={footer6} />
                            </ButtonBase>
                        </Typography>
                        <hr style={{ marginTop: 40 }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Typography style={{ fontSize: '15px', fontWeight: 550, color: 'white' }} variant="h6" gutterBottom component="div">
                            LATEST BLOG POSTS
                        </Typography>
                        <Typography>
                            Cras condimentum a elit eget sagittis.Ut dignissim sapien feugiat purus tristique, vitae...
                        </Typography> <br />
                        <Typography style={{ fontSize: '12px', fontWeight: 550, color: 'white', mt: 4, }} variant="button" display="block" gutterBottom>
                            <MdOutlineComment />   No Comments
                        </Typography>
                        <hr style={{ marginTop: 89 }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Typography style={{ fontSize: '15px', fontWeight: 550, color: 'white' }} variant="h6" gutterBottom component="div">
                            SOCIAL NETWORK
                        </Typography>
                        <Typography >
                            <FaFacebookF style={{ color: 'white', padding: 15, background: 'gray', marginLeft: 1, }} /> <FiTwitter style={{ color: 'white', padding: 15, background: 'gray', margin: 1, }} />
                            <BsInstagram style={{ color: 'white', padding: 15, background: 'gray', margin: 1, }} />
                            <AiFillLinkedin style={{ color: 'white', padding: 15, background: 'gray', margin: 1, }} />
                            <FiYoutube style={{ color: 'white', padding: 15, background: 'gray', margin: 1, }} />
                        </Typography>
                        <hr style={{ marginTop: 143 }} />
                    </Grid>
                </Grid>

                {/* Second Part */}
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Typography style={{ fontSize: '15px', fontWeight: 550, color: 'yellow', }} variant="h6" gutterBottom component="div">
                            SUBSCRIBE
                        </Typography>
                        <TextField
                            sx={{ bgcolor: 'white', borderRadius: 1 }}
                            defaultValue="Enter your email..."
                            size="small"
                        />
                        <Typography variant="overline" display="block" gutterBottom>
                            Get latest updates and offers.<br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Typography style={{ fontSize: '15px', fontWeight: 550, color: 'white', }} variant="h6" gutterBottom component="div">
                            SALES HOURS
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Monday – Friday: 09:00AM – 09:00PM <br />
                            Saturday: 09:00AM – 07:00PM <br />
                            Sunday: Closed <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Typography style={{ fontSize: '15px', fontWeight: 550, color: 'white', }} variant="h6" gutterBottom component="div">
                            SERVICE HOURS
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Monday – Friday: 09:00AM – 09:00PM <br />
                            Saturday: 09:00AM – 07:00PM <br />
                            Sunday: Closed <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <Typography style={{ fontSize: '15px', fontWeight: 550, color: 'white', }} variant="h6" gutterBottom component="div">
                            PARTS HOURS
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Monday – Friday: 09:00AM – 09:00PM <br />
                            Saturday: 09:00AM – 07:00PM <br />
                            Sunday: Closed <br />
                        </Typography>
                    </Grid>
                </Grid>
                <hr style={{ marginTop: 15 }} />

                {/* Third Part */}
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography
                            sx={{
                                mt: 6
                            }}
                            variant="overline"
                            display="block"
                            gutterBottom>
                            Copyright © 2021.MSC-Motors – Area. <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography
                            sx={{
                                mt: 4,
                            }}
                        >
                            <FaFacebookF style={{ color: 'blue', padding: 15, marginLeft: 1, }} /> <FiTwitter style={{ color: 'blue', padding: 15, margin: 1, }} />
                            <BsInstagram style={{ color: 'blue', padding: 15, margin: 1, }} />
                            <AiFillLinkedin style={{ color: 'blue', padding: 15, margin: 1, }} />
                            <FiYoutube style={{ color: 'blue', padding: 15, margin: 1, }} />
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Footer;