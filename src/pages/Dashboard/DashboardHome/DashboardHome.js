import { Grid } from '@mui/material';
import * as  React from 'react';
import Bookings from '../Bookings/Bookings';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <Bookings />
            </Grid>
            {/* <Grid item xs={8}>
                Show the bookings
                <Products />
            </Grid> */}
        </Grid>
    );
};

export default DashboardHome;