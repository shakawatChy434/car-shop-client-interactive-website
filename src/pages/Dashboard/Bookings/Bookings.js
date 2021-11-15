/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const Bookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = `http://localhost:7000/product?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h2>Booking List: {bookings.length}</h2>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="bookings table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name </TableCell>
                            <TableCell align="right">Year</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Race</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Pay</TableCell>
                            <TableCell align="right">Review</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookings.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right"> {row.year}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.race}</TableCell>
                                <TableCell align="right">$ {row.price} only</TableCell>
                                <TableCell align="right">Panding</TableCell>
                                <TableCell align="right">5 star</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Bookings;