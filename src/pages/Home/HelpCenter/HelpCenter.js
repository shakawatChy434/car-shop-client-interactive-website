import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { BsMenuButtonWide } from 'react-icons/bs';
import { BiMessageRoundedEdit } from 'react-icons/bi';
import './HelpCenter.css'

const HelpCenter = () => {
    return (
        <Box className="helpCenter-bg" sx={{ flexGrow: 1, pb: 15, textAlign: 'center', }}>
            <Container>
                <Grid sx={{ mt: 0, mx: 'auto', textAlign: 'center', }} container spacing={5}>
                    <Grid item xs={8} lg={5} >
                        <Grid sx={{ border: 1, borderRadius: 4, borderColor: 'grey.300', bgcolor: 'white', py: 15, px: 10, m: 2, }} container wrap="nowrap" spacing={2}>
                            <Grid item >
                                <Avatar><BsMenuButtonWide /></Avatar>
                            </Grid>
                            <Grid item xs >
                                <Typography

                                    sx={{ mt: 0, mx: 'auto', textAlign: 'left', fontWeight: 700, fontSize: 17, }}
                                    variant="h6"
                                    gutterBottom
                                    component="div">
                                    WIDE RANGE OF BRANDS
                                </Typography>
                                <Typography
                                    sx={{ mt: 0, mx: 'auto', textAlign: 'left', }}
                                    variant="body1"
                                    gutterBottom>
                                    With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Second Cart */}
                    <Grid item xs={8} lg={5} >
                        <Grid sx={{ border: 1, borderRadius: 4, bgcolor: 'warning.main', borderColor: 'grey.300', py: 15, px: 10, m: 2, }} container wrap="nowrap" spacing={2}>
                            <Grid item >
                                <Avatar><BiMessageRoundedEdit /></Avatar>
                            </Grid>
                            <Grid item xs >
                                <Typography

                                    sx={{ mt: 0, mx: 'auto', textAlign: 'left', fontWeight: 700, fontSize: 17, }}
                                    variant="h6"
                                    gutterBottom
                                    component="div">
                                    TRUSTED BY THOUSANDS
                                </Typography>
                                <Typography
                                    sx={{ mt: 0, mx: 'auto', textAlign: 'left', }}
                                    variant="body1"
                                    gutterBottom>
                                    10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default HelpCenter;