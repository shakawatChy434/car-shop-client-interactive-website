import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';



/* Create Fake Data For Servicess */
const services = [
    {
        id: 1,
        name: 'ACURA ILX 2021',
        price: 21000,
        year: 2021,
        race: '18/100',
        type: 'Automatic',
        img: 'https://i.ibb.co/pwShTNX/download.jpg'
    },
    {
        id: 2,
        name: 'CHEVROLET21',
        price: 23000,
        year: 2021,
        race: '18/100',
        type: 'Automatic',
        img: 'https://i.ibb.co/hZCKRQp/download-1.jpg'
    },
    {
        id: 3,
        name: 'TRAILBLAXAR21',
        price: 28000,
        year: 2021,
        race: '18/100',
        type: 'Automatic',
        img: 'https://i.ibb.co/PWdGHnV/download-2.jpg'
    },
    {
        id: 4,
        name: 'ACURA ILX 2021',
        price: 25000,
        year: 2021,
        race: '18/100',
        type: 'Manual',
        img: 'https://i.ibb.co/XpRHJby/download-3.jpg'
    },
    {
        id: 5,
        name: 'TOYOTA AVALON',
        price: 58000,
        year: 1990,
        race: '18/100',
        type: 'Manual',
        img: 'https://i.ibb.co/P4ck3kM/download-5.jpg'
    },
    {
        id: 6,
        name: 'ACURA ILX 2021',
        price: 28000,
        year: 1996,
        race: '18/100',
        type: 'Manual',
        img: 'https://i.ibb.co/23LnYqy/footer1.jpg'
    },
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, py: 10 }}>
            <Container>
                <Typography
                    sx={{ fontWeight: 'bold', m: 2 }}
                    variant="h4" component="div">
                    RECENT
                </Typography>
                <Typography
                    sx={{ fontWeight: 'bold', mt: -7, ml: 34, color: 'orange' }}
                    variant="h4" component="div">
                    CARS
                </Typography>
                <Typography
                    sx={{ fontWeight: 'bold', m: 2, pb: 4, }}
                    variant="h6" component="div"
                    color="text.secondary">
                    Curabitur tellus leo, euismod sit amet gravida at, egestas sed commodo.
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, }}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;