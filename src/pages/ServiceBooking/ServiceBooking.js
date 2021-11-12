import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


const ServiceBooking = () => {
    const { id, name, img } = useParams();

    return (
        < Card sx={{ maxWidth: 392, mt: 5, mx: 'auto', py: 10, }
        }>
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt="Motors"
            />
            <CardContent
                sx={{ ml: '10px', }}
            >
                <Typography variant="h6" color="text.secondary">
                    Id : {id} <br />
                    Name: {name}
                </Typography>
            </CardContent>

            <NavLink
                style={{ textDecoration: 'none', }}
                to="/home">
                <Button
                    sx={{ color: 'white', m: 1, py: 1, px: 3, textAlign: 'left', }}
                    variant="contained">Back</Button>
            </NavLink>
        </Card >
    )
};
export default ServiceBooking;