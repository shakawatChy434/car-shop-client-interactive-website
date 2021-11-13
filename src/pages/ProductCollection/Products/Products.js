import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';



const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
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
                    sx={{ fontWeight: 'bold', mt: -7.4, ml: 49, color: 'orange' }}
                    variant="h4" component="div">
                    COLLECTION
                </Typography>
                <Typography
                    sx={{ fontWeight: 'bold', m: 2, pb: 4, }}
                    variant="h6" component="div"
                    color="text.secondary">
                    Curabitur tellus leo, euismod sit amet gravida at, egestas sed commodo.
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, }}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;