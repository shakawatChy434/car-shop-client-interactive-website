import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';


const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:7000/order')
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])

    return (
        <div>
            <h2>This is MyOrder page</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Shipping</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrder.filter(order => order.email === user.email).map((orders) => (
                            <TableRow
                                key={orders.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {orders.name}
                                </TableCell>
                                <TableCell align="right">{orders.productName}</TableCell>
                                <TableCell align="right">{orders.price}</TableCell>
                                <TableCell align="right">{orders.shipping}</TableCell>
                                <TableCell align="right"><Button>Delete</Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;
