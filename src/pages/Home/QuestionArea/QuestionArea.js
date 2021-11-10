import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailRead } from 'react-icons/md';


const QuestionArea = () => {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'warning.main', py: 3, }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={5}>
                        <Typography
                            sx={{ fontWeight: 700, }}
                            variant="h6"
                            gutterBottom
                            component="div">
                            HAVE A QUESTIONS? FEEL FREE TO ASK...
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Typography
                            sx={{ fontWeight: 700, }}
                            variant="h6"
                            gutterBottom
                            component="div">
                            <FiPhoneCall /> +1 878-9674-4455
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={3}>
                        <Typography
                            sx={{ fontWeight: 700, border: 1, py: 2, }}
                            variant="h6"
                            gutterBottom
                            component="div">
                            <MdOutlineMarkEmailRead /> FEEDBACK
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default QuestionArea;