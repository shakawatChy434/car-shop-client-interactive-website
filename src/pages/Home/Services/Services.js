import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://boiling-reaches-79167.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

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
                        services.slice(0, 6).map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;