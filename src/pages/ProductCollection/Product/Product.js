import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GiSelfLove } from 'react-icons/gi';
import { Button } from '@mui/material';


const Product = (props) => {
    const { name, price, year, race, type, img } = props.product;

    return (
        <Card sx={{ maxWidth: 392 }}>

            <CardMedia
                component="img"
                height="194"
                image={img}
                alt="Motors"
            />
            <CardContent
                sx={{ ml: '10px', }}
            >
                <Typography
                    sx={{ fontWeight: 700, textAlign: 'center', pb: 2, m: 3, }}
                    variant="h6"
                    color="text.secondary">
                    {name} <br />
                    <Button
                        sx={{ color: 'white', m: 1, py: 1, px: 1, textAlign: 'left', }}
                        variant="contained">  Price :${price} </Button>

                    <Button
                        sx={{ color: 'white', m: 1, py: 1, px: 3, textAlign: 'left', }}
                        variant="contained">Purchase</Button>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>

            <CardActions
                sx={{ py: 2, }}
                disableSpacing>
                <IconButton aria-label="share">
                    <GiSelfLove /> {year}
                </IconButton>
                <IconButton aria-label="share">
                    <GiSelfLove /> {race}
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <GiSelfLove /> {type}
                </IconButton>
            </CardActions>
            <hr />
        </Card>
    );
};

export default Product;