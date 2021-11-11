import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';


/* Create Fake Data For Servicess */
const products = [
    {
        id: 1,
        name: 'ACURA ILX 2021',
        price: 21000,
        year: 2021,
        race: '18/100',
        type: 'Automatic',
        img: 'https://i.ibb.co/tQqgdz2/images1.jpg'
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
    {
        id: 7,
        name: 'ACURA ILX 2021',
        price: 21000,
        year: 2021,
        race: '18/100',
        type: 'Automatic',
        img: 'https://i.ibb.co/pwShTNX/download.jpg'
    },
    {
        id: 8,
        name: 'CHEVROLET21',
        price: 23000,
        year: 2021,
        race: '18/100',
        type: 'Automatic',
        img: 'https://i.ibb.co/XLR79Rt/download-2.jpg'
    },
    {
        id: 9,
        name: 'TRAILBLAXAR21',
        price: 28000,
        year: 2021,
        race: '18/100',
        type: 'Automatic',
        img: 'https://i.ibb.co/kgxxncg/download.jpg'
    },
    {
        id: 10,
        name: 'ACURA ILX 2021',
        price: 25000,
        year: 2021,
        race: '18/100',
        type: 'Manual',
        img: 'https://i.ibb.co/6Y9J1kw/images-2.jpg'
    },
    {
        id: 11,
        name: 'TOYOTA AVALON',
        price: 58000,
        year: 1990,
        race: '18/100',
        type: 'Manual',
        img: 'https://i.ibb.co/F5k6Yv1/images.jpg'
    },
    {
        id: 12,
        name: 'ACURA ILX 2021',
        price: 28000,
        year: 1996,
        race: '18/100',
        type: 'Manual',
        img: 'https://i.ibb.co/pwShTNX/download.jpg'
    },
]
const Products = () => {
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
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;