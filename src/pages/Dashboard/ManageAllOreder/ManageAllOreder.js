import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../../hooks/useAuth';


const ManageAllOreder = () => {
    const { user } = useAuth();
    const [managAllOrder, setManagAllOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/order')
            .then(res => res.json())
            .then(data => setManagAllOrder(data))
    }, [])
    // Delete handler
    const handlerDeleteOrder = (id) => {
        const url = `http://localhost:7000/order/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    alert('Delete successful')
                }
                const remaingOrder = managAllOrder.filter(user => user._id !== id)
                setManagAllOrder(remaingOrder);
            })

    }
    return (
        <div>
            <h2>Manag All Order</h2>
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
                        {managAllOrder.map((orders) => (
                            <TableRow
                                key={orders.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {orders.name}
                                </TableCell>
                                <TableCell align="right">{orders.productName}</TableCell>
                                <TableCell align="right">{orders.price}</TableCell>
                                <TableCell align="right">{orders.shipping}</TableCell>
                                <TableCell align="right"><Button
                                    onClick={() => handlerDeleteOrder(orders._id)}
                                >Delete</Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOreder;
